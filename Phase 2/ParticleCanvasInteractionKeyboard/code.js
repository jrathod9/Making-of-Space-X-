var canvas = document.querySelector('#canvas');	  
var c = canvas.getContext('2d');
canvas.width = window.innerWidth - 20;	
canvas.height = window.innerHeight -20;	

var keys = [];														//to track keys pressed 

var particle = function(x,y,radius){
	this.x = x;
	this.y = y;
	this.radius = radius;	
}

var atom = new particle(100,100,30);								
var xspeed = 10;													//Define x direction speed  
var yspeed = 7;														//Define y direction speed
function draw(){			
	
	c.clearRect(0,0,window.innerWidth,window.innerHeight);			//Clears the entire canvas 
	
	c.font = "15px Calibri";
	c.fillText("Press arrow keys", window.innerWidth/2-20 , window.innerHeight/2-20);

	if(keys[37])				//if left is true
		atom.x-=xspeed;			//move left by xspeed
	else if(keys[39])			//else if right is true
		atom.x+=xspeed;			//move right by xspeed

	if(keys[38])				//if up is true
		atom.y-=yspeed;			//move up by yspeed
	else if(keys[40])			//else if down is true
		atom.y+=yspeed;			//move down by yspeed

	//Drawing the particle 
	c.beginPath();
	c.fillStyle = 'aqua';
	c.arc(atom.x,atom.y,atom.radius,0, Math.PI*2,false);
	c.closePath();
	c.fill();
	
	requestAnimationFrame(draw);								
}
draw();															
			
window.addEventListener("click",move,false);			

window.addEventListener("keydown",keyPressed,false);	//keydown listener
window.addEventListener("keyup",keyReleased,false);		//keyup listener

function move(e){
	atom.x = e.x ;
	atom.y = e.y; 
}

function keyPressed(e){				//sets value true when key pressed 
	keys[e.keyCode] = true;
}
function keyReleased(e){			//sets value false when key released
	keys[e.keyCode] = false;
}
