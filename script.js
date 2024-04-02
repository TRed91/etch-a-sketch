const divContainer = document.querySelector("#container");
const btn = document.querySelector("#btn");
let numberOfSquares = 16;

drawGrid();
const square = document.getElementsByClassName("square");
    for (let j = 0; j < square.length; j++)
        square[j].addEventListener("mouseover", (event) => {
            let target = event.target;
            target.style.backgroundColor = randomRBG();
            reduceOpacity(target);
        });

btn.addEventListener("click", () => {
    divContainer.style.background = "black";
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
            reduceOpacity(target);
        });
});

function randomRBG () {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let bgColor = "rgb("+ red +", "+ blue +", "+ green +")";
    return bgColor;
}

function reduceOpacity (target) {
    switch (target.style.opacity) {
        case "1": return target.style.opacity = "0.9"; break;
        case "0.9": return target.style.opacity = "0.8"; break;
        case "0.8": return target.style.opacity = "0.7"; break;
        case "0.7": return target.style.opacity = "0.6"; break;
        case "0.6": return target.style.opacity = "0.5"; break;
        case "0.5": return target.style.opacity = "0.4"; break;
        case "0.4": return target.style.opacity = "0.3"; break;
        case "0.3": return target.style.opacity = "0.2"; break;
        case "0.2": return target.style.opacity = "0.1"; break;
        case "0.1": return target.style.opacity = "0.0"; break;
        default: return target.style.opacity = "0.0";
    }
};

// draw grid
function drawGrid (){
    for (let i = 0; i < (numberOfSquares ** 2); i++) {
        let gridDiv = document.createElement("div");
        gridDiv.setAttribute("class", "square");
        gridDiv.style.background = "white";
        gridDiv.style.opacity = "1";
        gridDiv.style.width = Math.ceil(480/numberOfSquares)+"px";
        gridDiv.style.height = Math.ceil(480/numberOfSquares)+"px";
        divContainer.appendChild(gridDiv);
    }
}







