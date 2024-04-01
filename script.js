const divContainer = document.querySelector("#container");
const btn = document.querySelector("#btn");
let numberOfSquares = 16;

drawGrid();
const square = document.getElementsByClassName("square");
    for (let j = 0; j < square.length; j++)
        square[j].addEventListener("mouseover", (event) => {
            let target = event.target;
            target.style.backgroundColor = randomRBG();
            target.style.opacity - 0.1;
        });

btn.addEventListener("click", () => {
    divContainer.style.background = "white";
    while (divContainer.firstChild) {
        divContainer.firstChild.remove();
    }
    let input = Number(prompt("Select number of squares per side", ""));
    if (input >= 16 && input <= 100) {
        numberOfSquares = input;
       drawGrid();
       } else {
        alert("Choose a number between 16 and 100!");
    }
    const square = document.getElementsByClassName("square");
    for (let j = 0; j < square.length; j++)
        square[j].addEventListener("mouseover", (event) => {
            let target = event.target;
            target.style.backgroundColor = randomRBG();
            target.style.opacity - 0.1;
        });
});

function randomRBG () {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let bgColor = "rgb("+ red +", "+ blue +", "+ green +")";
    return bgColor;
}

// draw grid
function drawGrid (){
for (let i = 0; i < (numberOfSquares ** 2); i++) {
    let gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", "square");
    gridDiv.style.width = Math.ceil(480/numberOfSquares)+"px";
    gridDiv.style.height = Math.ceil(480/numberOfSquares)+"px";
    divContainer.appendChild(gridDiv);
}
}







