var canvas = document.querySelector('#canvas');	  
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;	
canvas.height = window.innerHeight;	

var totalBullets = 0; 		//bullets on screen
var health = 90;			//health of player
var kills = 0;				//total aliens killed
var maxAliens = 5;			//Max aliens on the screen
var bulletSpeed = 7;		//Speed of the bullet
var alienSpeed = 0.2;		//Speed of the aliens

//spaceshuttle props and dimensions

var bulletColors = ["cyan", "aqua" ,"turquoise", "teal" ,"lightcyan","mediumaquamarine","blue" ,"black"];

var cannonw = 10,cannonh = 20;
var midBottomw = 24,midBottomh = 20 ,midTopw = 16,midToph = 20;
var baseBottomw = 36 ,baseBottomh = 24 ,baseTopw = 28 ,baseToph = 24;
var ridgew = 16 ,ridgeh = 16;
var colorBack = "aqua", colorFront = "blue";
var shuttleSpeedh = 7;
var shuttleSpeedv  = 4;

//alien props and dimanesions
var bunw = 20,bunh = 6;
var headw = 26,headh = 6 ;
var facew = 30 ,faceh = 18;
var layer1w = 5 ,layer1h = 5;
var layer2w = 4,layer2h = 4;
var midw = 3,midh = 3;

//Shuttle object
var shuttle = function(x,y){
	this.x = x;
	this.y = y;
}

//Alien object
var alien = function(x,y){
	this.x = x;
	this.y = y;
}

//Bullet object
var bullet = function(x,y){
	this.x = x;
	this.y = y;
}

var Bullets = new Array();
var Aliens = new Array();

var alien1 = new alien(Math.random()*window.innerWidth, Math.random()*window.innerHeight);

var player = new  shuttle(Math.random()*window.innerWidth, Math.random()*window.innerHeight);

function draw(){

	c.clearRect(0,0,window.innerWidth,window.innerHeight);

	drawAlien(alien1);
	drawShuttle(player);

	requestAnimationFrame(draw);
}

draw();

function drawAlien(alien){
	c.fillStyle = 'green';
	c.beginPath();
	c.fillRect(alien.x - bunw/2,alien.y - faceh/2 - headh - bunh , bunw , bunh);
	c.fillRect(alien.x - headw/2 , alien.y - faceh/2 - headh, headw , headh);
	c.fillRect(alien.x - facew/2 , alien.y - faceh/2 , facew ,faceh);
	c.fillRect(alien.x + midh/2 , alien.y + faceh/2 , layer1w , layer1h);
	c.fillRect(alien.x - midh/2 -layer1w , alien.y + faceh/2 , layer1w , layer1h);
	c.fillRect(alien.x + midw/2 + layer1w/2 , alien.y + faceh/2 + layer1h , layer2w , layer2h);
	c.fillRect(alien.x - midw/2 - layer1w -2, alien.y + faceh/2 + layer1h , layer2w , layer2h);
	c.fillRect(alien.x - midw/2 , alien.y + faceh/2 + layer1h + layer2h , midw , midh );
	c.fillStyle = "black";
	//Eyes
	c.fillRect(alien.x - headw/2 , alien.y , 8, 4);
	c.fillRect(alien.x + headw/2 - 8 , alien.y , 8, 4);
	c.closePath();
	c.fill();
}

function drawShuttle(testShuttle){

		var colorBack = "aqua" , colorFront = "blue";
		//Cannon
		c.beginPath();
		c.fillStyle = bulletColors[Math.floor(Math.random()*6)];		
		c.fillRect(testShuttle.x - cannonw/2 , testShuttle.y - midBottomh - cannonh ,cannonw,cannonh);	
		//Mid bottom
		c.fillRect(testShuttle.x - midBottomw/2, testShuttle.y  - midBottomh, midBottomw , midBottomh);
		//Mid top
		c.fillStyle = colorFront;
		c.fillRect(testShuttle.x- midTopw/2 ,  testShuttle.y - midToph, midTopw,midToph);
		c.closePath();
		//BaseBottom
		c.fillStyle = bulletColors[Math.floor(Math.random()*6)];
		c.fillRect(testShuttle.x- baseBottomw/2 , testShuttle.y ,baseBottomw,baseBottomh);
		//BaseTop
		c.fillStyle = colorFront;
		c.fillRect(testShuttle.x- baseTopw/2 ,  testShuttle.y  , baseTopw , baseToph);
		//Ridge
		c.fillStyle = "black";
		c.fillRect(testShuttle.x- ridgew/2 , testShuttle.y + baseToph - ridgeh, ridgew,ridgeh);
		//Tail
		c.fillStyle = bulletColors[Math.floor(Math.random()*8)];
		c.fillRect(testShuttle.x + baseBottomw/2 , testShuttle.y + baseBottomh,7,7);
		c.fillRect(testShuttle.x - baseBottomw/2 - 7,testShuttle.y + baseBottomh,7,7 );
		c.closePath();
		c.fill();
}