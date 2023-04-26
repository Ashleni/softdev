var c = document.getElementById("playground") // get canvas
var dotButton = document.getElementById("buttonCircle")// Get Dot button
var stopbutton = document.getElementById("buttonStop")// Get stop button
var dvdButton = document.getElementById("buttonDVD")// Get dvd function

// instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

ctx.fillStyle = 'turquoise'

var requestID; // init global var for use with animation frames

var clear = (e) => {
	//e.preventDefault();
    ctx.clearRect(0, 0, c.width, c.height)
};

var radius = 0;
var growing = true;

var drawDot = () => {
    window.cancelAnimationFrame(requestID);
    clear();
    if (growing && radius > c.width / 2) {
        growing = false;
    } else if (!growing && radius <= 0) {
        growing = true;
    }

    if (growing) {
        radius+=1;
    } else {
        radius-=1;
    }

    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();

    requestID = window.requestAnimationFrame(drawDot);
};

//var stopIt = function() {
var stopIt = () => {
    console.log("stopIt invoked...")
    console.log(requestID);

    /* Your code here 
    ... to stop the animation
    You will need window.cancelAnimationFrame()
    */
    window.cancelAnimationFrame(requestID);
};

var dvdLogoSetup = function(){
    window.cancelAnimationFrame(requestID);
    var rectWidth = 120;
    var rectHeight = 80;
    var rectX = Math.floor(Math.random()*(500-rectWidth));
    var rectY = Math.floor(Math.random()*(500-rectHeight));
    var xVel = Math.round(Math.random()) * 2 - 1;
    var yVel = Math.round(Math.random()) * 2 - 1;

    var logo = new Image();
    logo.src = "logo_dvd.jpg"

    var dvdLogo = function(){
        ctx.clearRect(0,0,c.width,c.height);
        ctx.drawImage(logo,rectX,rectY,rectWidth,rectHeight);
        if(rectX <0 || rectX > c.width-rectWidth){
            xVel = -xVel;
        }
        if(rectY <0 || rectY > c.height-rectHeight){
            yVel = -yVel;
        }
        rectX+=xVel;
        rectY+=yVel;
        requestID = window.requestAnimationFrame(dvdLogo);

        
    };
    dvdLogo();
}


dotButton.addEventListener("click", drawDot);
stopbutton.addEventListener("click", stopIt);
dvdButton.addEventListener("click", dvdLogoSetup );


