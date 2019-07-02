

//make grid if submit ...
const mG=document.querySelector("form");
mG.addEventListener("submit", makeGrid, false);



// this function for grid..
function makeGrid(){
    const pixelCanvas = document.getElementById("pixelCanvas");
    // check if there are any grid already ...
    if(pixelCanvas.hasChildNodes()){
        // remove if there are..
        pixelCanvas.removeChild(pixelCanvas.lastChild);

        // take the new inputs then draw the grid...
        const w= document.getElementById("inputWidth").value;
        const h= document.getElementById("inputHeight").value;
        const grid= document.createElement("TBODY");
        pixelCanvas.appendChild(grid);


        for (let r=0; r<h;r++){

            let gridRow= document.createElement("TR");
            grid.appendChild(gridRow);

            for (let c=0; c<w ; c++){

               let gridCell=document.createElement("TD");
               gridRow.appendChild(gridCell);

           }

        }

    }
    // if there are no grid....
    else{
        //// take the inputs then draw the grid...
        const w= document.getElementById("inputWidth").value;
        const h= document.getElementById("inputHeight").value;
        const grid= document.createElement("TBODY");
        pixelCanvas.appendChild(grid);


        for (let r=0; r<h;r++){

            let gridRow= document.createElement("TR");
            grid.appendChild(gridRow);

            for (let c=0; c<w ; c++){

               let gridCell=document.createElement("TD");
               gridRow.appendChild(gridCell);

           }

        }

    }
    //push all the pixel in grid in array...
    const arr= [];
    const gRows =document.getElementsByTagName("tr");

    for (let i=0; i <gRows.length ; i++){
        gcells = gRows[i].getElementsByTagName("td");
        for(let j=0; j < gcells.length; j++){
           arr.push(gcells[j]);
    }


}
    // coloring all pixel in the grid if pixel has been clicked...
    function coloring(){
        const cp = document.getElementById("colorPicker").value;
        this.style.backgroundColor = cp;
    }

    arr.forEach(function (pixel){
        pixel.addEventListener("click",coloring, false);
    });
}
