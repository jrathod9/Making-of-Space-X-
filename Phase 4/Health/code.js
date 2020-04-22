var canvas = document.querySelector('#canvas');	  
var c = canvas.getContext('2d');
canvas.width = window.innerWidth - 20;	
canvas.height = window.innerHeight - 20;	

var totalBullets = 0; 		//bullets on screen
var health = 90;			//health of player
var kills = 0;				//total aliens killed
var maxAliens = 5;			//Max aliens on the screen
var bulletSpeed = 7;		//Speed of the bullet
var alienSpeed = 0.2;		//Speed of the aliens

//Will be used to add a flickering effect to the bullets and spaceshuttle
var bulletColors = ["cyan", "aqua" ,"turquoise", "teal" ,"lightcyan","mediumaquamarine","blue" ,"black"];	

/* THESE VARIABLES ARE FOR DRAWING THE SHUTTLE AND ALIENS */
//spaceshuttle props and dimensions
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

var keys = [];

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

var alien1 = new alien(Math.random()*(window.innerWidth-100)+60, Math.random()*(window.innerHeight/2-300));

for(a = 0; a < maxAliens; a++){
	var temp = new alien(Math.random()*(window.innerWidth-100)+60, Math.random()*(window.innerHeight/2-300));
	Aliens.push(temp);
}

var posx = window.innerWidth/2 , posy = window.innerHeight - baseBottomh - midBottomh - cannonh;
var player = new shuttle(posx,posy);

function draw(){

	c.clearRect(0,0,window.innerWidth,window.innerHeight);

	for(a = 0 ; a < Aliens.length ; a++){
		Aliens[a].y += alienSpeed;
		drawAlien(Aliens[a]);
	}

	//Check if alien touches shuttle or crosses screen to reduce health
	for( j=0 ; j<Aliens.length ; j++)
	{	
		if(Math.abs(Aliens[j].y - player.y) <= 60 && Math.abs(Aliens[j].x - player.x)<=18 ||  Aliens[j].y >= window.innerHeight -30){	
			health-=30;
			var addAlien = new alien(Math.random()*(window.innerWidth-100)+60, Math.random()*(window.innerHeight/2-300),Math.floor(Math.random()*2));
			Aliens[j] = addAlien;
		}
	}
	
	//Drawing the health bar
	c.beginPath();
	if(health == 90){
		c.fillStyle = "green";
		healthbarHeight = 90*6;
	}
	else if(health == 60){
		c.fillStyle = "orange";
		healthbarHeight = 60*6;
	}	
	else if(health == 30){
		c.fillStyle = "red";
		healthbarHeight = 30*6;
	}
	else{
		healthbarHeight = 0;
	}
	c.fillRect(20, 20, 20 , healthbarHeight );
	c.closePath();
	c.fill();

	//Check bullets that left the screen and remove them from array
	for(a = 0 ; a < Bullets.length ; a++)
	{
		if(Bullets[a].y <=0 ){
			Bullets.splice(a,1);
		}
	}	

	//Update bullet coordinates to make it move and draw bullets
	for(a = 0 ; a < Bullets.length ; a++)
	{
		Bullets[a].y -= bulletSpeed;
		drawBullet(Bullets[a]);
	}	

	//Checking for bullet kill
	for(i=0;i<Bullets.length;i++)
	{
		for(j=0;j<maxAliens;j++)
		{
			if(Math.abs(Bullets[i].x - Aliens[j].x) <= 18 && Bullets[i].y <= Aliens[j].y && Bullets[i].y>=Aliens[j].y-20 && (player.y - Aliens[j].y) >= 38 )
			{
				kills++;
				Bullets[i].y = -10;
				var addAlien = new alien(Math.random()*(window.innerWidth-100)+60, Math.random()*(window.innerHeight/2-300),Math.floor(Math.random()*2));
				Aliens[j] = addAlien;				
			}
		}
	}
	//Handling arrow key presses and shuttle movement boundaries 
		
	// left
	if (keys[37]) {
		if(player.x >= 70)
		player.x -= shuttleSpeedh;
	}
	   
	// right
	if (keys[39]) {
		if(player.x <= window.innerWidth - 50)
			player.x += shuttleSpeedh;
	}
	   
	// down
	if (keys[38]) {
		if(player.y >= window.innerHeight/2)
			player.y -= shuttleSpeedv;
	}
	   
	// up
	if (keys[40]) {
		if(player.y <= window.innerHeight - baseBottomh - midBottomh - cannonh)
			player.y += shuttleSpeedv;
	}

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

function drawBullet(thisBullet){
	c.fillStyle = bulletColors[Math.floor(Math.random()*6)];
	c.beginPath();
	c.arc(thisBullet.x,thisBullet.y - cannonh + 10, 2.5 , 0 , Math.PI*2 ,false);
	c.fillRect(thisBullet.x-2.5,thisBullet.y - cannonh + 10  ,5,5);
	c.closePath();
	c.fill();
}

window.addEventListener("keydown", keysPressed, false );
window.addEventListener("keyup", keysReleased, false);

function keysPressed(e) {
	// store an entry for every key pressed
	keys[e.keyCode] = true;
}
 
function keysReleased(e) {
    // mark keys that were released
	keys[e.keyCode] = false;
	if(e.keyCode==32){
			var temp = new bullet(player.x , player.y - midBottomh - cannonh);
			totalBullets++;
			Bullets.push(temp);
	}
}