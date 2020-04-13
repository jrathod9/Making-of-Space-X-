var canvas = document.querySelector('#canvas');	  
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;	
canvas.height = window.innerHeight;	

var particle = function(x,y,radius){
	this.x = x;
	this.y = y;
	this.radius = radius;	
}

var atom = new particle(100,100,30);							//Define atom particle 
var xspeed = 1;													//Define x direction speed  
function draw(){			
	
	c.clearRect(0,0,window.innerWidth,window.innerHeight);		//Clears the entire canvas 

	c.font = "15px Calibri";
	c.fillText("Click anywhere", window.innerWidth/2-20 , window.innerHeight/2-20);
	
	//Drawing the particle 
	c.beginPath();
	c.fillStyle = 'aqua';
	c.arc(atom.x,atom.y,atom.radius,0, Math.PI*2,false);
	c.closePath();
	c.fill();
	
	requestAnimationFrame(draw);								//Called inside the function
}

draw();															//Initial function call


window.addEventListener("click", move , false);					//define event listener

function move(e)												//response function 												
{
	console.log(e.x,e.y);										//prints the values in console	
	atom.x = e.x;												//update x coordinate of atom		
	atom.y = e.y;												//update y coordinate of atom
}