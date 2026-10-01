/**
 * JavaScript Learning Hub - Content & Logic Data Store
 * Contains 10 Core JavaScript Topics and 10 Logical Programming Challenges
 */

const topicsData = [
  // ==========================================
  // 10 CORE JAVASCRIPT TOPICS
  // ==========================================
  {
    id: "variables-datatypes",
    category: "core",
    title: "1. Variables & Data Types",
    difficulty: "Beginner",
    summary: "Understand how JavaScript stores data using var, let, and const alongside primitive and reference data types.",
    tags: ["var", "let", "const", "Primitives", "Reference Types", "typeof"],
    concepts: [
      "var is function-scoped and hoisted with undefined initialization.",
      "let and const are block-scoped and exist in the Temporal Dead Zone (TDZ) before declaration.",
      "7 Primitive Types: string, number, bigint, boolean, undefined, symbol, null.",
      "Reference Types: Object, Array, Function, Date, Map, Set (stored as references in heap memory)."
    ],
    explanation: `
      <p class="mb-3">In JavaScript, variables are containers for storing data values. Modern JavaScript (ES6+) recommends using <code class="text-blue-500 font-mono">let</code> for values that will change and <code class="text-emerald-500 font-mono">const</code> for identifiers that won't be reassigned.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-1">Primitive Types</h4>
          <p class="text-sm text-gray-600 dark:text-gray-300">Stored directly in the call stack by value. Immutable in nature (Strings, Numbers, Booleans, Null, Undefined, Symbol, BigInt).</p>
        </div>
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 class="font-bold text-purple-600 dark:text-purple-400 mb-1">Reference Types</h4>
          <p class="text-sm text-gray-600 dark:text-gray-300">Stored in the heap memory; variables only hold memory references/pointers (Objects, Arrays, Functions).</p>
        </div>
      </div>
    `,
    syntax: `// Declarations
let userAge = 25;           // Number
const userName = "Mohan";   // String
const isLearner = true;     // Boolean
let emptyVal = null;        // Null (object type quirk)
let notAssigned;            // Undefined

// Type checking
console.log(typeof userName); // "string"`,
    exampleCode: `// 1. Primitive vs Reference Demonstration
let a = 10;
let b = a; // Copied by value
b = 20;
console.log("a:", a, "| b:", b); // a is still 10

let user1 = { name: "Alice" };
let user2 = user1; // Copied by reference
user2.name = "Bob";
console.log("user1.name:", user1.name); // Changed to "Bob"!`,
    inputs: [
      { id: "varValue", label: "Enter any value to inspect its JS Type & properties", type: "text", default: "Hello JavaScript 2026" }
    ],
    execute: (inputs) => {
      const raw = inputs.varValue;
      let parsedVal = raw;
      let deducedType = "string";

      if (raw.toLowerCase() === "true" || raw.toLowerCase() === "false") {
        parsedVal = raw.toLowerCase() === "true";
        deducedType = "boolean";
      } else if (!isNaN(raw) && raw.trim() !== "") {
        parsedVal = Number(raw);
        deducedType = "number";
      } else if (raw.toLowerCase() === "null") {
        parsedVal = null;
        deducedType = "null (Primitive object)";
      } else if (raw.toLowerCase() === "undefined") {
        parsedVal = undefined;
        deducedType = "undefined";
      } else if (raw.startsWith("{") && raw.endsWith("}")) {
        try {
          parsedVal = JSON.parse(raw);
          deducedType = "object (Reference)";
        } catch (e) {
          deducedType = "string";
        }
      } else if (raw.startsWith("[") && raw.endsWith("]")) {
        try {
          parsedVal = JSON.parse(raw);
          deducedType = "array (Reference)";
        } catch (e) {
          deducedType = "string";
        }
      }

      const logs = [
        `[INPUT RECEIVED] raw: "${raw}"`,
        `[TYPE CHECK] Detected Type: ${deducedType}`,
        `[TYPEOF OPERATOR] typeof input = "${typeof parsedVal}"`,
        `[VALUE IN MEMORY] ${JSON.stringify(parsedVal)}`
      ];

      return {
        success: true,
        output: {
          originalValue: raw,
          evaluatedValue: parsedVal,
          jsType: deducedType,
          typeofResult: typeof parsedVal,
          isPrimitive: !["object", "array (Reference)", "function"].includes(deducedType)
        },
        logs
      };
    }
  },

  {
    id: "operators-expressions",
    category: "core",
    title: "2. Operators & Expressions",
    difficulty: "Beginner",
    summary: "Master arithmetic, comparison, logical, ternary, and nullish coalescing operators in JavaScript.",
    tags: ["Arithmetic", "Strict Equality (===)", "Logical && ||", "Nullish ??", "Ternary"],
    concepts: [
      "Strict equality (===) compares both value and type without type coercion.",
      "Loose equality (==) performs implicit type coercion before comparison.",
      "Logical Operators: AND (&&), OR (||), NOT (!), and short-circuit evaluation.",
      "Modern Operators: Nullish Coalescing (??) checks specifically for null or undefined, unlike || which checks falsy."
    ],
    explanation: `
      <p class="mb-3">Operators are used to perform operations on variables and values. Expressions evaluate down to a single value.</p>
      
      <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-lg border border-amber-200 dark:border-amber-800 text-sm mb-3">
        <strong class="text-amber-800 dark:text-amber-300">Pro Tip:</strong> Always prefer <code class="font-mono font-bold">===</code> over <code class="font-mono font-bold">==</code> to prevent unexpected type coercion bugs (e.g., <code class="font-mono">0 == false</code> is true, but <code class="font-mono">0 === false</code> is false).
      </div>
    `,
    syntax: `// Comparison
5 === "5"  // false (Strict - different types)
5 == "5"   // true  (Loose - string coerced to number)

// Nullish Coalescing vs OR
const count = 0;
const a = count || 10;   // 10 (because 0 is falsy)
const b = count ?? 10;   // 0 (because 0 is not null/undefined)`,
    exampleCode: `function evaluateExpressions(num1, num2) {
  return {
    addition: num1 + num2,
    multiplication: num1 * num2,
    modulus: num1 % num2,
    isEqualStrict: num1 === num2,
    ternaryCheck: num1 > num2 ? "Num1 is Greater" : "Num2 is Greater or Equal",
    logicalAnd: (num1 > 0) && (num2 > 0)
  };
}`,
    inputs: [
      { id: "opA", label: "Operand A (Number or String)", type: "text", default: "15" },
      { id: "opB", label: "Operand B (Number or String)", type: "text", default: "5" }
    ],
    execute: (inputs) => {
      const a = isNaN(inputs.opA) ? inputs.opA : Number(inputs.opA);
      const b = isNaN(inputs.opB) ? inputs.opB : Number(inputs.opB);

      const logs = [
        `Evaluating Operand A: ${a} (${typeof a}) and Operand B: ${b} (${typeof b})`,
        `Strict Equality (A === B): ${a === b}`,
        `Loose Equality (A == B): ${a == b}`,
        `Arithmetic Addition / Concat (A + B): ${a + b}`,
        `Arithmetic Subtraction (A - B): ${a - b}`,
        `Multiplication (A * B): ${a * b}`,
        `Ternary Expression (A >= B ? 'A wins' : 'B wins'): ${a >= b ? 'A is greater or equal' : 'B is greater'}`
      ];

      return {
        success: true,
        output: {
          addition: a + b,
          subtraction: typeof a === "number" && typeof b === "number" ? a - b : "N/A (Non-numeric)",
          multiplication: typeof a === "number" && typeof b === "number" ? a * b : "N/A",
          division: typeof a === "number" && typeof b === "number" && b !== 0 ? (a / b).toFixed(2) : "N/A",
          strictEqual: a === b,
          looseEqual: a == b,
          nullishCoalesce: a ?? b
        },
        logs
      };
    }
  },

  {
    id: "conditionals-control-flow",
    category: "core",
    title: "3. Conditionals & Control Flow",
    difficulty: "Beginner",
    summary: "Control the execution flow of your code using if-else statements, switch-case blocks, and truthy/falsy logic.",
    tags: ["if-else", "switch", "Truthy", "Falsy", "Control Flow"],
    concepts: [
      "JavaScript evaluates expressions to boolean in condition checks.",
      "6 Falsy values in JS: false, 0, -0, '' (empty string), null, undefined, NaN.",
      "All other values (including empty arrays [] and empty objects {}) are truthy!",
      "Switch statements use strict equality (===) when matching case clauses."
    ],
    explanation: `
      <p class="mb-3">Conditional statements allow your program to take different branches based on runtime conditions.</p>
      
      <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
        <strong>Truthy / Falsy Caveat:</strong> In JavaScript, <code class="font-mono">Boolean([])</code> and <code class="font-mono">Boolean({})</code> are <strong>TRUE</strong> because objects/arrays are reference types!
      </div>
    `,
    syntax: `// if - else if - else
if (score >= 90) {
  grade = "A";
} else if (score >= 75) {
  grade = "B";
} else {
  grade = "C";
}

// switch - case
switch (role) {
  case "admin":
    accessLevel = "Full";
    break;
  case "editor":
    accessLevel = "Write";
    break;
  default:
    accessLevel = "Read-Only";
}`,
    exampleCode: `function getStudentGrade(score) {
  if (score < 0 || score > 100) return "Invalid Score";
  if (score >= 90) return "Grade A+ (Distinction)";
  if (score >= 80) return "Grade A (Excellent)";
  if (score >= 60) return "Grade B (Good)";
  if (score >= 40) return "Grade C (Pass)";
  return "Grade F (Needs Improvement)";
}`,
    inputs: [
      { id: "scoreInput", label: "Enter Score / Marks (0 - 100)", type: "number", default: 85 }
    ],
    execute: (inputs) => {
      const score = Number(inputs.scoreInput);
      let grade = "";
      let remark = "";

      if (isNaN(score) || score < 0 || score > 100) {
        return {
          success: false,
          output: "Please enter a valid numeric score between 0 and 100.",
          logs: [`Validation failed: input "${inputs.scoreInput}" is out of bounds [0 - 100]`]
        };
      }

      if (score >= 90) {
        grade = "A+";
        remark = "Distinction - Outstanding Performance!";
      } else if (score >= 80) {
        grade = "A";
        remark = "Excellent work!";
      } else if (score >= 70) {
        grade = "B";
        remark = "Very Good!";
      } else if (score >= 50) {
        grade = "C";
        remark = "Average Pass.";
      } else {
        grade = "F";
        remark = "Fail - Keep Practicing!";
      }

      const logs = [
        `Evaluating score: ${score}`,
        `Branch checked: score >= 90 ? ${score >= 90}`,
        `Branch checked: score >= 80 ? ${score >= 80}`,
        `Final evaluation: Grade ${grade}`
      ];

      return {
        success: true,
        output: { score, grade, remark, passed: score >= 50 },
        logs
      };
    }
  },

  {
    id: "loops-iteration",
    category: "core",
    title: "4. Loops & Iterations",
    difficulty: "Beginner",
    summary: "Repeat actions efficiently with for, while, do-while, for...of (iterables), and for...in (object keys).",
    tags: ["for loop", "while", "do-while", "for...of", "for...in", "break/continue"],
    concepts: [
      "Standard for loop: best when iteration count is known beforehand.",
      "while loop: repeats as long as a condition remains true.",
      "do-while loop: guaranteed to execute at least once before testing condition.",
      "for...of loop: iterates over iterable values (Arrays, Strings, Maps, Sets).",
      "for...in loop: iterates over enumerable keys of an object."
    ],
    explanation: `
      <p class="mb-3">Loops automate repetitive tasks. JavaScript provides traditional counter loops as well as modern iterator-based loops.</p>
    `,
    syntax: `// Standard For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for...of (Iterating Array values)
const fruits = ["Apple", "Mango", "Banana"];
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in (Iterating Object properties)
const car = { brand: "Tesla", model: "Y" };
for (const key in car) {
  console.log(key, ":", car[key]);
}`,
    exampleCode: `// Loop through numbers and compute sums and evens
function analyzeRange(limit) {
  let sum = 0;
  let evens = [];
  for (let i = 1; i <= limit; i++) {
    sum += i;
    if (i % 2 === 0) evens.push(i);
  }
  return { sum, evensCount: evens.length, evens };
}`,
    inputs: [
      { id: "loopLimit", label: "Loop Count / Limit (e.g. 10)", type: "number", default: 8 }
    ],
    execute: (inputs) => {
      const limit = Math.min(Math.max(1, Number(inputs.loopLimit) || 5), 50);
      const steps = [];
      let totalSum = 0;
      let evenNumbers = [];
      let oddNumbers = [];

      for (let i = 1; i <= limit; i++) {
        totalSum += i;
        if (i % 2 === 0) {
          evenNumbers.push(i);
        } else {
          oddNumbers.push(i);
        }
        steps.push(`Iteration ${i}: Running Sum = ${totalSum} | Type = ${i % 2 === 0 ? "Even" : "Odd"}`);
      }

      return {
        success: true,
        output: {
          limit,
          totalSum,
          evenNumbers,
          oddNumbers,
          formulaCheck: (limit * (limit + 1)) / 2
        },
        logs: steps
      };
    }
  },

  {
    id: "functions-arrow",
    category: "core",
    title: "5. Functions & Arrow Functions",
    difficulty: "Intermediate",
    summary: "Deep dive into function declarations, function expressions, ES6 arrow functions, parameters, and lexical this.",
    tags: ["Function Declaration", "Arrow Function", "Parameters", "this keyword", "Callbacks"],
    concepts: [
      "Function Declarations are hoisted entirely to the top of their scope.",
      "Function Expressions and Arrow Functions are not hoisted.",
      "Arrow Functions do NOT have their own 'this', 'arguments', or 'super' (lexical this binding).",
      "Support for Default Parameters and Rest Parameters (...args)."
    ],
    explanation: `
      <p class="mb-3">Functions are reusable first-class citizens in JavaScript, meaning they can be passed as arguments, returned from other functions, and assigned to variables.</p>
    `,
    syntax: `// 1. Function Declaration (Hoisted)
function greet(name = "Friend") {
  return \`Hello, \${name}!\`;
}

// 2. Function Expression
const multiply = function(a, b) {
  return a * b;
};

// 3. Arrow Function (Concise syntax)
const add = (a, b) => a + b;

// 4. Rest Parameters
const sumAll = (...numbers) => numbers.reduce((acc, n) => acc + n, 0);`,
    exampleCode: `// Traditional vs Arrow function
const calculator = {
  factor: 2,
  // Regular method gets its 'this' from caller
  doubleRegular: function(nums) {
    return nums.map(function(n) {
      // 'this' would be undefined or window without arrow function!
      return n * 2;
    });
  },
  // Arrow function retains 'this' from lexical scope
  doubleArrow: function(nums) {
    return nums.map(n => n * this.factor);
  }
};`,
    inputs: [
      { id: "fnBase", label: "Base Number", type: "number", default: 5 },
      { id: "fnExponent", label: "Exponent / Power", type: "number", default: 3 }
    ],
    execute: (inputs) => {
      const base = Number(inputs.fnBase) || 2;
      const exp = Number(inputs.fnExponent) || 3;

      // Demonstrating regular vs arrow execution
      const calcPower = (b, e) => Math.pow(b, e);
      const calcMultiplier = (b, multiplier = 10) => b * multiplier;

      const logs = [
        `Function Execution: calcPower(${base}, ${exp})`,
        `Arrow Function called: (${base}) ** (${exp}) = ${calcPower(base, exp)}`,
        `Default Parameter check: calcMultiplier(${base}) = ${calcMultiplier(base)}`
      ];

      return {
        success: true,
        output: {
          powerResult: calcPower(base, exp),
          multipliedBy10: calcMultiplier(base),
          isEvenResult: calcPower(base, exp) % 2 === 0
        },
        logs
      };
    }
  },

  {
    id: "arrays-methods",
    category: "core",
    title: "6. Arrays & Higher-Order Methods",
    difficulty: "Intermediate",
    summary: "Work with JavaScript arrays and powerful functional methods like map, filter, reduce, find, some, and every.",
    tags: ["map()", "filter()", "reduce()", "find()", "slice()", "splice()"],
    concepts: [
      "map(): Transforms each item in an array and returns a new array of the same length.",
      "filter(): Returns a new array containing only elements that satisfy the predicate condition.",
      "reduce(): Accumulates array elements into a single resulting value (number, object, array).",
      "Mutating methods: push, pop, shift, unshift, splice, sort, reverse.",
      "Non-mutating methods: map, filter, slice, concat, reduce, toSorted."
    ],
    explanation: `
      <p class="mb-3">Arrays in JavaScript are ordered lists of data. Higher-order methods allow declarative and readable data transformation.</p>
    `,
    syntax: `const numbers = [10, 20, 30, 40, 50];

// Map: Double all numbers
const doubled = numbers.map(n => n * 2); // [20, 40, 60, 80, 100]

// Filter: Elements greater than 25
const filtered = numbers.filter(n => n > 25); // [30, 40, 50]

// Reduce: Sum of all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 150`,
    exampleCode: `// Processing e-commerce products with chained methods
const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 75, inStock: false },
  { name: "Monitor", price: 300, inStock: true }
];

const totalStockCost = products
  .filter(item => item.inStock)
  .map(item => item.price)
  .reduce((total, price) => total + price, 0); // 1525`,
    inputs: [
      { id: "arrValues", label: "Array of Numbers (comma-separated)", type: "text", default: "12, 5, 8, 130, 44, 3, 20" },
      { id: "filterThreshold", label: "Filter: Keep numbers greater than", type: "number", default: 10 }
    ],
    execute: (inputs) => {
      const arr = inputs.arrValues
        .split(",")
        .map(x => Number(x.trim()))
        .filter(x => !isNaN(x));

      const threshold = Number(inputs.filterThreshold) || 10;

      const doubled = arr.map(n => n * 2);
      const filtered = arr.filter(n => n > threshold);
      const sum = arr.reduce((acc, val) => acc + val, 0);
      const firstBig = arr.find(n => n > 50);

      const logs = [
        `Original Array: [${arr.join(", ")}]`,
        `map(x => x * 2): [${doubled.join(", ")}]`,
        `filter(x => x > ${threshold}): [${filtered.join(", ")}]`,
        `reduce((acc, x) => acc + x, 0): ${sum}`,
        `find(x => x > 50): ${firstBig !== undefined ? firstBig : "None found"}`
      ];

      return {
        success: true,
        output: {
          originalLength: arr.length,
          mappedDoubled: doubled,
          filteredAboveThreshold: filtered,
          accumulatedSum: sum,
          average: arr.length ? (sum / arr.length).toFixed(2) : 0
        },
        logs
      };
    }
  },

  {
    id: "objects-destructuring",
    category: "core",
    title: "7. Objects & Destructuring",
    difficulty: "Intermediate",
    summary: "Work with key-value structures, object methods, property shorthand, rest/spread operators, and nested destructuring.",
    tags: ["Object.keys", "Object.values", "Destructuring", "Spread ...", "JSON"],
    concepts: [
      "Objects store keyed collections of complex entities.",
      "Object Destructuring allows unpacking properties directly into variables.",
      "Spread syntax (...) allows shallow copying and merging objects seamlessly.",
      "Optional Chaining (?.) prevents runtime errors when accessing deeply nested properties."
    ],
    explanation: `
      <p class="mb-3">Objects are fundamental building blocks in JavaScript. ES6 introduced destructuring and spread operators, making object manipulation concise.</p>
    `,
    syntax: `// Object Definition
const developer = {
  name: "Mohan",
  role: "Fullstack Engineer",
  skills: ["JavaScript", "HTML", "CSS"],
  address: { city: "Chennai", country: "India" }
};

// Object Destructuring with Aliasing & Default Values
const { name, role, address: { city }, experience = 1 } = developer;

// Spread Operator (Merging)
const updatedDev = { ...developer, level: "Senior" };`,
    exampleCode: `// Practical Object Operations
const user = { id: 101, username: "dev_coder", email: "coder@example.com" };

// Dynamic Property Keys
const dynamicKey = "status";
user[dynamicKey] = "Active";

// Iterating Object Entries
Object.entries(user).forEach(([key, value]) => {
  console.log(\`\${key.toUpperCase()}: \${value}\`);
});`,
    inputs: [
      { id: "devName", label: "Developer Name", type: "text", default: "Sakthi Mohan" },
      { id: "devSkills", label: "Skills (comma-separated)", type: "text", default: "JavaScript, React, Node.js, Tailwind" }
    ],
    execute: (inputs) => {
      const skillsArray = inputs.devSkills.split(",").map(s => s.trim()).filter(Boolean);
      
      const devObject = {
        name: inputs.devName,
        skillsCount: skillsArray.length,
        skills: skillsArray,
        isAvailableForHire: true,
        metadata: {
          createdYear: 2026,
          platform: "JS Learning Hub"
        }
      };

      // Destructuring demonstration
      const { name, skills, metadata: { platform } } = devObject;
      const mergedObj = { ...devObject, badge: "Certified JS Developer" };

      const logs = [
        `Created Object for: "${name}"`,
        `Extracted skills using destructuring: [${skills.join(", ")}]`,
        `Nested destructuring accessed platform: "${platform}"`,
        `Object.keys count: ${Object.keys(devObject).length}`
      ];

      return {
        success: true,
        output: {
          profile: mergedObj,
          keys: Object.keys(devObject),
          values: Object.values(devObject)
        },
        logs
      };
    }
  },

  {
    id: "string-methods",
    category: "core",
    title: "8. String Methods",
    difficulty: "Beginner",
    summary: "Master essential built-in JavaScript string methods: slice, split, replace, includes, indexOf, toUpperCase, toLowerCase, trim, and more.",
    tags: ["String", "slice()", "split()", "replace()", "includes()", "indexOf()", "trim()"],
    concepts: [
      "Strings in JavaScript are immutable — all methods return a new string without changing the original.",
      "slice(start, end): Extracts a portion of a string. Negative index counts from the end.",
      "split(separator): Converts a string into an array of substrings based on a delimiter.",
      "replace() and replaceAll(): Replaces first (or all) occurrences of a pattern or regex.",
      "includes(), startsWith(), endsWith(): Boolean checks for substring presence.",
      "indexOf() / lastIndexOf(): Returns the position index of a substring (-1 if not found).",
      "trim(), trimStart(), trimEnd(): Removes whitespace from both or one end of a string."
    ],
    explanation: `
      <p class="mb-3">JavaScript has a rich set of <strong>built-in String methods</strong> that allow powerful text manipulation without any external libraries. Since strings are immutable, every method returns a new value.</p>
      <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-lg border border-blue-200 dark:border-blue-800 text-sm mb-3">
        <strong>Remember:</strong> String indexes start at <code class="font-mono font-bold">0</code>. You can also use negative indexes with <code class="font-mono">slice()</code> to count from the end.
      </div>
    `,
    syntax: `const str = "  Hello, JavaScript World!  ";

// Trimming whitespace
str.trim()              // "Hello, JavaScript World!"

// Case conversion
str.trim().toUpperCase()  // "HELLO, JAVASCRIPT WORLD!"
str.trim().toLowerCase()  // "hello, javascript world!"

// slice(start, end)
str.trim().slice(0, 5)    // "Hello"
str.trim().slice(-6)      // "orld!" (negative = from end)

// includes / indexOf
str.includes("JavaScript")   // true
str.indexOf("World")         // 18

// split → array
"apple,mango,banana".split(",")  // ["apple", "mango", "banana"]

// replace
"I love cats".replace("cats", "dogs")  // "I love dogs"`,
    exampleCode: `// Practical String Pipeline
function processUserInput(rawInput) {
  const cleaned = rawInput.trim().toLowerCase();
  const words = cleaned.split(" ");
  const capitalized = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return {
    original: rawInput,
    trimmed: cleaned,
    wordCount: words.length,
    titleCase: capitalized,
    hasNumbers: /\d/.test(rawInput),
    firstWord: words[0],
    lastWord: words[words.length - 1]
  };
}`,
    inputs: [
      { id: "strInput", label: "Enter any text string to analyze", type: "text", default: "  hello, this is JavaScript string methods demo!  " },
      { id: "searchWord", label: "Search / Find this word inside the string", type: "text", default: "JavaScript" }
    ],
    execute: (inputs) => {
      const raw = inputs.strInput || "";
      const searchTerm = inputs.searchWord || "";

      const trimmed = raw.trim();
      const upper = trimmed.toUpperCase();
      const lower = trimmed.toLowerCase();
      const words = trimmed.split(/\s+/).filter(Boolean);
      const titleCase = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
      const sliced = trimmed.slice(0, 15) + (trimmed.length > 15 ? "..." : "");
      const replaced = trimmed.replace(searchTerm, `[FOUND: ${searchTerm}]`);
      const foundAt = trimmed.indexOf(searchTerm);
      const includesWord = trimmed.toLowerCase().includes(searchTerm.toLowerCase());

      const logs = [
        `Original (with spaces): "${raw}"`,
        `After trim(): "${trimmed}"`,
        `slice(0, 15): "${sliced}"`,
        `indexOf("${searchTerm}"): ${foundAt}`,
        `includes("${searchTerm}"): ${includesWord}`,
        `split(" ") gives ${words.length} words`,
        `replace result: "${replaced.slice(0, 60)}..."`
      ];

      return {
        success: true,
        output: {
          originalLength: raw.length,
          trimmedLength: trimmed.length,
          uppercased: upper,
          lowercased: lower,
          titleCase,
          wordCount: words.length,
          searchTerm,
          foundAtIndex: foundAt,
          includesSearchTerm: includesWord,
          startsWithH: trimmed.startsWith("H") || trimmed.startsWith("h"),
          endsWithExclamation: trimmed.endsWith("!")
        },
        logs
      };
    }
  },

  {
    id: "template-literals",
    category: "core",
    title: "9. Template Literals & String Interpolation",
    difficulty: "Beginner",
    summary: "Use ES6 Template Literals (backtick strings) for clean string interpolation, multi-line strings, and tagged template expressions.",
    tags: ["Template Literals", "Backtick", "String Interpolation", "Multi-line", "ES6"],
    concepts: [
      "Template literals use backtick (`) characters instead of single or double quotes.",
      "String Interpolation: Embed any JavaScript expression directly inside \\${expression} placeholders.",
      "Multi-line Strings: Template literals preserve newlines without using \\n escape characters.",
      "Tagged Templates: A function can process a template literal for advanced formatting (e.g., sanitization, localization).",
      "You can embed any valid JS expression: arithmetic, function calls, ternary, object lookups."
    ],
    explanation: `
      <p class="mb-3">Template Literals (introduced in ES6) are a cleaner and more powerful alternative to regular string concatenation using <code class="font-mono text-amber-500">+</code>. They improve code readability significantly.</p>
      <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-lg border border-amber-200 dark:border-amber-800 text-sm">
        <strong>Before ES6:</strong> <code class="font-mono">"Hello, " + name + "! You are " + age + " years old."</code><br/>
        <strong>After ES6:</strong> <code class="font-mono">\`Hello, \\\${name}! You are \\\${age} years old.\`</code>
      </div>
    `,
    syntax: `const name = "Mohan";
const age = 21;
const course = "JavaScript";

// Basic Interpolation
const greeting = \`Hello, \${name}! You are \${age} years old.\`;

// Expression inside placeholder
const area = \`Circle area: \${(Math.PI * 5 * 5).toFixed(2)}\`;

// Multi-line string (no \\n needed!)
const card = \`
  Name   : \${name}
  Age    : \${age}
  Course : \${course}
\`;

// Ternary inside template
const status = \`Access: \${age >= 18 ? "Allowed" : "Denied"}\`;`,
    exampleCode: `// Tagged Template Literal example
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] !== undefined
      ? "<strong>" + values[i] + "</strong>"
      : "");
  }, "");
}

const product = "Laptop";
const price = 59999;
const output = highlight\`The \${product} costs ₹\${price} today!\`;
// "The <strong>Laptop</strong> costs ₹<strong>59999</strong> today!"`,
    inputs: [
      { id: "tmplName", label: "Your Name", type: "text", default: "Sakthi Mohan" },
      { id: "tmplCourse", label: "Course / Subject", type: "text", default: "JavaScript ES6+" },
      { id: "tmplScore", label: "Your Score (0-100)", type: "number", default: 92 }
    ],
    execute: (inputs) => {
      const name = inputs.tmplName || "Student";
      const course = inputs.tmplCourse || "JavaScript";
      const score = Number(inputs.tmplScore) || 0;

      const grade = score >= 90 ? "A+" : score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "F";
      const passed = score >= 40;

      const reportCard = [
        "=== STUDENT REPORT CARD ===",
        "Name   : " + name,
        "Course : " + course,
        "Score  : " + score + "/100",
        "Grade  : " + grade,
        "Status : " + (passed ? "PASSED ✅" : "FAILED ❌"),
        "Remark : " + (score >= 90 ? "Outstanding!" : score >= 60 ? "Good effort!" : "Keep practicing!"),
        "Generated at: " + new Date().toLocaleString(),
        "==========================="
      ].join("\n");

      const multilineDemo = "Line 1: Welcome, " + name + "!\nLine 2: You are studying " + course + ".\nLine 3: Your score is " + score + ", which is grade " + grade + ".";

      const logs = [
        "Template: `Hello, ${name}!` -> \"Hello, " + name + "!\"",
        "Expression inside placeholder: score >= 90 ? 'A+' : ... -> \"" + grade + "\"",
        "Multi-line string preserved newlines without manual \\n concatenation",
        "Total dynamic expressions resolved: 6"
      ];

      return {
        success: true,
        output: {
          simpleInterpolation: "Hello, " + name + "! Welcome to " + course + ".",
          expressionResult: "Score " + score + "/100 = Grade " + grade,
          ternaryResult: "Status: " + (passed ? "PASSED ✅" : "FAILED ❌"),
          multilineString: multilineDemo,
          reportCard: reportCard
        },
        logs: logs
      };
    }
  },

  {
    id: "scope-closures",
    category: "core",
    title: "10. Scope, Hoisting & Closures",
    difficulty: "Advanced",
    summary: "Understand how JavaScript looks up identifiers through Global, Function, and Block scope, and harness lexical Closures.",
    tags: ["Lexical Scope", "Closures", "Hoisting", "Encapsulation", "Data Privacy"],
    concepts: [
      "Scope determines the accessibility and visibility of variables.",
      "Lexical Scope: inner functions have access to variables declared in their outer parent scope.",
      "Closure: A function remembers its outer lexical environment even when executed outside that scope.",
      "Practical use cases: Data encapsulation, private variables, factory functions, currying."
    ],
    explanation: `
      <p class="mb-3">A <strong>closure</strong> is formed when an inner function retains access to its parent function's scope even after the parent function has finished executing.</p>
    `,
    syntax: `// Closure Example: Private Counter
function createCounter(initialValue = 0) {
  let count = initialValue; // Private variable
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
}

const myCounter = createCounter(5);
console.log(myCounter.increment()); // 6
console.log(myCounter.increment()); // 7
console.log(myCounter.getValue());  // 7 (count cannot be modified directly!)`,
    exampleCode: `// Function Factory using Closures
function makeMultiplier(multiplier) {
  return function(number) {
    return number * multiplier; // Remembers 'multiplier'
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(10)); // 20
console.log(triple(10)); // 30`,
    inputs: [
      { id: "counterStart", label: "Initial Counter Value", type: "number", default: 10 },
      { id: "counterStep", label: "Step Increment Amount", type: "number", default: 5 }
    ],
    execute: (inputs) => {
      const start = Number(inputs.counterStart) || 0;
      const step = Number(inputs.counterStep) || 1;

      // Closure demonstration
      const createStepCounter = (initial, incrementStep) => {
        let internalCount = initial;
        const history = [internalCount];
        return {
          next: () => {
            internalCount += incrementStep;
            history.push(internalCount);
            return internalCount;
          },
          getHistory: () => [...history]
        };
      };

      const counterInstance = createStepCounter(start, step);
      const step1 = counterInstance.next();
      const step2 = counterInstance.next();
      const step3 = counterInstance.next();

      const logs = [
        `Closure instantiated with private variable: count = ${start}`,
        `Call 1 next(): count updated to ${step1} (retained in lexical environment)`,
        `Call 2 next(): count updated to ${step2}`,
        `Call 3 next(): count updated to ${step3}`
      ];

      return {
        success: true,
        output: {
          initialValue: start,
          stepAmount: step,
          finalValue: step3,
          historyTrace: counterInstance.getHistory(),
          explanation: "The variable 'internalCount' is enclosed securely inside the closure and cannot be tampered with directly from outside scope."
        },
        logs
      };
    }
  },

  // ==========================================
  // 10 LOGICAL PROGRAMMING CHALLENGES
  // ==========================================
  {
    id: "palindrome-checker",
    category: "logical",
    title: "1. String Reversal & Palindrome Checker",
    difficulty: "Beginner",
    summary: "Check if a string or number reads the same forwards and backward, ignoring casing and special characters.",
    tags: ["String", "Two Pointer", "Algorithm", "Palindrome"],
    complexity: { time: "O(n)", space: "O(1) with two-pointer or O(n) with string reverse" },
    concepts: [
      "A palindrome is a sequence that reads identical from left-to-right and right-to-left (e.g. 'racecar', 'madam').",
      "Approach 1: Reverse the string and compare with original.",
      "Approach 2 (Optimized): Two pointers moving inward from both ends."
    ],
    explanation: `
      <p class="mb-3">Palindrome checking tests string indexing, regex cleanup, and two-pointer pointer mechanics.</p>
    `,
    syntax: `function isPalindrome(str) {
  // 1. Clean alphanumeric characters & lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // 2. Two pointer comparison
  let left = 0;
  let right = cleanStr.length - 1;
  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) return false;
    left++;
    right--;
  }
  return true;
}`,
    exampleCode: `// Reverse String helper
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false`,
    inputs: [
      { id: "palinInput", label: "Enter Word, Sentence, or Number", type: "text", default: "A man, a plan, a canal: Panama" }
    ],
    execute: (inputs) => {
      const raw = inputs.palinInput || "";
      const cleaned = raw.toLowerCase().replace(/[^a-z0-9]/g, "");
      const reversed = cleaned.split("").reverse().join("");
      const isPalin = cleaned.length > 0 && cleaned === reversed;

      const logs = [
        `Raw Input: "${raw}"`,
        `Sanitized (alphanumeric only): "${cleaned}"`,
        `Reversed String: "${reversed}"`,
        `Comparison (${cleaned} === ${reversed}): ${isPalin}`
      ];

      return {
        success: true,
        output: {
          original: raw,
          sanitized: cleaned,
          reversed: reversed,
          isPalindrome: isPalin,
          verdict: isPalin ? "✅ It IS a valid Palindrome!" : "❌ NOT a Palindrome"
        },
        logs
      };
    }
  },

  {
    id: "even-odd-checker",
    category: "logical",
    title: "2. Check Even or Odd Number",
    difficulty: "Beginner",
    summary: "Determine whether a given number (or a list of numbers) is Even or Odd using the modulo operator, and explore multiple approaches.",
    tags: ["Math", "Modulo", "Conditionals", "Bitwise", "Beginner"],
    complexity: { time: "O(1) single number | O(n) for array", space: "O(1)" },
    concepts: [
      "A number is Even if it is perfectly divisible by 2 with no remainder (num % 2 === 0).",
      "A number is Odd if dividing by 2 leaves a remainder of 1 (num % 2 !== 0).",
      "Bitwise approach: (num & 1) === 0 means Even; (num & 1) === 1 means Odd (faster at low level).",
      "Edge cases: 0 is Even. Negative numbers also follow the same rule (-5 is Odd, -4 is Even)."
    ],
    explanation: `
      <p class="mb-3">Even/Odd checking is one of the most fundamental programming concepts. The <strong>modulo operator</strong> <code class="font-mono text-amber-500">%</code> divides two numbers and returns the remainder.</p>
      <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg border border-emerald-200 dark:border-emerald-800 text-sm">
        <strong>Key Rule:</strong> <code class="font-mono">number % 2 === 0</code> → Even &nbsp;|&nbsp; <code class="font-mono">number % 2 !== 0</code> → Odd
      </div>
    `,
    syntax: `// Method 1: Modulo Operator (Most Common)
function isEven(num) {
  return num % 2 === 0;
}

// Method 2: Bitwise AND (Fastest)
function isEvenBitwise(num) {
  return (num & 1) === 0;
}

// Method 3: Ternary One-liner
const checkNum = (n) => n % 2 === 0 ? "Even" : "Odd";

// Method 4: Array of numbers
function classifyArray(arr) {
  return arr.map(n => ({ number: n, type: n % 2 === 0 ? "Even" : "Odd" }));
}`,
    exampleCode: `// Classify an entire range
function evenOddRange(start, end) {
  const results = { even: [], odd: [] };
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) results.even.push(i);
    else results.odd.push(i);
  }
  return results;
}

console.log(evenOddRange(1, 10));
// { even: [2, 4, 6, 8, 10], odd: [1, 3, 5, 7, 9] }`,
    inputs: [
      { id: "evenOddSingle", label: "Check a Single Number", type: "number", default: 42 },
      { id: "evenOddList", label: "Classify list of numbers (comma-separated)", type: "text", default: "1, 4, 7, 10, 13, 22, 35, 100" }
    ],
    execute: (inputs) => {
      const single = Number(inputs.evenOddSingle);
      const arr = inputs.evenOddList
        .split(",")
        .map(x => Number(x.trim()))
        .filter(x => !isNaN(x));

      const singleIsEven = single % 2 === 0;
      const bitwiseResult = (single & 1) === 0;
      const classified = arr.map(n => ({ number: n, type: n % 2 === 0 ? "Even ✅" : "Odd 🔷" }));
      const evens = arr.filter(n => n % 2 === 0);
      const odds = arr.filter(n => n % 2 !== 0);

      const logs = [
        `Single check: ${single} % 2 = ${single % 2} → ${singleIsEven ? "EVEN" : "ODD"}`,
        `Bitwise check: (${single} & 1) = ${single & 1} → ${bitwiseResult ? "EVEN" : "ODD"}`,
        `Array: [${arr.join(", ")}]`,
        `Evens found (${evens.length}): [${evens.join(", ")}]`,
        `Odds found (${odds.length}): [${odds.join(", ")}]`
      ];

      return {
        success: true,
        output: {
          singleNumber: single,
          isEven: singleIsEven,
          verdict: singleIsEven ? `${single} is EVEN ✅` : `${single} is ODD 🔷`,
          bitwiseResult,
          classified,
          arrayStats: { totalNumbers: arr.length, evenCount: evens.length, oddCount: odds.length }
        },
        logs
      };
    }
  },

  {
    id: "max-min-array",
    category: "logical",
    title: "3. Find Maximum & Minimum in Array",
    difficulty: "Beginner",
    summary: "Discover the largest and smallest numbers in an unsorted list without using pre-built sorting algorithms.",
    tags: ["Array", "Linear Scan", "Min/Max", "Algorithms"],
    complexity: { time: "O(n)", space: "O(1)" },
    concepts: [
      "Linear scan: Initialize max and min with the first array element, then compare each subsequent element.",
      "Only requires 1 single pass through the array (n-1 comparisons).",
      "Built-in JS alternative: Math.max(...arr) and Math.min(...arr)."
    ],
    explanation: `
      <p class="mb-3">Finding extreme values is a core algorithmic primitive used across search, statistics, and data normalization.</p>
    `,
    syntax: `function findMinMax(arr) {
  if (!arr.length) return null;
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return { min, max };
}`,
    exampleCode: `const numbers = [45, 12, 89, 3, 27, 99, -4];
const result = findMinMax(numbers);
console.log("Smallest:", result.min); // -4
console.log("Largest:", result.max);  // 99`,
    inputs: [
      { id: "minMaxInput", label: "Numbers (comma-separated)", type: "text", default: "45, 12, 89, 3, 27, 99, -4, 150, 7" }
    ],
    execute: (inputs) => {
      const arr = inputs.minMaxInput
        .split(",")
        .map(x => Number(x.trim()))
        .filter(x => !isNaN(x));

      if (arr.length === 0) {
        return { success: false, output: "Please provide at least one valid number.", logs: [] };
      }

      let min = arr[0];
      let max = arr[0];
      const trace = [`Initialized: min=${min}, max=${max}`];

      for (let i = 1; i < arr.length; i++) {
        const val = arr[i];
        if (val > max) {
          trace.push(`Step ${i}: New Max found! ${val} > ${max}`);
          max = val;
        } else if (val < min) {
          trace.push(`Step ${i}: New Min found! ${val} < ${min}`);
          min = val;
        }
      }

      return {
        success: true,
        output: {
          totalElements: arr.length,
          maximumValue: max,
          minimumValue: min,
          rangeDifference: max - min
        },
        logs: trace
      };
    }
  },

  {
    id: "factorial-fibonacci",
    category: "logical",
    title: "4. Factorial & Fibonacci Calculator",
    difficulty: "Intermediate",
    summary: "Compute the Factorial of a number (N!) and generate the Fibonacci sequence up to N terms with recursion and iteration.",
    tags: ["Math", "Recursion", "Fibonacci", "Factorial", "Dynamic Programming"],
    complexity: { time: "Factorial: O(n) | Fibonacci: O(n) iterative", space: "O(1) iterative" },
    concepts: [
      "Factorial (n!): Product of all positive integers less than or equal to n (e.g. 5! = 5*4*3*2*1 = 120). Base case: 0! = 1.",
      "Fibonacci: Each number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, 21...",
      "Iterative approaches avoid maximum call stack size limits in JavaScript."
    ],
    explanation: `
      <p class="mb-3">Factorial and Fibonacci problems illustrate recursion vs iteration, base cases, and sequence generation.</p>
    `,
    syntax: `// Factorial (Iterative)
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

// Fibonacci Sequence Generator
function getFibonacci(terms) {
  if (terms <= 0) return [];
  if (terms === 1) return [0];
  const fib = [0, 1];
  for (let i = 2; i < terms; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}`,
    exampleCode: `console.log("6! =", factorial(6)); // 720
console.log("Fibonacci 8 terms:", getFibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]`,
    inputs: [
      { id: "numN", label: "Enter Number N (1 to 20)", type: "number", default: 7 }
    ],
    execute: (inputs) => {
      const n = Math.min(Math.max(1, Number(inputs.numN) || 5), 20);

      // Factorial
      let fact = 1;
      const factSteps = [];
      for (let i = 1; i <= n; i++) {
        fact *= i;
        factSteps.push(`${i}! = ${fact}`);
      }

      // Fibonacci
      const fib = [0, 1];
      while (fib.length < n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
      }
      const fibSequence = n === 1 ? [0] : fib.slice(0, n);

      const logs = [
        `Calculated Factorial for N = ${n}`,
        `Factorial result: ${fact}`,
        `Generated ${n} terms of Fibonacci sequence`,
        `Fibonacci: [${fibSequence.join(", ")}]`
      ];

      return {
        success: true,
        output: {
          inputN: n,
          factorialValue: fact,
          fibonacciSequence: fibSequence,
          nthFibonacciNumber: fibSequence[fibSequence.length - 1]
        },
        logs
      };
    }
  },

  {
    id: "prime-checker",
    category: "logical",
    title: "5. Prime Number Validator & Range Finder",
    difficulty: "Intermediate",
    summary: "Determine if a number is prime and list all prime numbers within a specified range using square root optimization.",
    tags: ["Math", "Prime Numbers", "Algorithm", "Optimization"],
    complexity: { time: "O(sqrt(n)) for single check, O(N * sqrt(N)) for range", space: "O(1)" },
    concepts: [
      "A prime number is a natural number strictly greater than 1 that has no positive divisors other than 1 and itself.",
      "Optimization: Only check divisors up to Math.sqrt(n). If no divisor divides n up to √n, n is guaranteed prime.",
      "Even numbers > 2 can be immediately ruled out."
    ],
    explanation: `
      <p class="mb-3">Prime testing is foundational in cryptography, hashing, and algorithmic mathematics.</p>
    `,
    syntax: `function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}`,
    exampleCode: `// Find all primes in range [2, limit]
function findPrimesUpTo(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}`,
    inputs: [
      { id: "primeTarget", label: "Check Number for Prime", type: "number", default: 29 },
      { id: "primeRangeLimit", label: "Find All Primes Up To", type: "number", default: 50 }
    ],
    execute: (inputs) => {
      const target = Number(inputs.primeTarget) || 2;
      const range = Math.min(Math.max(2, Number(inputs.primeRangeLimit) || 30), 500);

      const checkPrime = (num) => {
        if (num <= 1) return false;
        if (num === 2 || num === 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
          if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
      };

      const isTargetPrime = checkPrime(target);
      const allPrimes = [];
      for (let i = 2; i <= range; i++) {
        if (checkPrime(i)) allPrimes.push(i);
      }

      const logs = [
        `Testing prime condition for ${target}: ${isTargetPrime ? "PRIME" : "NOT PRIME"}`,
        `Checked divisor bounds up to √${target} (${Math.sqrt(target).toFixed(2)})`,
        `Scanning primes from 2 to ${range}: Found ${allPrimes.length} primes`
      ];

      return {
        success: true,
        output: {
          targetNumber: target,
          isPrime: isTargetPrime,
          primesFoundCount: allPrimes.length,
          primesList: allPrimes.join(", ")
        },
        logs
      };
    }
  },

  {
    id: "remove-duplicates",
    category: "logical",
    title: "6. Remove Duplicates from Array",
    difficulty: "Intermediate",
    summary: "Eliminate duplicate elements from an array using modern ES6 Set, filter + indexOf, and reduce frequency hashing.",
    tags: ["Array", "Set", "Deduplication", "ES6"],
    complexity: { time: "O(n) with Set or Map | O(n^2) with filter+indexOf", space: "O(n)" },
    concepts: [
      "Method 1: ES6 Set data structure: [...new Set(arr)] - Fast and concise.",
      "Method 2: arr.filter((item, index) => arr.indexOf(item) === index).",
      "Method 3: Object / Map frequency lookup table for custom object equivalence."
    ],
    explanation: `
      <p class="mb-3">Removing duplicates is one of the most common data cleaning operations in frontend and backend workflows.</p>
    `,
    syntax: `// Modern ES6 Set approach (O(n))
const removeDuplicatesSet = (arr) => [...new Set(arr)];

// Filter + indexOf approach
const removeDuplicatesFilter = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};`,
    exampleCode: `const list = ["apple", "banana", "apple", "orange", "banana", "grape"];
const uniqueList = [...new Set(list)];
console.log(uniqueList); // ["apple", "banana", "orange", "grape"]`,
    inputs: [
      { id: "dupInput", label: "Enter items (comma-separated numbers or words)", type: "text", default: "React, Vue, React, Angular, Svelte, Vue, Node, React" }
    ],
    execute: (inputs) => {
      const items = inputs.dupInput.split(",").map(s => s.trim()).filter(Boolean);
      const unique = [...new Set(items)];
      const duplicatesRemoved = items.length - unique.length;

      // Frequency map
      const freq = {};
      items.forEach(item => {
        freq[item] = (freq[item] || 0) + 1;
      });

      const logs = [
        `Original items count: ${items.length}`,
        `Unique items count: ${unique.length}`,
        `Duplicates removed: ${duplicatesRemoved}`,
        `Frequency Map: ${JSON.stringify(freq)}`
      ];

      return {
        success: true,
        output: {
          originalLength: items.length,
          uniqueLength: unique.length,
          uniqueArray: unique,
          frequencyCounts: freq
        },
        logs
      };
    }
  },

  {
    id: "vowel-consonant-counter",
    category: "logical",
    title: "7. Count Vowels and Consonants",
    difficulty: "Beginner",
    summary: "Analyze any sentence or string to calculate the exact frequency of vowels (a, e, i, o, u), consonants, digits, and whitespace.",
    tags: ["String", "Regex", "Character Frequency", "Text Analysis"],
    complexity: { time: "O(n)", space: "O(1)" },
    concepts: [
      "Iterate through the string characters and test against vowel sets: ['a','e','i','o','u'].",
      "Regular expressions (e.g. /[aeiou]/gi and /[b-df-hj-np-tv-z]/gi) enable rapid matching.",
      "Handles case insensitivity smoothly."
    ],
    explanation: `
      <p class="mb-3">Text parsing and character classification demonstrate basic string iteration, ASCII ranges, and regex expressions.</p>
    `,
    syntax: `function countVowelsAndConsonants(str) {
  let vowels = 0, consonants = 0;
  const clean = str.toLowerCase();
  
  for (const char of clean) {
    if (/[aeiou]/.test(char)) vowels++;
    else if (/[a-z]/.test(char)) consonants++;
  }
  return { vowels, consonants };
}`,
    exampleCode: `const text = "JavaScript is Amazing!";
console.log(countVowelsAndConsonants(text));
// { vowels: 7, consonants: 12 }`,
    inputs: [
      { id: "vowelStr", label: "Enter text to analyze", type: "text", default: "Learning JavaScript with Mohan at SLA Institute 2026!" }
    ],
    execute: (inputs) => {
      const text = inputs.vowelStr || "";
      let vowels = 0;
      let consonants = 0;
      let digits = 0;
      let spaces = 0;
      let specials = 0;
      const vowelBreakdown = { a: 0, e: 0, i: 0, o: 0, u: 0 };

      for (const char of text.toLowerCase()) {
        if ("aeiou".includes(char)) {
          vowels++;
          vowelBreakdown[char]++;
        } else if (char >= "a" && char <= "z") {
          consonants++;
        } else if (char >= "0" && char <= "9") {
          digits++;
        } else if (char === " ") {
          spaces++;
        } else {
          specials++;
        }
      }

      const logs = [
        `Analyzing string of length ${text.length}`,
        `Vowels identified: ${vowels}`,
        `Consonants identified: ${consonants}`,
        `Digits / Whitespace / Special: ${digits} digits, ${spaces} spaces, ${specials} symbols`
      ];

      return {
        success: true,
        output: {
          totalLength: text.length,
          vowelsCount: vowels,
          consonantsCount: consonants,
          digitsCount: digits,
          whitespaceCount: spaces,
          vowelBreakdown: vowelBreakdown
        },
        logs
      };
    }
  },

  {
    id: "reverse-each-word",
    category: "logical",
    title: "8. Reverse Each Word in a Sentence",
    difficulty: "Beginner",
    summary: "Reverse every individual word in a sentence while preserving the original word order in the sentence.",
    tags: ["String", "split()", "reverse()", "map()", "join()", "Beginner"],
    complexity: { time: "O(n)", space: "O(n)" },
    concepts: [
      "Split the sentence into words using split(' ') on whitespace.",
      "Reverse each word individually using split('').reverse().join('').",
      "Rejoin all reversed words using join(' ') to restore sentence structure.",
      "This is different from reversing the entire sentence! Word positions stay the same."
    ],
    explanation: `
      <p class="mb-3">Reversing each word (not the whole sentence) is a classic string manipulation problem that tests understanding of <strong>split → transform → join</strong> pattern.</p>
      <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
        <strong>Example:</strong> <code class="font-mono">"Hello World"</code> → <code class="font-mono">"olleH dlroW"</code>
      </div>
    `,
    syntax: `// Method 1: split → map → join pipeline
function reverseEachWord(sentence) {
  return sentence
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}

// Method 2: using spread operator inside map
const reverseWord = word => [...word].reverse().join("");
const reverseEach = str => str.split(" ").map(reverseWord).join(" ");`,
    exampleCode: `console.log(reverseEachWord("JavaScript is Fun"));
// "tpircSavaJ si nuF"

console.log(reverseEachWord("Hello World"));
// "olleH dlroW"

// Bonus: Reverse entire sentence (different!)
const reverseSentence = str => str.split(" ").reverse().join(" ");
// "Fun is JavaScript"`,
    inputs: [
      { id: "reverseWordInput", label: "Enter a sentence to reverse each word", type: "text", default: "JavaScript is very powerful and fun to learn" }
    ],
    execute: (inputs) => {
      const sentence = inputs.reverseWordInput || "";
      const words = sentence.split(/\s+/).filter(Boolean);
      const reversedWords = words.map(word => word.split("").reverse().join(""));
      const reversedEach = reversedWords.join(" ");
      const reversedSentence = words.slice().reverse().join(" ");
      const fullyReversed = sentence.split("").reverse().join("");

      const logs = [
        `Input Sentence: "${sentence}"`,
        `Words: [${words.map(w => `"${w}"`).join(", ")}]`,
        ...reversedWords.map((rw, i) => `Reversed Word ${i + 1}: "${words[i]}" → "${rw}"`),
        `Final join: "${reversedEach}"`
      ];

      return {
        success: true,
        output: {
          originalSentence: sentence,
          wordCount: words.length,
          eachWordReversed: reversedEach,
          wordOrderReversed: reversedSentence,
          fullyReversedString: fullyReversed,
          wordBreakdown: words.map((w, i) => ({ original: w, reversed: reversedWords[i] }))
        },
        logs
      };
    }
  },

  {
    id: "merge-arrays-dedup",
    category: "logical",
    title: "9. Merge Two Arrays & Remove Duplicates",
    difficulty: "Beginner",
    summary: "Combine two separate arrays into one and eliminate all duplicate values using ES6 Set or Array filter/indexOf.",
    tags: ["Array", "Set", "Deduplication", "Spread Operator", "Beginner"],
    complexity: { time: "O(n + m) with Set | O((n+m)^2) with indexOf", space: "O(n + m)" },
    concepts: [
      "Merge arrays using the ES6 spread operator: [...arr1, ...arr2] or concat: arr1.concat(arr2).",
      "Remove duplicates using Set: [...new Set(merged)] — fastest and cleanest ES6 approach (O(n)).",
      "Remove duplicates using filter & indexOf: merged.filter((item, index) => merged.indexOf(item) === index).",
      "Works with numbers, strings, and mixed primitive types."
    ],
    explanation: `
      <p class="mb-3">Merging datasets and eliminating redundant duplicate entries is an everyday programming task in web applications, data processing, and API integration.</p>
      <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg border border-emerald-200 dark:border-emerald-800 text-sm">
        <strong>ES6 Shortcut:</strong> <code class="font-mono font-bold">[...new Set([...arr1, ...arr2])]</code>
      </div>
    `,
    syntax: `// Method 1: Spread Operator + Set (Recommended - O(n))
function mergeAndDeduplicate(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// Method 2: filter + indexOf
function mergeFilter(arr1, arr2) {
  const merged = arr1.concat(arr2);
  return merged.filter((val, idx) => merged.indexOf(val) === idx);
}

// Method 3: reduce
function mergeReduce(arr1, arr2) {
  return [...arr1, ...arr2].reduce((acc, curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
}`,
    exampleCode: `const listA = [1, 2, 3, 4, 5];
const listB = [3, 4, 5, 6, 7];

console.log(mergeAndDeduplicate(listA, listB));
// Output: [1, 2, 3, 4, 5, 6, 7]

const fruits1 = ["apple", "banana", "orange"];
const fruits2 = ["banana", "mango", "apple", "grape"];
console.log(mergeAndDeduplicate(fruits1, fruits2));
// Output: ["apple", "banana", "orange", "mango", "grape"]`,
    inputs: [
      { id: "array1Input", label: "First Array (comma-separated)", type: "text", default: "1, 2, 3, 4, 5, 8" },
      { id: "array2Input", label: "Second Array (comma-separated)", type: "text", default: "3, 4, 5, 6, 7, 8, 9, 10" }
    ],
    execute: (inputs) => {
      const parseItems = (str) =>
        (str || "")
          .split(",")
          .map(s => s.trim())
          .filter(Boolean)
          .map(s => (!isNaN(s) && s !== "" ? Number(s) : s));

      const arr1 = parseItems(inputs.array1Input);
      const arr2 = parseItems(inputs.array2Input);

      const rawMerged = [...arr1, ...arr2];
      const uniqueSet = [...new Set(rawMerged)];

      // Duplicates detected
      const duplicateItems = rawMerged.filter((item, idx) => rawMerged.indexOf(item) !== idx);
      const uniqueDuplicates = [...new Set(duplicateItems)];

      // Sort if all numbers
      const allNumbers = uniqueSet.every(x => typeof x === "number");
      const sortedUnique = allNumbers ? [...uniqueSet].sort((a, b) => a - b) : [...uniqueSet].sort();

      const logs = [
        `Array 1 (${arr1.length} items): [${arr1.join(", ")}]`,
        `Array 2 (${arr2.length} items): [${arr2.join(", ")}]`,
        `Combined (with duplicates - ${rawMerged.length} items): [${rawMerged.join(", ")}]`,
        `Duplicates removed (${rawMerged.length - uniqueSet.length} removed): [${uniqueDuplicates.join(", ")}]`,
        `Final Unique Array (${uniqueSet.length} items): [${sortedUnique.join(", ")}]`
      ];

      return {
        success: true,
        output: {
          array1: arr1,
          array2: arr2,
          rawMergedCount: rawMerged.length,
          uniqueCount: uniqueSet.length,
          duplicatesRemovedCount: rawMerged.length - uniqueSet.length,
          duplicateValues: uniqueDuplicates,
          mergedUniqueResult: uniqueSet,
          sortedUniqueResult: sortedUnique
        },
        logs
      };
    }
  },

  {
    id: "find-factors",
    category: "logical",
    title: "10. Find All Factors of a Number",
    difficulty: "Beginner",
    summary: "Find and list all positive integer factors (divisors) of a number, calculate their sum, and check if the number is Prime or Perfect.",
    tags: ["Math", "Factors", "Divisors", "Square Root", "Prime", "Perfect Number"],
    complexity: { time: "O(sqrt(n)) optimized", space: "O(k) where k is factor count" },
    concepts: [
      "A factor (divisor) is an integer that divides another integer completely without leaving any remainder (n % i === 0).",
      "Brute force: Loop from 1 to n (O(n)).",
      "Optimized approach: Loop up to Math.sqrt(n). If i is a divisor, both i and (n / i) are factors! This reduces steps from 1,000,000 to only 1,000 (O(√n)).",
      "Perfect Number: A positive integer equal to the sum of its proper divisors (e.g. 6 = 1 + 2 + 3, 28 = 1 + 2 + 4 + 7 + 14).",
      "Prime Number: Has exactly 2 factors (1 and itself)."
    ],
    explanation: `
      <p class="mb-3">Factor finding is a cornerstone mathematical algorithm used in cryptography, prime factorization, and number theory.</p>
      <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg border border-indigo-200 dark:border-indigo-800 text-sm">
        <strong>Optimization:</strong> Only loop up to <code class="font-mono font-bold">Math.sqrt(N)</code>. Every factor below the square root pairs with a factor above it!
      </div>
    `,
    syntax: `// Optimized O(sqrt(n)) factor finding
function findFactors(n) {
  const factors = [];
  const limit = Math.floor(Math.sqrt(n));

  for (let i = 1; i <= limit; i++) {
    if (n % i === 0) {
      factors.push(i);
      if (i !== n / i) {
        factors.push(n / i); // Pair factor
      }
    }
  }

  return factors.sort((a, b) => a - b);
}`,
    exampleCode: `console.log(findFactors(28));
// [1, 2, 4, 7, 14, 28]

// Check if Perfect Number (sum of proper divisors == n)
function isPerfectNumber(n) {
  const factors = findFactors(n);
  const properSum = factors.filter(f => f !== n).reduce((sum, f) => sum + f, 0);
  return properSum === n;
}

console.log("Is 28 Perfect?", isPerfectNumber(28)); // true (1+2+4+7+14 = 28)
console.log("Is 6 Perfect?", isPerfectNumber(6));   // true (1+2+3 = 6)`,
    inputs: [
      { id: "factorNumber", label: "Enter a positive integer", type: "number", default: 28 }
    ],
    execute: (inputs) => {
      const num = Math.abs(Math.floor(Number(inputs.factorNumber))) || 1;
      const factors = [];
      const limit = Math.floor(Math.sqrt(num));

      const logs = [
        `Target Number: ${num}`,
        `Testing divisors up to Math.sqrt(${num}) ≈ ${limit}`
      ];

      for (let i = 1; i <= limit; i++) {
        if (num % i === 0) {
          factors.push(i);
          const pair = num / i;
          if (i !== pair) {
            factors.push(pair);
            logs.push(`Found pair: ${i} × ${pair} = ${num}`);
          } else {
            logs.push(`Found perfect square factor: ${i} × ${i} = ${num}`);
          }
        }
      }

      factors.sort((a, b) => a - b);
      const sumOfFactors = factors.reduce((acc, f) => acc + f, 0);
      const properDivisors = factors.filter(f => f !== num);
      const properSum = properDivisors.reduce((acc, f) => acc + f, 0);
      const isPrime = factors.length === 2;
      const isPerfect = properSum === num && num > 1;

      return {
        success: true,
        output: {
          number: num,
          totalFactorsCount: factors.length,
          allFactorsList: factors,
          sumOfAllFactors: sumOfFactors,
          properDivisorsList: properDivisors,
          properDivisorsSum: properSum,
          isPrime: isPrime ? `Yes (${num} only divisible by 1 and ${num})` : "No",
          isPerfectNumber: isPerfect ? `Yes! (${properDivisors.join(" + ")} = ${num}) 🎉` : "No"
        },
        logs
      };
    }
  }
];

if (typeof window !== "undefined") {
  window.topicsData = topicsData;
}
