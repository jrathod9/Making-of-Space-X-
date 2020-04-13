var canvas = document.querySelector('#canvas');	  
var c = canvas.getContext('2d');
canvas.width = window.innerWidth - 20;	
canvas.height = window.innerHeight -20;	

var keys = [];												//to track keys pressed 

var particle = function(x,y,radius){
	this.x = x;
	this.y = y;
	this.radius = radius;	
}

var atom = new particle(100,100,30);							//Define atom particle 
var xspeed = 10;													//Define x direction speed  
var yspeed = 7;
function draw(){			
	
	c.clearRect(0,0,window.innerWidth,window.innerHeight);		//Clears the entire canvas 
			
	if(keys[37])
		atom.x-=xspeed;
	else if(keys[39])	
		atom.x+=xspeed;

	if(keys[38])
		atom.y-=yspeed;
	else if(keys[40])	
		atom.y+=yspeed;

	//Drawing the particle 
	c.beginPath();
	c.fillStyle = 'aqua';
	c.arc(atom.x,atom.y,atom.radius,0, Math.PI*2,false);
	c.closePath();
	c.fill();
	
	requestAnimationFrame(draw);								//Called inside the function
}

draw();															//Initial function call
			
window.addEventListener("click",move,false);			
window.addEventListener("keydown",keyPressed,false);	//keydown listener
window.addEventListener("keyup",keyReleased,false);		//keyup listener

function move(e){
	atom.x = e.x ;
	atom.y = e.y; 
}
function keyPressed(e){				
	keys[e.keyCode] = true;
}
function keyReleased(e){
	keys[e.keyCode] = false;
}
