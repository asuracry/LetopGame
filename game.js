var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');

var canvasAvatar = document.getElementById('canvasAvatar');
var ctxAvatar = canvasAvatar.getContext('2d');

var canvasVraag = document.getElementById('canvasVraag');
var ctxVraag = canvasVraag.getContext('2d');

var canvasResultatenScherm = document.getElementById('canvasResultatenScherm');
var ctxResultatenScherm = canvasResultatenScherm.getContext('2d');

var canvasResultaat = document.getElementById('canvasResultaat');
var ctxResultaat = canvasResultaat.getContext('2d');

var canvasMenu = document.getElementById('canvasMenu');
var ctxMenu = canvasMenu.getContext('2d');

var canvasChecklist = document.getElementById('canvasChecklist');
var ctxChecklist = canvasChecklist.getContext('2d');

//var canvasAfvinken = document.getElementById('canvasAfvinken');
//var ctxAfvinken = canvasAfvinken.getContext('2d');

var vraag1;
var vraag2;
var vraag3;
var vraag4;

var checklist = 0;

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
var vraag3Beantwoord = false;
var vraag4Beantwoord = false;
var vraag5Beantwoord = false;
var vraag6Beantwoord = false;
var vraag7Beantwoord = false;
var vraag8Beantwoord = false;
var vraag9Beantwoord = false;
var vraag10Beantwoord = false;

var score = 0;


var imgVraag = new Image();
imgVraag.src = 'vragensprite.png';

var imgSprite = new Image();
imgSprite.src = 'sprite4.png';
imgSprite.addEventListener('load',init,false);

var imgStartMenu = new Image();
imgStartMenu.src = 'startmenu.png';

var imgResultatenScherm = new Image();
imgResultatenScherm.src = 'resultatenscherm.png';

var imgResultaat = new Image();
imgResultaat.src = 'cijfers.png';

var imgMenu = new Image();
imgMenu.src = 'introductie.png';

var imgChecklist = new Image();
imgChecklist.src = 'checklist.png';

//var imgAfvinken = new Image();
//imgAfvinken.src = 'menu.png';

//main functions
function init() {
	drawStartMenu();
	document.addEventListener('click',mouseClicked,false);
	
}

// functie van het opstarten en spelen van de game
function playGame(){
    startDrawing();
	
	resultaat = new Resultaat();
	avatar1 = new Avatar();
	checklist = new Checklist();
	//afvinken1 = new Afvinken();
	
	vraag1 = new Vraag();
	vraag2 = new Vraag();
	vraag3 = new Vraag();
	vraag4 = new Vraag();
	vraag5 = new Vraag();
	vraag6 = new Vraag();
	
	
	achtergrond1 = new Achtergrond();
	document.addEventListener('keydown',checkKeyDown,false);
	document.addEventListener('keyup',checkKeyUp,false);
	document.removeEventListener('click',mouseClicked,false);// zorgt ervoor dat de game niet opnieuw kan worden
}

function draw() {

	achtergrond1.draw();
	avatar1.draw();
	checklist.draw();
	//afvinken1.draw();
	drawMenu();
	
}

function startDrawing() {
    stopDrawing();
    drawInterval = setInterval(draw,fps);
}
function drawMenu(){
		ctxMenu.drawImage(imgMenu,0,0,800,600,600,500,800,600);
}

function stopDrawing() {
    clearInterval(drawInterval);
}
function drawStartMenu() {
    ctxBg.drawImage(imgStartMenu,0,0,800,600,0,0,800,600);
}

function drawResultatenScherm(){
	clearAll();
	clearCtxMenu();
	ctxResultatenScherm.drawImage(imgResultatenScherm,0,0,800,600,0,0,800,600);
	resultaat.draw();
	//console.log('Score:', score);
}


// start of clear funties

function clearCtxBg() {
	
    ctxBg.clearRect(0,0,gameWidth,gameHeight);
}

function clearCtxAvatar(){
	ctxAvatar.clearRect(0,0,gameWidth,gameHeight);
}

function clearCtxMenu(){
	ctxMenu.clearRect(0,0,800,600);
}

function clearAll(){ 
ctxBg.clearRect(0,0,3600,800);
ctxAvatar.clearRect(0,0,3600,800);
}


// end of clear functies


//end of main functions

//Avatar functions
function Avatar(){
this.srcX=0;//begintpunt van x
this.srcY=600;//begintpunt van y
this.drawX=300;//x punt waar het getekent wordt op het canvas// was eerst 300!
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

function Checklist(){
	this.srcX= 0;
	this.srcY = 0;
    this.drawX = 0;
    this.drawY = 0;
    this.width = 200;
    this.height= 250;
}


function Achtergrond(){
    this.srcX = 0;
    this.srcY = 0;
    this.drawX = 0;
    this.drawY = 0;
    this.width = 4500;
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
    
}

function Afvinken(){
	this.srcX - 0;
    this.srcY = 0;
    this.drawX =0;
    this.drawY = 0;
    this.width = 42;
    this.height= 54;
}
function Resultaat(){
	this.srcX;
    this.srcY = 0;
    this.drawX = 360;
    this.drawY = 200;
    this.width = 80;
    this.height= 70;
}

Afvinken.prototype.draw = function(){
	ctxAfvinken.drawImage(imgAfvinken,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
}
Resultaat.prototype.draw = function(){
	switch (score)
		{
			case 0:
				console.log('Je Score is 0');
				this.srcX=0;
				break;
			case 1:
				console.log('Je Score is 1');
				this.srcX = 75;
				break;
			case 2:
				console.log('Je Score is 2');
				this.srcX = 150;
				break;
			case 3:
				console.log('Je Score is 3');
				this.srcX = 225;
				break;
			case 4:
				console.log('Je Score is 4');
				this.srcX = 300;
				break;
			case 5:
				console.log('Je Score is 5');
				this.srcX = 375;
				break;
			case 6:
				console.log('Je Score is 6');
				this.srcX = 450;
				break;
			
		}
 ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
 //console.log('dat je het resultaat tekent');
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

Checklist.prototype.draw = function(){
ctxChecklist.drawImage(imgChecklist,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
}

Vraag.prototype.checkKeys= function(){
if(vraag1.isOneKey === true)//begin van koeklast
	{
	score += 1;
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag1.isTwoKey === true)
	{
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag1.isThreeKey === true)//einde van koelkast
	{
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag2.isOneKey === true)//begin tv
	{
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag2.isTwoKey === true)
	{
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag2.isThreeKey === true)//eind van tv
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	}
if(vraag3.isOneKey === true)//begin van poster
	{
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag3.isTwoKey === true)
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	}
if(vraag3.isThreeKey === true)//einde van poster
	{
	clearCtxVraag();
	tekenVraag = 0;
	
	}
if(vraag4.isOneKey === true)//begin van schilderij
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	}
if(vraag4.isTwoKey === true)
	{
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag4.isThreeKey === true)//eind van schilderij
	{
	clearCtxVraag();
	tekenVraag = 0;
	
	}
if(vraag5.isOneKey === true)//begin van game
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	}
if(vraag5.isTwoKey === true)
	{
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag5.isThreeKey === true)//eind van game
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	
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
this.checkTekenenVanVraag();
ctxAvatar.drawImage(imgSprite,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
};

function resetGame(){
 location.reload();	
}

Achtergrond.prototype.checkKeys = function() {
	if(this.isRightKey && this.drawX >= -3584) {
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
		
		tekenVraag = 2;
		vraag2Beantwoord = true;
	}
		if(this.isSpaceBarKey && achtergrond1.drawX <= -1000 && achtergrond1.drawX >= -1180 && vraag3Beantwoord === false)//berekening voor de tv vraag
	{
		tekenVraag = 3;
		vraag3Beantwoord = true;
	}
		if(this.isSpaceBarKey && achtergrond1.drawX <= -2480 && achtergrond1.drawX >= -2828 && vraag4Beantwoord === false)//berekening voor de tv vraag
	{
		tekenVraag = 4;
		vraag4Beantwoord = true;
	}
		if(this.isSpaceBarKey && achtergrond1.drawX <= -2236 && achtergrond1.drawX >= -2336 && this.drawY === 302 && vraag5Beantwoord === false)//berekening voor de tv vraag
	{
		tekenVraag = 5;
		vraag5Beantwoord = true;
	}
	
	if(this.isSpaceBarKey && achtergrond1.drawX <= -1900  && achtergrond1.drawX >=-2012 && vraag1Beantwoord === true && vraag2Beantwoord === true && 
	vraag3Beantwoord === true && vraag4Beantwoord === true && vraag5Beantwoord === true && this.drawY === 110)
	{
		drawResultatenScherm();
	}

	if(this.isRkey){
		console.log('Y:' , this.drawY);
		//console.log(this.drawX);
	}
}

Avatar.prototype.checkTekenenVanVraag = function(){

	switch(tekenVraag)
	{
	case 1:
	
		clearCtxMenu();
		vraag1.srcX = 0;
		vraag1.draw();
		
		break;
	case 2:
	
		clearCtxMenu();
		vraag2.srcX = 800;
		vraag2.draw();
		break;
	case 3:
	
		clearCtxMenu();
		vraag3.srcX = 1600;
		vraag3.draw();
		break;
	case 4:
	
		clearCtxMenu();
		vraag4.srcX = 6400;
		vraag4.draw();
		break;
	case 5:
	
		clearCtxMenu();
		vraag5.srcX = 2400;
		vraag5.draw();
		break;
	case 6:
	
		clearCtxMenu();
		vraag6.draw();
		break;
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
	if(keyID === 69){
		achtergrond1.isEkey=true;
		e.preventDefault();
	}
	if(keyID === 81){
		vraag1.isQKey = true;
		
		e.preventDefault();
	}
	if((keyID === 49 || keyID===97) && tekenVraag ===1){
		vraag1.isOneKey = true;
		e.preventDefault();

	}
	if((keyID === 49 || keyID===97) && tekenVraag ===2)
	{
		vraag2.isOneKey = true;
		e.preventDefault();

	}
		if((keyID === 49 || keyID===97) && tekenVraag ===3)
	{
		vraag3.isOneKey = true;
		e.preventDefault();

	}
	if((keyID === 49 || keyID===97) && tekenVraag ===4)
	{
		vraag4.isOneKey = true;
		e.preventDefault();

	}
		if((keyID === 49 || keyID===97) && tekenVraag ===5)
	{
		vraag5.isOneKey = true;
		e.preventDefault();

	}
	if((keyID === 50 || keyID===98) && tekenVraag ===1 ){
		vraag1.isTwoKey = true;
		e.preventDefault();
	}
	if((keyID === 50 || keyID=== 98) && tekenVraag ===2 ){
		vraag2.isTwoKey = true;
		e.preventDefault();
	}
	if((keyID === 50 || keyID=== 98) && tekenVraag ===3 ){
		vraag3.isTwoKey = true;
		e.preventDefault();
	}
	if((keyID === 50 || keyID=== 98) && tekenVraag ===4 ){
		vraag4.isTwoKey = true;
		e.preventDefault();
	}
	if((keyID === 50 || keyID=== 98) && tekenVraag ===45){
		vraag5.isTwoKey = true;
		e.preventDefault();
	}
	if((keyID === 51 || keyID=== 99) && tekenVraag===1){
		vraag1.isThreeKey = true;
		e.preventDefault();
	}
	if((keyID === 51 || keyID=== 99) && tekenVraag===2){
		vraag2.isThreeKey = true;
		e.preventDefault();
	}
		if((keyID === 51 || keyID=== 99) && tekenVraag===3){
		vraag3.isThreeKey = true;
		e.preventDefault();
	}
		if((keyID === 51 || keyID=== 99) && tekenVraag===4){
		vraag4.isThreeKey = true;
		e.preventDefault();
	}
		if((keyID === 51 || keyID=== 99) && tekenVraag===5){
		vraag5.isThreeKey = true;
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
	if(keyID === 49 || keyID === 97)
	{
		vraag1.isOneKey = false;
		vraag2.isOneKey = false;
		vraag3.isOneKey = false;
		vraag4.isOneKey = false;
		vraag5.isOneKey = false;
		e.preventDefault();
	}
	if(keyID === 50 || keyID === 98)
	{
		vraag1.isTwoKey = false;
		vraag2.isTwoKey=false;
		vraag3.isTwoKey = false;
		vraag4.isTwoKey = false;
		vraag5.isTwoKey = false;
		e.preventDefault();
	}
	if(keyID === 51 || keyID === 99)
	{
		vraag1.isThreeKey = false;
		vraag2.isThreeKey = false;
		vraag3.isThreeKey = false;
		vraag4.isThreeKey = false;
		vraag5.isThreeKey = false;
		e.preventDefault();
	}

 
}

//end of event functions