/**
 * JavaScript Learning Hub - Main Application Logic
 * Manages Navigation, UI Rendering, Search, Filtering, Theme, and Progress Tracking
 */

document.addEventListener("DOMContentLoaded", () => {
  // State
  let currentTopicId = "variables-datatypes";
  let activeFilter = "all"; // 'all' | 'core' | 'logical'
  let searchQuery = "";
  let completedTopics = JSON.parse(localStorage.getItem("js_hub_completed") || "[]");
  let isDarkMode = localStorage.getItem("js_hub_theme") === "dark" || 
    (!("js_hub_theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

  // DOM Elements
  const themeToggleBtn = document.getElementById("theme-toggle");
  const searchInput = document.getElementById("search-input");
  const coreTopicsList = document.getElementById("core-topics-list");
  const logicalTopicsList = document.getElementById("logical-topics-list");
  const filterPills = document.querySelectorAll(".filter-pill");
  const mainContentArea = document.getElementById("main-content-area");
  const progressBar = document.getElementById("overall-progress-bar");
  const progressText = document.getElementById("overall-progress-text");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const sidebarElement = document.getElementById("main-sidebar");

  // Initial Theme Setup
  function applyTheme(dark) {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("js_hub_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("js_hub_theme", "light");
    }
  }
  applyTheme(isDarkMode);

  themeToggleBtn.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    applyTheme(isDarkMode);
  });

  // Mobile sidebar toggle
  if (mobileMenuToggle && sidebarElement) {
    mobileMenuToggle.addEventListener("click", () => {
      sidebarElement.classList.toggle("-translate-x-full");
    });
  }

  // Calculate Progress
  function updateProgress() {
    const total = window.topicsData.length;
    const completed = completedTopics.length;
    const pct = Math.round((completed / total) * 100);

    if (progressBar) progressBar.style.width = `${pct}%`;
    if (progressText) progressText.textContent = `${completed}/${total} Completed (${pct}%)`;
  }

  // Toggle Topic Completion
  function toggleTopicComplete(topicId) {
    if (completedTopics.includes(topicId)) {
      completedTopics = completedTopics.filter(id => id !== topicId);
    } else {
      completedTopics.push(topicId);
    }
    localStorage.setItem("js_hub_completed", JSON.stringify(completedTopics));
    updateProgress();
    renderSidebar();
    renderTopicView(currentTopicId);
  }

  // Filter topics based on category and search
  function getFilteredTopics() {
    return window.topicsData.filter(topic => {
      const matchesCategory = 
        activeFilter === "all" ? true :
        activeFilter === "core" ? topic.category === "core" :
        topic.category === "logical";

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        topic.title.toLowerCase().includes(q) ||
        topic.summary.toLowerCase().includes(q) ||
        topic.tags.some(tag => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }

  // Render Sidebar navigation lists
  function renderSidebar() {
    const filtered = getFilteredTopics();
    const coreFiltered = filtered.filter(t => t.category === "core");
    const logicalFiltered = filtered.filter(t => t.category === "logical");

    // Core list
    coreTopicsList.innerHTML = "";
    if (coreFiltered.length === 0) {
      coreTopicsList.innerHTML = `<li class="text-xs text-gray-400 italic px-3 py-2">No matching core topics found</li>`;
    } else {
      coreFiltered.forEach(topic => {
        coreTopicsList.appendChild(createSidebarItem(topic));
      });
    }

    // Logical list
    logicalTopicsList.innerHTML = "";
    if (logicalFiltered.length === 0) {
      logicalTopicsList.innerHTML = `<li class="text-xs text-gray-400 italic px-3 py-2">No matching logical problems found</li>`;
    } else {
      logicalFiltered.forEach(topic => {
        logicalTopicsList.appendChild(createSidebarItem(topic));
      });
    }

    // Update Category Pill Counts
    const coreCount = window.topicsData.filter(t => t.category === "core").length;
    const logicCount = window.topicsData.filter(t => t.category === "logical").length;
    document.getElementById("count-all") && (document.getElementById("count-all").textContent = window.topicsData.length);
    document.getElementById("count-core") && (document.getElementById("count-core").textContent = coreCount);
    document.getElementById("count-logical") && (document.getElementById("count-logical").textContent = logicCount);
  }

  function createSidebarItem(topic) {
    const li = document.createElement("li");
    const isActive = topic.id === currentTopicId;
    const isDone = completedTopics.includes(topic.id);

    li.className = `group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer text-sm font-medium transition-all duration-150 ${
      isActive
        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 font-semibold"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/80"
    }`;

    li.innerHTML = `
      <div class="flex items-center gap-2.5 truncate">
        <span class="w-2 h-2 rounded-full ${isActive ? 'bg-white' : isDone ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'}"></span>
        <span class="truncate">${topic.title}</span>
      </div>
      <div class="flex items-center gap-1.5 shrink-0">
        ${isDone ? `<span class="text-xs ${isActive ? 'text-blue-100' : 'text-emerald-500'}">✓</span>` : ''}
        <span class="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
          isActive 
            ? 'bg-blue-700 text-white' 
            : topic.difficulty === 'Beginner'
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
              : topic.difficulty === 'Intermediate'
                ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
                : 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'
        }">${topic.difficulty.slice(0, 3)}</span>
      </div>
    `;

    li.addEventListener("click", () => {
      currentTopicId = topic.id;
      renderSidebar();
      renderTopicView(topic.id);
      // Close sidebar on mobile upon selection
      if (window.innerWidth < 1024 && sidebarElement) {
        sidebarElement.classList.add("-translate-x-full");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return li;
  }

  // Render Full Topic View
  function renderTopicView(topicId) {
    const topic = window.topicsData.find(t => t.id === topicId) || window.topicsData[0];
    currentTopicId = topic.id;

    const currentIndex = window.topicsData.findIndex(t => t.id === topic.id);
    const prevTopic = window.topicsData[currentIndex - 1] || null;
    const nextTopic = window.topicsData[currentIndex + 1] || null;
    const isDone = completedTopics.includes(topic.id);

    const difficultyBadgeClass = 
      topic.difficulty === "Beginner" 
        ? "bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800"
        : topic.difficulty === "Intermediate"
          ? "bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800"
          : "bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800";

    const categoryBadge = topic.category === "core" 
      ? `<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">📘 Core JS Topic</span>`
      : `<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">🧠 Logical Challenge</span>`;

    const complexityBlock = topic.complexity ? `
      <div class="my-4 p-4 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">Algorithmic Complexity</span>
          <div class="flex gap-4 mt-1 text-sm">
            <span class="text-gray-700 dark:text-gray-300">⏱ <strong>Time:</strong> <code class="font-mono text-purple-600 dark:text-purple-400">${topic.complexity.time}</code></span>
            <span class="text-gray-700 dark:text-gray-300">💾 <strong>Space:</strong> <code class="font-mono text-purple-600 dark:text-purple-400">${topic.complexity.space}</code></span>
          </div>
        </div>
        <span class="px-3 py-1 bg-purple-200 dark:bg-purple-900/80 text-purple-900 dark:text-purple-200 rounded-full text-xs font-semibold">Interview Favorite</span>
      </div>
    ` : "";

    const conceptsHtml = topic.concepts && topic.concepts.length > 0 ? `
      <div class="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
        <h4 class="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5 flex items-center gap-2">
          <span>🎯</span> Key Takeaways & Rules
        </h4>
        <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          ${topic.concepts.map(c => `<li class="flex items-start gap-2"><span class="text-blue-500 font-bold">•</span><span>${c}</span></li>`).join("")}
        </ul>
      </div>
    ` : "";

    const tagsHtml = topic.tags ? topic.tags.map(tag => 
      `<span class="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-mono">#${tag}</span>`
    ).join("") : "";

    mainContentArea.innerHTML = `
      <!-- TOPIC HEADER -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-800">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            ${categoryBadge}
            <span class="px-2.5 py-1 text-xs font-semibold rounded-full border ${difficultyBadgeClass}">${topic.difficulty}</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">${topic.title}</h1>
          <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">${topic.summary}</p>
          <div class="flex flex-wrap gap-1.5 mt-3">${tagsHtml}</div>
        </div>

        <!-- Mark as Completed Button -->
        <button id="btn-toggle-completed" class="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
          isDone 
            ? "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20"
            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"
        }">
          <span>${isDone ? "✓ Completed" : "Mark as Completed"}</span>
        </button>
      </div>

      <!-- KEY CONCEPTS & COMPLEXITY -->
      <div class="my-6">
        ${complexityBlock}
        ${conceptsHtml}
        
        <!-- Explanation Body -->
        <div class="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
          ${topic.explanation}
        </div>
      </div>

      <!-- CODE & SYNTAX EXAMPLES -->
      <div class="space-y-6">
        <!-- Syntax Snippet Card -->
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-rose-500"></span>
              <span class="w-3 h-3 rounded-full bg-amber-500"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span class="ml-2 text-xs font-mono text-gray-400 font-semibold">syntax.js</span>
            </div>
            <button class="copy-btn text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors" data-copy-target="syntax-code">
              <span>📋 Copy Syntax</span>
            </button>
          </div>
          <pre class="p-4 text-xs sm:text-sm text-gray-200 overflow-x-auto bg-[#0d1117] rounded-b-xl"><code id="syntax-code">${escapeHtml(topic.syntax)}</code></pre>
        </div>

        <!-- Full Working Example Card -->
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-blue-500"></span>
              <span class="ml-2 text-xs font-mono text-gray-300 font-semibold">example_solution.js</span>
            </div>
            <button class="copy-btn text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors" data-copy-target="example-code">
              <span>📋 Copy Solution</span>
            </button>
          </div>
          <pre class="p-4 text-xs sm:text-sm text-emerald-300 overflow-x-auto bg-[#0d1117] rounded-b-xl"><code id="example-code">${escapeHtml(topic.exampleCode)}</code></pre>
        </div>
      </div>

      <!-- INTERACTIVE LIVE TESTING PLAYGROUND -->
      <div class="my-8 p-6 rounded-2xl bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700/80 shadow-lg shadow-gray-200/50 dark:shadow-none">
        <div class="flex items-center justify-between pb-4 mb-5 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center gap-2.5">
            <div class="p-2 rounded-lg bg-blue-600 text-white font-bold text-base">⚡</div>
            <div>
              <h3 class="text-base font-bold text-gray-900 dark:text-white">Interactive Live Test Runner</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">Modify inputs and click Run to test logic with instant output</p>
            </div>
          </div>
          <div id="execution-status"></div>
        </div>

        <!-- Dynamic Inputs Form -->
        <div id="dynamic-inputs-container" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5"></div>

        <!-- Run / Action Buttons -->
        <div class="flex items-center gap-3 mb-6">
          <button id="btn-run-code" class="flex-1 sm:flex-none px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-500/25 transition-all transform active:scale-95 flex items-center justify-center gap-2">
            <span>▶ Run Code</span>
          </button>
          <button id="btn-reset-inputs" class="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm font-semibold rounded-xl transition-all">
            <span>↺ Reset</span>
          </button>
        </div>

        <!-- Terminal Output Window -->
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono text-gray-400">🖥️ Live Console & Execution Trace</span>
            </div>
            <span class="text-[11px] font-mono text-gray-500">JavaScript vES6+</span>
          </div>

          <!-- Trace Logs -->
          <div id="console-logs" class="p-4 bg-[#0a0f1d] border-b border-gray-800 min-h-[60px] max-h-[160px] overflow-y-auto space-y-1"></div>

          <!-- Final Returned Output -->
          <div class="p-4 bg-[#050811] rounded-b-xl">
            <div class="text-[11px] uppercase tracking-wider font-bold text-gray-500 mb-2">Evaluated Result:</div>
            <pre id="console-output" class="text-xs sm:text-sm font-mono text-amber-300 overflow-x-auto whitespace-pre-wrap"></pre>
          </div>
        </div>
      </div>

      <!-- PREV / NEXT NAVIGATION -->
      <div class="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-800">
        ${
          prevTopic
            ? `<button id="btn-prev-topic" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium transition-all">
                <span>← ${prevTopic.title}</span>
               </button>`
            : `<div></div>`
        }
        ${
          nextTopic
            ? `<button id="btn-next-topic" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all shadow-md shadow-blue-600/20">
                <span>${nextTopic.title} →</span>
               </button>`
            : `<div></div>`
        }
      </div>
    `;

    // Hook events
    document.getElementById("btn-toggle-completed")?.addEventListener("click", () => {
      toggleTopicComplete(topic.id);
    });

    if (prevTopic) {
      document.getElementById("btn-prev-topic")?.addEventListener("click", () => {
        currentTopicId = prevTopic.id;
        renderSidebar();
        renderTopicView(prevTopic.id);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    if (nextTopic) {
      document.getElementById("btn-next-topic")?.addEventListener("click", () => {
        currentTopicId = nextTopic.id;
        renderSidebar();
        renderTopicView(nextTopic.id);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Setup Runner
    const inputsContainer = document.getElementById("dynamic-inputs-container");
    const consoleOutput = document.getElementById("console-output");
    const consoleLogs = document.getElementById("console-logs");
    const runBtn = document.getElementById("btn-run-code");
    const resetBtn = document.getElementById("btn-reset-inputs");

    if (window.codeRunner && inputsContainer) {
      window.codeRunner.renderInputs(topic, inputsContainer);

      const triggerRun = () => {
        window.codeRunner.run(consoleOutput, consoleLogs);
      };

      runBtn?.addEventListener("click", triggerRun);
      resetBtn?.addEventListener("click", () => {
        window.codeRunner.renderInputs(topic, inputsContainer);
        triggerRun();
      });

      // Automatically run once on topic load
      triggerRun();
    }

    // Hook Copy Buttons
    document.querySelectorAll(".copy-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.dataset.copyTarget;
        const targetCode = document.getElementById(targetId)?.textContent || "";
        navigator.clipboard.writeText(targetCode).then(() => {
          const originalText = btn.innerHTML;
          btn.innerHTML = `<span class="text-emerald-400 font-bold">✓ Copied!</span>`;
          setTimeout(() => {
            btn.innerHTML = originalText;
          }, 2000);
        });
      });
    });
  }

  function escapeHtml(str) {
    if (typeof str !== "string") return String(str);
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // Filter Pill buttons (All / Core / Logical)
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => {
        p.classList.remove("bg-blue-600", "text-white");
        p.classList.add("bg-gray-100", "text-gray-700", "dark:bg-gray-800", "dark:text-gray-300");
      });
      pill.classList.remove("bg-gray-100", "text-gray-700", "dark:bg-gray-800", "dark:text-gray-300");
      pill.classList.add("bg-blue-600", "text-white");

      activeFilter = pill.dataset.filter;
      renderSidebar();
    });
  });

  // Search input handler
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderSidebar();
  });

  // Initial Initialization
  updateProgress();
  renderSidebar();
  renderTopicView(currentTopicId);
});
