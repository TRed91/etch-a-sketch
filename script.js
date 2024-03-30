const divContainer = document.querySelector("#container");

for (let i = 0; i < (16*16); i++) {
    let gridDiv = document.createElement("div");
    gridDiv.setAttribute("id", `gridDiv${i}`);
    divContainer.appendChild(gridDiv);
}


