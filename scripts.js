// alert("yolo! binches");
let gridDiv = document.createElement("div");
//let actualGrid = document.createElement("div");
const bodyNode = document.querySelector("body");

bodyNode.appendChild(gridDiv);
//gridDiv.appendChild(actualGrid);

gridDiv.setAttribute("id","gridDiv");
//actualGrid.setAttribute("id","grid");
gridDiv.style.cssText = " display: grid; border: 1px red solid; width: 34em; height: 34em; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16,1fr);"
