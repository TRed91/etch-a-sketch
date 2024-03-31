const divContainer = document.querySelector("#container");
const btn = document.querySelector("#btn");
let numberOfSquares = 16;

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

    divContainer.addEventListener("mouseover", (event) => {
        let target = event.target;
        target.style.backgroundColor = "black";
    });
});

// draw grid
function drawGrid (){
for (let i = 0; i < (numberOfSquares ** 2); i++) {
    let gridDiv = document.createElement("div");
    gridDiv.setAttribute("id", `gridDiv${i}`);
    gridDiv.style.width = Math.ceil(960/numberOfSquares)+"px";
    gridDiv.style.height = Math.ceil(960/numberOfSquares)+"px";
    divContainer.appendChild(gridDiv);
}
}







