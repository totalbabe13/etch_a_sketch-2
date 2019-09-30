// alert("yolo! binches");
let gridDiv    = document.createElement("div");
const bodyNode = document.querySelector("body");
let clearGridBtn  = document.createElement("button");
bodyNode.appendChild(clearGridBtn);
bodyNode.appendChild(gridDiv);

gridDiv.setAttribute("id","gridDiv");
gridDiv.style.cssText = "margin-top: 3vh; margin-left:auto; margin-right: auto; display: grid; border: 1px red solid; width: 34em; height: 34em; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16,1fr);"
clearGridBtn.style.cssText = "margin-left: 19vh; background-color: #2196f3;"
clearGridBtn.textContent = "Clear the Grid"

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

clearGridBtn.onclick = clearGrid;
function clearGrid(){
   let cells = document.querySelectorAll(".cell")
   //console.log(cells)
   for (i = 0; i < cells.length; ++i) {
   cells[i].style.cssText = "background: white;";
  }
};
