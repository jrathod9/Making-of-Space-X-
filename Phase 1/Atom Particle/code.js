var canvas = document.querySelector('#canvas');	  
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;	
canvas.height = window.innerHeight;	

var particle = function(x,y,radius){
	this.x = x;
	this.y = y;
	this.radius = radius;	
	//this refers to the owner object, i.e. an instance of particle
}

var atom = new particle(100,100,30);

c.beginPath();
c.fillStyle = 'aqua';
c.arc(atom.x,atom.y,atom.radius,0, Math.PI*2,false);
c.closePath();
c.fill();