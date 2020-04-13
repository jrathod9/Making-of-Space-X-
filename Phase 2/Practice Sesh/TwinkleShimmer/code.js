var canvas = document.querySelector('#canvas');	  
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;	
canvas.height = window.innerHeight;	

var totalParticles = 50;		  
var maxRadius = 30;				 

var particle = function(x,y,vx,vy,radius){			
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.radius = radius;	
}

var particleArray = new Array(); 									
var i;							 						

for(i = 0 ; i < totalParticles ; i++){
	
	var xcoord = Math.random()*window.innerWidth;
	var ycoord = Math.random()*window.innerHeight;
	var xvel = Math.random()*6 - 3;
	var yvel = Math.random()*6 - 3;
	var rad = Math.random()*maxRadius;
	
	
	var tempParticle = new particle(xcoord,ycoord,xvel,yvel,rad);									
	
	//Push tempParticle into the array
	particleArray.push(tempParticle);		 
}
	

function draw()
{
	c.clearRect(0,0,window.innerWidth,window.innerHeight);		 

	for(i = 0 ; i < totalParticles ; i++ ){
		particleArray[i].x += particleArray[i].vx;
		particleArray[i].y += particleArray[i].vy;
	}

	for(i = 0 ; i < totalParticles ; i++ ){

		if(particleArray[i].x > window.innerWidth || particleArray[i].x < 0){
			particleArray[i].vx*=-1;	
		}

		if(particleArray[i].y > window.innerHeight || particleArray[i].y < 0){
			particleArray[i].vy*=-1;	
		}
	}
 

	for(i = 0 ; i < totalParticles ; i++ ){
		
		c.fillStyle = 'rgba(0,255,255,' + Math.random() + ')';			//rgb(0,255,255) is color code for aqua. Opacity is random

		c.beginPath();
		c.arc(particleArray[i].x,particleArray[i].y,particleArray[i].radius,0, Math.PI*2,false);
		c.closePath();
		c.fill();
	}

	requestAnimationFrame(draw);
}
draw();			
