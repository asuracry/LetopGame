var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');

var canvasAvatar = document.getElementById('canvasAvatar');
var ctxAvatar = canvasAvatar.getContext('2d');

var canvasVraag = document.getElementById('canvasVraag');
var ctxVraag = canvasVraag.getContext('2d');

var vraag1;
var vraag2;
var avatar1;
var achtergrond1;
var btnPlay = new Button(0,0,0,0);
var gameWidth = canvasBg.width;
var gameHeight = canvasBg.height;
var mouseX;
var mouseY;
var fps = 10;
var drawInterval;
var tekenVraag = 0;
var vraag1Beantwoord = false;
var vraag2Beantwoord = false;
var score = 0;
//var tekenVraag = false;


var imgVraag = new Image();
imgVraag.src = 'vragensprite.png';

var imgSprite = new Image();
imgSprite.src = 'sprite4.png';
imgSprite.addEventListener('load',init,false);

var imgMenu = new Image();
imgMenu.src = 'menu.png';

//main functions
function init() {
	drawMenu();
	document.addEventListener('click',mouseClicked,false);
	
}

// functie van het opstarten en spelen van de game
function playGame(){
    startDrawing();
	avatar1 = new Avatar();
	vraag1= new Vraag();
	vraag2 = new Vraag();
	achtergrond1 = new Achtergrond();
	document.addEventListener('keydown',checkKeyDown,false);
	document.addEventListener('keyup',checkKeyUp,false);
	document.removeEventListener('click',mouseClicked,false);// zorgt ervoor dat de game niet opnieuw kan worden
}

function draw() {

	achtergrond1.draw();
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
    ctxBg.drawImage(imgMenu,0,0,800,600,0,0,800,600);
}


// start of clear funties

function clearCtxBg() {
	
    ctxBg.clearRect(0,0,gameWidth,gameHeight);
}

function clearCtxAvatar(){
	ctxAvatar.clearRect(0,0,gameWidth,gameHeight);
}



// end of clear functies


//end of main functions

//Avatar functions
function Avatar(){
this.srcX=0;//begintpunt van x
this.srcY=600;//begintpunt van y
this.drawX=300;//x punt waar het getekent wordt op het canvas
this.drawY=200;//y punt waar het getekent wordt op het canvas
this.width=100;//breedte van de char
this.height=190;//hoogte van de char
this.speed = 3;
this.isUpKey = false;
this.isRightKey = false;
this.isDownKey = false;
this.isLeftKey = false;
this.isEscapeKey=false;
this.isSpaceBarKey=false;
this.isRkey=false;
this.leftX = this.drawX;
this.rightX = this.drawX + this.width;
this.topY = this.drawY;
this.bottomY = this.drawY + this.height;
this.laden = false;



}

function Vraag(){
	this.srcX;
	this.srcY = 0;
    this.drawX = 0;
    this.drawY = 0;
    this.width = 800;
    this.height= 600;
	this.isOneKey = false;
	this.isTwoKey = false;
	this.isThreeKey =false;

}


function Achtergrond(){
    this.srcX = 0;
    this.srcY = 0;
    this.drawX = 0;
    this.drawY = 0;
    this.width = 3500;
    this.height= 600;
    this.speed = 4;
    this.isUpKey = false;
	this.isRightKey = false;
	this.isDownKey = false;
	this.isLeftKey = false;
	this.isEscapeKey=false;
	this.isRkey=false;
	this.isEkey=false;
	this.leftX = this.drawX;
	this.rightX = this.drawX + this.width;
	this.topY = this.drawY;
	this.bottomY = this.drawY + this.height;
	this.antwoordA = false;// variabelen voor het geven van een antwoord
	this.antwoordB = false;// variabelen voor het geven van een antwoord
	this.antwoordC = false;// variabelen voor het geven van een antwoord
    
}

Achtergrond.prototype.draw = function()
{
	this.updateCoors();
	clearCtxBg();
	this.checkKeys();
	ctxBg.drawImage(imgSprite,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);


}

Achtergrond.prototype.updateCoors = function(){
this.leftX = this.drawX;
this.rightX = this.drawX + this.width;
this.topY = this.drawY;
this.bottomY = this.drawY + this.height;
}

Vraag.prototype.draw = function(){
//clearCtxAvatar();
//clearCtxBg();
ctxVraag.drawImage(imgVraag,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
this.checkKeys();
}

Vraag.prototype.checkKeys= function(){
if(vraag1.isOneKey === true)
	{
	score += 1;
console.log('Score:' ,score);
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag1.isTwoKey === true)
	{
console.log('Score:' ,score);
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag1.isThreeKey === true)
	{
	console.log('Score:' ,score);
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag2.isOneKey === true)
	{
	clearCtxVraag();
	tekenVraag = 0;
	console.log('vraag tv');
	}
if(vraag2.isTwoKey === true)
	{
	clearCtxVraag();
	tekenVraag = 0;
	console.log('twee ingedrukt');
	}
if(vraag2.isThreeKey === true)
	{
	clearCtxVraag();
	tekenVraag = 0;
	}

}

Avatar.prototype.updateCoors = function(){
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

Achtergrond.prototype.checkKeys = function() {
	if(this.isRightKey && this.drawX >= -2576 ) {
		this.drawX -= this.speed;
	}
	if(this.isLeftKey &&  this.drawX <= -8)
	{
		this.drawX += this.speed;
	}	
	if(this.isEscapeKey)
	{
		resetGame();
	}
	if(this.isEkey)
	{
		console.log('X:', this.drawX);
		
	}

	
}



Avatar.prototype.checkKeys = function(){
	if(this.isUpKey &&this.topY > 110){
		this.drawY -= this.speed;
	}
	if(this.isDownKey && this.bottomY < 490){
		this.drawY += this.speed;
	}
	if(this.isSpaceBarKey && achtergrond1.drawX <= -620 && achtergrond1.drawX >= -732 && vraag1Beantwoord === false)//berekening voor de koelkast vraag
	{
		vraag1.srcX = 0;
		tekenVraag = 1;
		vraag1Beantwoord = true;
	}
	if(this.isSpaceBarKey && achtergrond1.drawX <= -248 && achtergrond1.drawX >= -308 && vraag2Beantwoord === false)//berekening voor de tv vraag
	{
		vraag2.srcX = 800;
		tekenVraag = 2;
		vraag2Beantwoord = true;
	}
	if(this.isRkey){
		console.log('Y:' , this.drawY);
		//console.log(this.drawX);
	}
	if(tekenVraag === 1)
	{
		vraag1.draw();
	}
	if(tekenVraag ===2)
	{
		vraag2.draw();
	}
}


function clearCtxAvatar() {
    ctxAvatar.clearRect(0,0,gameWidth,gameHeight);

}

function clearCtxBg(){
	ctxBg.clearRect(0,0,gameWidth,gameHeight);
}

function clearCtxVraag(){
	ctxVraag.clearRect(0,0,gameWidth,gameHeight);
}
//end of avatar functions


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
	if(btnPlay.checkClicked())playGame();
}


function checkKeyDown(e){
	var keyID = e.keyCode || e.which;
	if (keyID === 38 || keyID ===87) { //38 betekent pijl omhoog,87 betekent w toets
		avatar1.isUpKey=true;
		e.preventDefault();//zorgt ervoor dat er niet gescrolled kan worden, alleen in game movements
	}
	if (keyID === 39 || keyID ===68) { 
		achtergrond1.isRightKey=true;
		e.preventDefault();
	}
	if (keyID === 40 || keyID ===83) { 
		avatar1.isDownKey=true;
		e.preventDefault();
	}
	if (keyID === 37 || keyID ===65) { 
		achtergrond1.isLeftKey=true;
		e.preventDefault();
	}
	if(keyID=== 27){
		achtergrond1.isEscapeKey=true;
		e.preventDefault();
	}
	if(keyID === 32){
		avatar1.isSpaceBarKey=true;
		e.preventDefault();
	}
	if(keyID === 82){
		avatar1.isRkey = true;
		e.preventDefault();
	}
	if(keyID === 69)
	{
		achtergrond1.isEkey=true;
		e.preventDefault();
	}
	if(keyID === 81)
	{
		vraag1.isQKey = true;
		
		e.preventDefault();
	}
	if(keyID === 49 && tekenVraag ===1)
	{
		vraag1.isOneKey = true;
		e.preventDefault();

	}
	if(keyID === 49 && tekenVraag ===2)
	{
		vraag2.isOneKey = true;
		e.preventDefault();
		console.log(tekenVraag);

	}
	if(keyID === 50 && tekenVraag ===1 )
	{
		vraag1.isTwoKey = true;
		e.preventDefault();
	}
	if(keyID === 50 && tekenVraag ===2 )
	{
		vraag2.isTwoKey = true;
		e.preventDefault();
	}
	if(keyID === 51 && tekenVraag===1)
	{
		vraag1.isThreeKey = true;
		e.preventDefault();
	}
	if(keyID === 51 && tekenVraag===2)
	{
		vraag2.isThreeKey = true;
		e.preventDefault();
		console.log(tekenVraag);
	}
	

 
}

function checkKeyUp(e){
	var keyID =  e.keyCode || e.which;
	if (keyID === 38 || keyID ===87) { //38 betekent pijl omhoog,87 betekent w toets
		avatar1.isUpKey=false;
		e.preventDefault();//zorgt ervoor dat er niet gescrolled kan worden, alleen in game movements
	}
	if (keyID === 39 || keyID ===68) { 
		achtergrond1.isRightKey=false;
		e.preventDefault();
	}
	if (keyID === 40 || keyID ===83) { 
		avatar1.isDownKey=false;
		e.preventDefault();
	}
	if (keyID === 37 || keyID ===65) { 
		achtergrond1.isLeftKey=false;
		e.preventDefault();
		
	}
	if(keyID=== 27){
		achtergrond1.isEscapeKey=false;
		e.preventDefault();
	}
	if(keyID === 32){
		avatar1.isSpaceBarKey=false;
		e.preventDefault();
	}
	if(keyID === 82){
		avatar1.isRkey = false;
		e.preventDefault();
	}
	if(keyID === 69)
	{
		achtergrond1.isEkey=false;
		e.preventDefault();
	}
	
	if(keyID === 81)
	{
		vraag1.isQKey = false;
		//tekenVraag = 0;
		e.preventDefault();
	}
	if(keyID === 49)
	{
		vraag1.isOneKey = false;
		vraag2.isOneKey = false;
		e.preventDefault();
	}if(keyID === 50)
	{
		vraag1.isTwoKey = false;
		vraag2.isTwoKey=false;
		e.preventDefault();
	}
	if(keyID === 51)
	{
		vraag1.isThreeKey = false;
		vraag2.isThreeKey = false;
		e.preventDefault();
	}

 
}

//end of event functions