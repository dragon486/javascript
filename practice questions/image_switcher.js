let toggle = true;

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("img").src = toggle ? "img2.jpg" : "img1.jpg";
  toggle = !toggle;
});
