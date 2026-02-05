const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const mulBtn = document.getElementById("mul");
const divBtn = document.getElementById("div");

function getValues() {
  return {
    a: Number(num1.value),
    b: Number(num2.value)
  };
}

addBtn.addEventListener("click", function () {
  const { a, b } = getValues();
  result.innerText = "Result: " + (a + b);
});

subBtn.addEventListener("click", function () {
  const { a, b } = getValues();
  result.innerText = "Result: " + (a - b);
});

mulBtn.addEventListener("click", function () {
  const { a, b } = getValues();
  result.innerText = "Result: " + (a * b);
});

divBtn.addEventListener("click", function () {
  const { a, b } = getValues();
  if (b === 0) {
    result.innerText = "Result: Cannot divide by zero";
  } else {
    result.innerText = "Result: " + (a / b);
  }
});
