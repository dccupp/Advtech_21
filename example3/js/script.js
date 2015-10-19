/** 
*This method generates a red circle div where the user clicks
*
*@param evt     the info about the click
*/
function makeACircle(evt){
    //generate a div
    var circ = document.createElement("div");
    //set its horizontal position to that of the cursor:
    circ.style.left = evt.clientX+'px';
    //set its vertical position to that of the cursor:
    circ.style.top = evt.clientY+'px';
    //adds it to the HTML as child <body>
    document.body.appendChild(circ);
}

onload=init;

function init() {
    document.onmousemove = function(evt){
        makeACircle(evt);
    }
}
