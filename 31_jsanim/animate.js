var c = // GET CANVAS
var dotButton = // GET DOT Button
var stopButton = // GET STOP BUTTON 

var ctx = // YOUR CODE HERE

ctx.fillStyle = // YOUR CODE HERE

var requestID;  // int global var for use with animation frames

var clear = (e) => {
	
};

var radius = 0;
var growing = true;

var drawDot = () => {
	
	
};

//var stopIt = function() {
var stopIt = () => {
	console.log("stopIt invoked...")
	console.log( requestID );
	
	
};

dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click", stopIt );

