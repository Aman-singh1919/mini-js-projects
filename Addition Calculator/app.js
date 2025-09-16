// ====== Utility: safely parse numbers ======
// parseFloat NaN de sakta hai, isliye helper banaya:
function toNumber(value) {
  const n = parseFloat(value);
  return Number.isNaN(n) ? null : n;
}

// ====== DOM Elements ======
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const resultEl = document.getElementById("result");
const errorEl = document.getElementById("error");

// ====== Main Logic ======
function addNumbers() {
  // Input values read karo
  const n1 = toNumber(num1El.value);
  const n2 = toNumber(num2El.value);

  // Validation (NaN ya empty)
  if (n1 === null || n2 === null) {
    errorEl.textContent = "Please enter valid numbers in both fields.";
    resultEl.textContent = "—";
    return;
  }

  // Clear error if any
  errorEl.textContent = "";

  // Sum calculate
  const sum = n1 + n2;

  // Result show
  resultEl.textContent = `Sum: ${sum}`;
}

// Button click
addBtn.addEventListener("click", addNumbers);

// Enter key shortcut: kisi bhi input par Enter dabao to add ho jaye
[num1El, num2El].forEach((el) => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addNumbers();
  });
});

// Clear button
clearBtn.addEventListener("click", () => {
  num1El.value = "";
  num2El.value = "";
  resultEl.textContent = "Result will appear here";
  errorEl.textContent = "";
  num1El.focus();
});
