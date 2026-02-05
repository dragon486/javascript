let count = 0;

btn.addEventListener("click", () => {
  document.getElementById("count").innerText = ++count;
});

btn.addEventListener("dblclick", () => {
  document.getElementById("count").innerText = --count;
});
