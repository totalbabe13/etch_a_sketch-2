// alert("yolo! binches");
let gridDiv = document.createElement("div");
const bodyNode = document.querySelector("body");
bodyNode.appendChild(gridDiv);

gridDiv.setAttribute("id","gridDiv");
gridDiv.style.cssText = " display: grid; border: 1px red solid; width: 34em; height: 34em; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16,1fr);"

function createGridCells(){
  for (i = 0; i < 256; i++){
     let newCell = document.createElement("div");
     newCell.setAttribute("class","cell");
     gridDiv.appendChild(newCell);

     newCell.onmouseover = fillCell;
     function fillCell(){
       console.log("test");
       newCell.style.cssText =  "background: blue;" //"background: #00ff29;"
     };
  }
};

createGridCells();
// add hover mouseover to every cell

// select every cell
// let allCells = document.getElementsByClassName("cell")
// allCells.onmouseover = fillCell;
//
// function fillCell(){
//   console.log("test");
  //allCells.style.cssText =  "background: blue;" //"background: #00ff29;"
//}
