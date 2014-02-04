var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');
var canvasAvatar = document.getElementById('canvasAvatar');
var ctxAvatar = canvasAvatar.getContext('2d');


var avatar1;
var achtergrond1;
var btnPlay = new Button(0,0,0,0);
var gameWidth = canvasBg.width;
var gameHeight = canvasBg.height;
var mouseX;
var mouseY;
var fps = 10;
var drawInterval;


var imgSprite = new Image();
imgSprite.src = 'sprite3.png';
imgSprite.addEventListener('load',init,false);


//main functions
function init() {
	drawMenu();
	document.addEventListener('click',mouseClicked,false);
	
}

// functie van het opstarten en spelen van de game
function playGame(){
	//drawBg(); wordt eruit gelaten aangezien de achtergrond een object wordt!
    startDrawing();
	avatar1 = new Avatar();
	achtgerond1 = new Achtergrond();
	document.addEventListener('keydown',checkKeyDown,false);
	document.addEventListener('keyup',checkKeyUp,false);
	document.removeEventListener('click',mouseClicked,false);// zorgt ervoor dat de game niet opnieuw kan worden
}

function draw() {
 avatar1.draw();
}

function startDrawing() {
    stopDrawing();
    drawInterval = setInterval(draw,fps);
}

function stopDrawing() {
    clearInterval(drawInterval);
}
function drawMenu() {
    ctxBg.drawImage(imgSprite,0,786,800,600,0,0,800,600);
}



function clearCtxBg() {
    ctxBg.clearRect(0,0,gameWidth,gameHeight);
}

//end of main functions

//Avatar functions
function Avatar(){
this.srcX=0;//begintpunt van x
this.srcY=600;//begintpunt van y
this.drawX=220;//x punt waar het getekent wordt op het canvas
this.drawY=200;//y punt waar het getekent wordt op het canvas
this.width=100;//breedte van de char
this.height=185;//hoogte van de char
this.speed = 3;
this.isUpKey = false;
this.isRightKey = false;
this.isDownKey = false;
this.isLeftKey = false;
this.isEscapeKey=false;
this.leftX = this.drawX;
this.rightX = this.drawX + this.width;
this.topY = this.drawY;
this.bottomY = this.drawY + this.height;

}

function Achtergrond(){
   var srcX = 0;
    var srcY = 0;
    var drawX = 0;
    var drawY = 0;
    ctxBg.drawImage(imgSprite,0,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
}
Avatar.prototype.updateCoors = function(){
this.leftX = this.drawX;
this.rightX = this.drawX + this.width;
this.topY = this.drawY;
this.bottomY = this.drawY + this.height;
}


Avatar.prototype.draw = function() {
this.updateCoors();
clearCtxAvatar();
this.checkKeys();
ctxAvatar.drawImage(imgSprite,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
};

function resetGame(){
 location.reload();	
}

Avatar.prototype.checkKeys = function() {
	if(this.isUpKey && this.topY > 80 ) {
		this.drawY -= this.speed;
	}
	if(this.isRightKey && this.rightX < gameWidth) {
		this.drawX += this.speed;
		
	}
	if(this.isRightKey && this.rightX === gameWidth) {// voor naar de 2e kamer te gaan

	}
	if(this.isDownKey && this.bottomY < 490) {
		this.drawY += this.speed;
	}
	if(this.isLeftKey && this.leftX > 0) {
		this.drawX -= this.speed;
	}
	if(this.isEscapeKey)
	{
		resetGame();
	}
	
}



function clearCtxAvatar() {
    ctxAvatar.clearRect(0,0,gameWidth,gameHeight);
}
//end of avatar functions

//start of voorbeeldVraag functies
function Vragen(){
}



//end of voorbeeldVraag functies


//button object
function Button(xL,xR,yT,yB){
	this.xLeft = xL;
	this.xRight = xR;
	this.yTop = yT;
	this.yBottom = yB;
};

Button.prototype.checkClicked = function(){
	if (this.xLeft <= mouseX && mouseX <= this.xRight && this.yTop <= mouseY && mouseY <= this.yBottom) return true;		return true;//checkcliked algromite voor de klik
};

//end of button object




//event functions

function mouseClicked(e){
	mouseX = e.pageX = canvasBg.offsetLeft;
	mouseY = e.pageY = canvasBg.offsetTop;
	if(btnPlay.checkClicked()) playGame();
}

function checkKeyDown(e){
	var keyID = e.keyCode || e.which;
	if (keyID === 38 || keyID ===87) { //38 betekent pijl omhoog,87 betekent w toets
		avatar1.isUpKey=true;
		e.preventDefault();//zorgt ervoor dat er niet gescrolled kan worden, alleen in game movements
	}
	if (keyID === 39 || keyID ===68) { 
		avatar1.isRightKey=true;
		e.preventDefault();
	}
	if (keyID === 40 || keyID ===83) { 
		avatar1.isDownKey=true;
		e.preventDefault();
	}
	if (keyID === 37 || keyID ===65) { 
		avatar1.isLeftKey=true;
		e.preventDefault();
	}
	if(keyID=== 27){
		avatar1.isEscapeKey=true;
		e.preventDefault();
	}
	
	

 
}

function checkKeyUp(e){
	var keyID =  e.keyCode || e.which;
	if (keyID === 38 || keyID ===87) { //38 betekent pijl omhoog,87 betekent w toets
		avatar1.isUpKey=false;
		e.preventDefault();//zorgt ervoor dat er niet gescrolled kan worden, alleen in game movements
	}
	if (keyID === 39 || keyID ===68) { 
		avatar1.isRightKey=false;
		e.preventDefault();
	}
	if (keyID === 40 || keyID ===83) { 
		avatar1.isDownKey=false;
		e.preventDefault();
	}
	if (keyID === 37 || keyID ===65) { 
		avatar1.isLeftKey=false;
		e.preventDefault();
		
	}
	if(keyID=== 27){
		avatar1.isEscapeKey=false;
		e.preventDefault();
	}

 
}

//end of event functions