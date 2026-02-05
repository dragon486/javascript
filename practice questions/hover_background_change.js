const box = document.getElementById("box");
box.style.width = "100px";
box.style.height = "100px";
box.style.background = "gray";

box.addEventListener("mouseenter", () => box.style.background = "blue");
box.addEventListener("mouseleave", () => box.style.background = "gray");
