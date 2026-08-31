/**
 * JavaScript Learning Hub - Code Execution & Playground Engine
 */

class CodeRunnerEngine {
  constructor() {
    this.currentTopic = null;
  }

  /**
   * Render dynamic input fields based on the topic's input definitions
   */
  renderInputs(topic, containerElement) {
    this.currentTopic = topic;
    containerElement.innerHTML = "";

    if (!topic.inputs || topic.inputs.length === 0) {
      containerElement.innerHTML = `<p class="text-sm text-gray-500 italic">No custom inputs required for this topic demo.</p>`;
      return;
    }

    topic.inputs.forEach(inputDef => {
      const fieldWrapper = document.createElement("div");
      fieldWrapper.className = "flex flex-col gap-1.5";

      const label = document.createElement("label");
      label.className = "text-xs font-semibold text-gray-600 dark:text-gray-300 flex items-center justify-between";
      label.innerHTML = `<span>${inputDef.label}</span> <span class="text-[10px] text-gray-400 font-mono">(${inputDef.type})</span>`;

      let inputElem;
      if (inputDef.type === "select") {
        inputElem = document.createElement("select");
        inputElem.className = "w-full px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all";
        inputDef.options.forEach(opt => {
          const option = document.createElement("option");
          option.value = opt;
          option.textContent = opt.charAt(0).toUpperCase() + opt.slice(1);
          if (opt === inputDef.default) option.selected = true;
          inputElem.appendChild(option);
        });
      } else {
        inputElem = document.createElement("input");
        inputElem.type = inputDef.type;
        inputElem.value = inputDef.default !== undefined ? inputDef.default : "";
        inputElem.className = "w-full px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all font-mono";
        if (inputDef.placeholder) inputElem.placeholder = inputDef.placeholder;
      }

      inputElem.id = `input-${inputDef.id}`;
      inputElem.dataset.inputId = inputDef.id;

      // Allow pressing Enter to run code directly
      inputElem.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          document.getElementById("btn-run-code")?.click();
        }
      });

      fieldWrapper.appendChild(label);
      fieldWrapper.appendChild(inputElem);
      containerElement.appendChild(fieldWrapper);
    });
  }

  /**
   * Collect all inputs currently present in the inputs container
   */
  gatherInputs() {
    if (!this.currentTopic || !this.currentTopic.inputs) return {};
    const values = {};
    this.currentTopic.inputs.forEach(inputDef => {
      const elem = document.getElementById(`input-${inputDef.id}`);
      if (elem) {
        values[inputDef.id] = elem.value;
      }
    });
    return values;
  }

  /**
   * Run the topic handler safely and format logs + return values
   */
  run(outputConsole, logContainer) {
    if (!this.currentTopic || typeof this.currentTopic.execute !== "function") {
      outputConsole.textContent = "No execution handler defined for this topic.";
      return;
    }

    const inputs = this.gatherInputs();
    
    // Clear previous logs
    logContainer.innerHTML = "";
    outputConsole.innerHTML = "";

    try {
      const startTime = performance.now();
      const result = this.currentTopic.execute(inputs);
      const executionTime = (performance.now() - startTime).toFixed(2);

      // Render step logs
      if (result.logs && result.logs.length > 0) {
        result.logs.forEach((logText, idx) => {
          const logRow = document.createElement("div");
          logRow.className = "flex items-start gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 py-0.5 transition-colors";
          logRow.innerHTML = `<span class="text-gray-500 select-none">›</span><span>${this.escapeHtml(logText)}</span>`;
          logContainer.appendChild(logRow);
        });
      }

      // Render Output
      if (result.isHtml) {
        outputConsole.innerHTML = result.output;
      } else {
        const jsonStr = JSON.stringify(result.output, null, 2);
        outputConsole.textContent = jsonStr;
      }

      // Execution status footer badge
      const statusBadge = document.getElementById("execution-status");
      if (statusBadge) {
        statusBadge.innerHTML = `<span class="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono"><span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Executed in ${executionTime}ms</span>`;
      }

    } catch (err) {
      console.error(err);
      outputConsole.innerHTML = `<span class="text-rose-400 font-mono text-xs">Runtime Error: ${this.escapeHtml(err.message)}</span>`;
    }
  }

  escapeHtml(str) {
    if (typeof str !== "string") return String(str);
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

window.codeRunner = new CodeRunnerEngine();
