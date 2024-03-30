const divContainer = document.querySelector("#container");

for (let i = 0; i < (16*16); i++) {
    let gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", "gridDiv");
    divContainer.appendChild(gridDiv);
}

let drawDiv = document.querySelector(".gridDiv");
drawDiv.addEventListener("mouseover", () => {
    div.setAttribute("style", "background: black");
});
