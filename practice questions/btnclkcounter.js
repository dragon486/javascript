const button = document.getElementById("btn");

let countEl = document.getElementById("count");

let count =0;

button.addEventListener("click", () => {
    const screen = document.createElement("div");
    screen.innerText = "New Screen";

    count++;
    countEl.innerText = count;
    document.body.appendChild(screen);
    
});

