var canvas = document.querySelector('#canvas');	  
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;	
canvas.height = window.innerHeight;	

var totalParticles = 50;		 //number of particles 
var maxRadius = 30;				 //maximum value of radius	

var particle = function(x,y,vx,vy,radius){
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.radius = radius;
}

var particleArray = new Array(); 							//array of particles		
var i;							 							//loop variable	

for(i = 0 ; i < totalParticles ; i++){
	
	//Defining properties of the particle
	var xcoord = Math.random()*window.innerWidth;
	var ycoord = Math.random()*window.innerHeight;
	var xvel = Math.random()*6 - 3;
	var yvel = Math.random()*6 - 3;
	var rad = Math.random()*maxRadius;
	
	//New particle with above properties
	var tempParticle = new particle(xcoord,ycoord,xvel,yvel,rad);	
	
	//Push tempParticle into the array
	particleArray.push(tempParticle);		 
}
	
c.fillStyle = 'aqua';											//define fillStyle

function draw()
{
	c.clearRect(0,0,window.innerWidth,window.innerHeight);		//Clears the entire canvas 

	//Update the value of the coordinates (according to velocity)
	for(i = 0 ; i < totalParticles ; i++ ){
		particleArray[i].x += particleArray[i].vx;
		particleArray[i].y += particleArray[i].vy;
	}

	//Checking for collison with walls
	for(i = 0 ; i < totalParticles ; i++ ){

		if(particleArray[i].x > window.innerWidth || particleArray[i].x < 0){
			particleArray[i].vx*=-1;	
		}

		if(particleArray[i].y > window.innerHeight || particleArray[i].y < 0){
			particleArray[i].vy*=-1;	
		}
	}

	//Drawing the particles
	for(i = 0 ; i < totalParticles ; i++ ){
		c.beginPath();
		c.arc(particleArray[i].x,particleArray[i].y,particleArray[i].radius,0, Math.PI*2,false);
		c.closePath();
		c.fill();
	}

	requestAnimationFrame(draw);
}
draw();			
