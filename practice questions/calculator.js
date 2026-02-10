const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } 
    else if (btn.innerText === "C") {
      display.value = "";
    } 
    else if (btn.innerText === "DEL") {
      display.value = display.value.slice(0, -1);
    } 
    else {
      display.value += btn.innerText;
    }
  });
});
