//retrieve node in DOM via ID
var c = document.getElementById("slate")

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

//init global state var
var mode = "";

//var toggleMode = function(e) {
//done
var toggleMode = (e) => {
    console.log("toggling...");
    if (mode == "rect") {
        mode = "circle";
        console.log("circle")
        document.getElementById("buttonToggle").innerHTML= "circle";
    }
    else {
        mode = "rect";
        console.log("rect")
        document.getElementById("buttonToggle").innerHTML= "rect";
    }
}

//done
var drawRect = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    console.log("mouseclick registered at", mouseX, mouseY);
	ctx.fillStyle = "red"
	ctx.fillRect(mouseX, mouseY, 20, 80);
}

//var draw = function(e) {
var drawCircle = (e) => {
	var mouseX = e.offsetX;
	var mouseY = e.offsetY;
    console.log("mouseclick registered at", mouseX, mouseY);
	ctx.beginPath();
	ctx.fillStyle = "red"
	ctx.strokeStyle = "black"
	ctx.arc(mouseX, mouseY, 30, 0 , 2*Math.PI)
	ctx.fill();
}

//var draw = function(e){
//done
var draw = (e) => {
	if (mode == "rect"){
		drawRect(e);
	}
	else if (mode == "circle"){
		drawCircle(e);
	}
}

//var wipeCanvas = function() {
//done
var wipeCanvas = () => {
	ctx.clearRect(0,0,600,600)
}


//c.addEventListener("click", drawCircle)





c.addEventListener("click", draw);
var bToggler = document.getElementById("buttonToggle");
/* //?????????????????????????????????
bToggler.;
var clearB =;
clearB. ;
*/
