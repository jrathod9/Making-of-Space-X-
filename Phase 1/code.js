var canvas = document.querySelector('#canvas');	  
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;	
canvas.height = window.innerHeight;	

c.beginPath();
c.fillStyle = 'rgba(1,25,255,0.5)'
c.fillRect(400, 100, 20 , 200 );
c.closePath();

c.beginPath();
c.strokeStyle = 'red';
c.arc(100,600,50 , 0 , Math.PI * 2 , false);
c.closePath();
c.stroke();


c.beginPath();
c.fillStyle = 'red';
c.font = "50px Calibri";
c.fillText("|Space X|" , (window.innerWidth-20)/2 - 65 , (window.innerHeight-20)/2 - 70);
c.closePath();


c.beginPath();
c.fillStyle = 'rgba(255,255,255,0.2	)';
c.arc(100,100,50 , 0 , Math.PI * 2 , false);
c.closePath();
c.fill();


c.beginPath();
c.strokeStyle = 'rgb(255,255,255)';
c.moveTo(1300,600);
c.lineTo(1100,400);
c.closePath();
c.stroke();


var particle = function(x,y){
	this.x = x;
	this.y = y;
}


