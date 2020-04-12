var canvas = document.querySelector('#canvas');	  
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;	
canvas.height = window.innerHeight;	

var totalParticles = 50;		 //number of particles 
var maxRadius = 30;				 //maximum value of radius	

var particle = function(x,y,radius){
	this.x = x;
	this.y = y;
	this.radius = radius;
}

var particleArray = new Array(); 							//array of particles		
var i;							 							//loop variable	

for(i = 0 ; i < totalParticles ; i++){
	
	//Defining properties of the particle
	var xcoord = Math.random()*window.innerWidth;
	var ycoord = Math.random()*window.innerHeight;
	var rad = Math.random()*maxRadius;
	
	//New particle with above properties
	var tempParticle = new particle(xcoord,ycoord,rad);	
	
	//Push tempParticle into the array
	particleArray.push(tempParticle);		 
}
	
c.clearRect(0,0,window.innerWidth,window.innerHeight);		//Clears the entire canvas 
c.fillStyle = 'aqua';

//Drawing the particles
for(i = 0 ; i < totalParticles ; i++ ){
	c.beginPath();
	c.arc(particleArray[i].x,particleArray[i].y,particleArray[i].radius,0, Math.PI*2,false);
	c.closePath();
	c.fill();
}
															