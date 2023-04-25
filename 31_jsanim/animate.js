var c = document.getElementById("playground");// GET CANVAS
var dotButton = document.getElementById("buttonCircle"); // GET DOT Button
var stopButton = document.getElementById("buttonStop");// GET STOP BUTTON 

var ctx = c.getContext("2d"); // YOUR CODE HERE

ctx.fillStyle = "blue"// YOUR CODE HERE

var requestID;  // int global var for use with animation frames

var clear = (e) => {
  console.log("wiping canvas...")
  ctx.clearRect(0,0,c.clientWidth,c.clientHeight)
  //console.log("ET VIOLA.  eh?")
};

var radius = 0;
var growing = true;

var drawDot = () => {
  ctx.clearRect(0,0, c.width, c.height);
  //var mouseX = event.offsetX;
  //var mouseY = event.offsetY;
  //console.log("mouseclick registered at ", mouseX, mouseY);

  ctx.beginPath();
  ctx.arc(c.width/2, c.height/2, 50, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  
  if (radius < 250){
	  radius += 1;
	  requestID = window.requestAnimationFrame(drawDot);
	  growing = true;
	  
  }
  
  radius -= 1;
  requestID = window.requestAnimationFrame(drawDot);
  growing = false;
  window.cancelAnimationFrame(requestID);
};

//var stopIt = function() {
var stopIt = () => {
	console.log("stopIt invoked...")
	console.log( requestID );
	
	
};

dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click", stopIt );

