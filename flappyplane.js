var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


// some variables


// load images

var plane = new Image();
var bg = new Image();
var fg = new Image ();
var pipeNorth = new Image();
var pipeSouth = new Image();

plane.src="images/plane.png";
bg.src="images/background.png";
fg.src = "images/road.png"
pipeNorth.src = "images/pipenNorth.png"
pipeSouth.src = "images/pipeSouth.png"

// draw images

function draw (){
	
	ctx.drawImage (bg,0,0);
	
	ctx.drawImage(pipeNorth,100,0);
	ctx.drawImage(pipeSouth,100,0+const);
	
}

draw();