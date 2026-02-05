let size = 16;

document.getElementById("btn").addEventListener("click", () => {
  size += 2;
  document.getElementById("text").style.fontSize = size + "px";
});
