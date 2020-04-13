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

var xspeed = 1;
var yspeed = 2;
function draw(){			
	
	c.clearRect(0,0,window.innerWidth,window.innerHeight);		//Clears the entire canvas 
	
	atom.x += xspeed;												//Update x coordinate		
	atom.y += yspeed;
	//Drawing the particle 
	c.beginPath();
	c.fillStyle = 'aqua';
	c.arc(atom.x,atom.y,atom.radius,0, Math.PI*2,false);
	c.closePath();
	c.fill();
	
	requestAnimationFrame(draw);								//Called inside the function
}

draw();															//Initial function call
