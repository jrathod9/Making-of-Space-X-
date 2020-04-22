var canvas = document.querySelector('#canvas');	  
var c = canvas.getContext('2d');
canvas.width = window.innerWidth - 20;	
canvas.height = window.innerHeight - 20;	

var maxStars = 150;
var starSpeed = 5;

//Star object
var star = function(x,y ,rad){
	this.x = x;
	this.y = y;
	this.rad = rad;
}

Stars = new Array();
//Array of stars 
for(a = 0; a<maxStars ; a++){
	var temp = new star(Math.random()*(window.innerWidth-20), Math.random()*(window.innerHeight-20),Math.random()*3 );
	Stars.push(temp);
}

function draw(){	
	//Clear window
	c.clearRect(0,0,window.innerWidth, window.innerHeight);
	//Draw STARS
	for(j = 0;j<maxStars ; j++){
		c.beginPath();
		c.fillStyle = 'rgba(255,255,255,0.7)';
		c.arc(Stars[j].x,Stars[j].y,Stars[j].rad , 0 , Math.PI * 2 , false);
		Stars[j].y += starSpeed;
		if(Stars[j].y >= window.innerHeight-20){
			Stars[j].y = 0;
		}
		c.closePath();
		c.fill();
	}
	requestAnimationFrame(draw);
}

draw();