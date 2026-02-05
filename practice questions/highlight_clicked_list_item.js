document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", function () {
    document.querySelectorAll("li").forEach(item => item.style.background = "");
    this.style.background = "yellow";
  });
});
