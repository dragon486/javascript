const terms = document.getElementById("terms");
const btn = document.getElementById("submit");

terms.addEventListener("change", () => {
  btn.disabled = !terms.checked;
});
