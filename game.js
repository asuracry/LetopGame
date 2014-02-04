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

var canvasHelp = document.getElementById('canvasHelp');
var ctxHelp = canvasHelp.getContext('2d');

var canvasTelefoon = document.getElementById('canvasHelp');
var ctxTelefoon = canvasTelefoon.getContext('2d');

var canvasText = document.getElementById('canvasText');
var ctxText = canvasText.getContext('2d');


var canvasTelefoon = document.getElementById('canvasTelefoon');
var ctxTelefoon= canvasTelefoon.getContext('2d');

var canvasHand = document.getElementById('canvasHand');
var ctxHand = canvasHand.getContext('2d');

//var canvasF11 = document.getElementById('canvasF11');
//var ctxF11 =  canvasF11.getContext('2d');

//var canvasAfvinken = document.getElementById('canvasAfvinken');
//var ctxAfvinken = canvasAfvinken.getContext('2d');




  

var helpIsDrawn = false;
var vraagIsGetekend = false;
var vraag1;
var vraag2;
var vraag3;
var vraag4;
 
 var magHandTekenen = false;
var magHelpTekenen = 1;
var remove = 0;
var vragenFout= 0;
var keyMCount =0;
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
var muziek = true;

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
var vraag11Beantwoord = false;
var vraag12Beantwoord = false;

var score = 0;
var telefoonIsGetekend =0;

var telefoonIsDrawn = false;
var imgVraag = new Image();
imgVraag.src = 'vragen2.png';

var imgSprite = new Image();
imgSprite.src = 'spritedefinitief.png';
imgSprite.addEventListener('load',init,false);

var imgStartMenu = new Image();
imgStartMenu.src = 'startmenu.png';

var imgResultatenScherm = new Image();
imgResultatenScherm.src = 'resultatenscherm.png';

var imgResultaat = new Image();
imgResultaat.src = 'cijfers.png';

var imgMenu = new Image();
imgMenu.src = 'introductie3.png';

var imgChecklist = new Image();
imgChecklist.src = 'telefoonchecklist.png';

var imgTelefoon = new Image();
imgTelefoon.src = 'telefoon.png';

var imgHelpMenu = new Image();
imgHelpMenu.src = 'helpmenu.png';

var imgText = new Image();
imgText.src = 'tekst.png';

var imgBot = new Image();
imgBot.src = 'bot.png';

var imgHand = new Image();
imgHand.src = 'cartoonhand.png';

var imgTelefoonSms = new Image();
imgTelefoonSms.src = 'telefoonsms.png';

var imgHelpMenu2 = new Image();
imgHelpMenu2.src = 'helpmenu2.png';

var imgF11 = new Image();
imgF11.src = 'f11.png';


var sound = new Audio('muziek.mp3');

var checklistGetekend = false;

var introductie = true;
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
	
	text = new Text();
	resultaat = new Resultaat();
	avatar1 = new Avatar();
	checklist = new Checklist();
	hand = new Hand();
	//afvinken1 = new Afvinken();
	
	vraag1 = new Vraag();
	vraag2 = new Vraag();
	vraag3 = new Vraag();
	vraag4 = new Vraag();
	vraag5 = new Vraag();
	vraag6 = new Vraag();
	vraag7 = new Vraag();
	vraag8 = new Vraag();
	vraag9 = new Vraag();
	vraag10 = new Vraag();
	vraag11 = new Vraag();
	vraag12 = new Vraag();
	
	
	achtergrond1 = new Achtergrond();
	document.addEventListener('keydown',checkKeyDown,false);
	document.addEventListener('keyup',checkKeyUp,false);
	document.removeEventListener('click',mouseClicked,false);// zorgt ervoor dat de game niet opnieuw kan worden
}

function draw() {
	
	achtergrond1.draw();
	avatar1.draw();
	//afvinken1.draw();
	drawMenu();
	//drawBot();
	//text.draw();
	//sound.play();
	}
	

//function drawBot(){
//console.log('bot tekenen');
//ctxBot.drawImage(imgBot,0,0,400,400,100,302,400,400);
//}
function startDrawing() {
    stopDrawing();
    drawInterval = setInterval(draw,fps);
}
function drawMenu(){
		ctxMenu.drawImage(imgMenu,0,0,800,600,600,600,800,600);
	
}

function stopDrawing() {
    clearInterval(drawInterval);
}
function drawStartMenu() {
    ctxBg.drawImage(imgMenu,0,0,800,600,0,0,800,600);
}

//function drawF11(){
	//ctxF11.drawImage(imgF11,0,0,93,88,729,533,93,88);
//}
function drawResultatenScherm(){
	clearAll();
	clearCtxMenu();
	ctxResultatenScherm.drawImage(imgResultatenScherm,0,0,800,600,0,0,800,600);
	ctxResultaat.clearRect(0,0,800,600);
	ctxResultaat.font = '40px verdana';
	ctxResultaat.fillStyle = 'white';

	if(score >= 0 || score <= 3)
	{ 
			ctxResultaat.clearRect(0,0,800,600);
			ctxResultaat.fillText('Aantal vragen goed:  ' + score, 120, 150);
			ctxResultaat.fillText('Aantal vragen fout:	' + vragenFout, 120, 200);
			ctxResultaat.font = '30px verdana';
			ctxResultaat.fillStyle = 'white';
			ctxResultaat.fillText("Let op!, je bent zeer gevoelig voor fraude", 120, 300);
			ctxResultaat.fillText("op social media.", 120, 330); 
			ctxResultaat.fillText("Verbreed je kennis op de site of de app!", 120, 360);
	}
	if(score >= 4 && score <= 6)
	{
			ctxResultaat.clearRect(0,0,800,600);
			ctxResultaat.fillText('Aantal vragen goed:  ' + score, 120, 150);
			ctxResultaat.fillText('Aantal vragen fout:	' + vragenFout, 120, 200);
			ctxResultaat.font = '30px verdana';
			ctxResultaat.fillStyle = 'white';
			ctxResultaat.fillText("Let op!, je bent gevoelig voor fraude", 120, 300);
			ctxResultaat.fillText("op social media.", 120, 330); 
			ctxResultaat.fillText("Verbreed je kennis op de site of de app!", 120, 360);
	}
	if(score >= 7 && score <=8)
	{
			ctxResultaat.clearRect(0,0,800,600);
			ctxResultaat.fillText('Aantal vragen goed:  ' + score, 120, 150);
			ctxResultaat.fillText('Aantal vragen fout:	' + vragenFout, 120, 200);
			ctxResultaat.font = '30px verdana';
			ctxResultaat.fillStyle = 'white';
			ctxResultaat.fillText("Je hebt redelijke kennis over social media", 120, 300);
			ctxResultaat.fillText("en de fraude daarvan", 120, 330); 
			ctxResultaat.fillText("Wel kan je jou kennis verbreden " ,120, 360);
			ctxResultaat.fillText("op de site of de app!", 120, 390);
	}
	if(score === 9 || score === 10)
	{
			ctxResultaat.clearRect(0,0,800,600);
			ctxResultaat.fillText('Aantal vragen goed:  ' + score, 120, 150);
			ctxResultaat.fillText('Aantal vragen fout:	' + vragenFout, 120, 200);
			ctxResultaat.fillText("Je hebt voldoende kennis over social media", 120, 300);
			ctxResultaat.fillText("en de fraude daarvan", 120, 330); 
			ctxResultaat.fillText("Blijf wel op de hoogte via de site of app " ,120, 360);
			ctxResultaat.fillText("Goed gedaan!", 120, 390);
	}
	if(score === 11)
	{
			ctxResultaat.clearRect(0,0,800,600);
			ctxResultaat.fillText('Aantal vragen goed:  ' + score, 120, 150);
			ctxResultaat.fillText('Aantal vragen fout:	' + vragenFout, 120, 200);
			ctxResultaat.fillText("Je hebt kennis over social media,", 120, 300);
			ctxResultaat.fillText("de fraude daarvan en hoe je dit", 120, 330); 
			ctxResultaat.fillText("moet voorkomen! " ,120, 360);
			ctxResultaat.fillText("Goed gedaan!", 120, 390);
	}
		if(score === 12)
	{
			ctxResultaat.clearRect(0,0,800,600);
			ctxResultaat.fillText('Aantal vragen goed:  ' + score, 120, 150);
			ctxResultaat.fillText('Aantal vragen fout:	' + vragenFout, 120, 200);
			ctxResultaat.fillText("De perfecte score.", 120, 300);
			ctxResultaat.fillText("Wij hoeven jou niks meer te", 120, 330); 
			ctxResultaat.fillText("leren of bij te brengen! ", 120, 390);
	}
}

function drawTelefoon(){

if(telefoonIsGetekend === 0)
{
	ctxTelefoon.drawImage(imgTelefoon,0,0,800,600,0,0,800,600);
	

	//resultaat.draw();
	
	hand.draw();
	telefoonIsGetekend = 1;
}
	
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

function clearCtxHand(){
	ctxHand.clearRect(0,0,36000000,36000000);
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
this.width=90;//breedte van de char
this.height=190;//hoogte van de char
this.speed = 3;
this.isUpKey = false;
this.isRightKey = false;
this.isDownKey = false;
this.isLeftKey = false;
this.isEscapeKey=false;
this.isSpaceBarKey=false;
this.isRkey=false;
this.isMKey = false;
this.leftX = this.drawX;
this.rightX = this.drawX + this.width;
this.topY = this.drawY;
this.bottomY = this.drawY + this.height;
this.laden = false;



}

function Text()
{
	this.srcX = 200;
	this.srcY = 0;
    this.drawX =0;
    this.drawY = 0;
    this.width = 200;
    this.height= 186 ;
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
	this.achtergrondRight = false;
	this.achtergrondLeft 	 = false;
    
}

function clearCtxTelefoon()
{
	ctxTelefoon.clearRect(0,0,800,600);
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
    this.drawX =  530;
    this.drawY = 200;
    this.width = 80;
    this.height= 100;
}

function Hand(){
	this.srcX= 0;
    this.srcY = 0;
	this.speed = 3;
    this.drawX =  510;
    this.drawY = 330;
    this.width = 27;
    this.height= 30;
	this.isUpKey = false;
	this.isRightKey = false;
	this.isDownKey = false;
	this.isLeftKey = false;
	this.isEscapeKey=false;
	this.isSpaceBarKey=false;
	this.isRkey=false;
}

function  removeEventListener()
	{
		document.removeEventListener('keydown',checkKeyDown,false);
		document.removeEventListener('keyup',checkKeyUp,false);

	}	

function drawHelpMenu() {
	if(magHelpTekenen === 1)
	{
	ctxHelp.drawImage(imgHelpMenu,0,0,800,600,0,0,800,600);
	helpIsDrawn = true;
	}

}
function drawPreviousPage(){
	ctxHelp.clearRect(0,0,gameWidth,gameHeight);
	ctxHelp.drawImage(imgHelpMenu,0,0,800,600,0,0,800,600);
}

function drawNextPage(){
	ctxHelp.clearRect(0,0,gameWidth,gameHeight);
	ctxHelp.drawImage(imgHelpMenu,800,0,800,600,0,0,800,600);
}

Hand.prototype.draw = function(){

if(magHandTekenen = true)
{
	this.updateCoors();
	clearCtxHand();
	this.checkKeys();

	ctxHand.drawImage(imgHand,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
	//avatar1.checkTekenenVanVraag();
	//console.log('hand tekenen');
}
if(magHandTekenen = false)
{
	ctxHand.clearRect(0,0,800,600);
}
}



Text.prototype.draw = function(){
	switch(tekstnumer)
	{
		//case 0: 
	}
 ctxText.drawImage(imgText,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
}

Afvinken.prototype.draw = function(){
	ctxAfvinken.drawImage(imgAfvinken,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
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

Hand.prototype.updateCoors = function(){
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
ctxChecklist.drawImage(imgChecklist,0,0,800,600,0,0,800,600);
}

Vraag.prototype.checkKeys= function(){
if(vraag1.isThreeKey === true)//begin van koeklast
	{
	score += 1;
	clearCtxVraag();
	tekenVraag = 0;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag1Beantwoord = true;
	}
if(vraag1.isOneKey === true || vraag1.isTwoKey === true)
	{
	vragenFout +=1;
	clearCtxVraag();
	tekenVraag = 0;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag1Beantwoord = true;
	}
if(vraag2.isThreeKey === true || vraag2.isTwoKey === true)//begin tv
	{
	vragenFout +=1;
	clearCtxVraag();
	tekenVraag = 0;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag2Beantwoord = true;
	}
if(vraag2.isOneKey === true)//eind van tv
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag2Beantwoord = true;
	}
if(vraag3.isOneKey === true || vraag3.isThreeKey === true)//begin van poster
	{
	vragenFout += 1;
	clearCtxVraag();
	tekenVraag = 0;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag3Beantwoord = true;
	}
if(vraag3.isTwoKey === true)//einde van de poster
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag3Beantwoord = true;
	}
if(vraag4.isThreeKey === true)//begin van schilderij
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag4Beantwoord = true;
	}
if(vraag4.isTwoKey === true || vraag4.isOneKey === true)
	{
	vragenFout += 1;
	clearCtxVraag();
	tekenVraag = 0;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag4Beantwoord = true;
	}
if(vraag5.isOneKey === true || vraag5.isTwoKey === true)//begin van game
	{
	vragenFout += 1;
	clearCtxVraag();
	tekenVraag = 0;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag5Beantwoord = true;
	}
if(vraag5.isThreeKey === true)//eind van game
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag5Beantwoord = true;
	}
if(vraag6.isTwoKey === true || vraag6.isThreeKey === true)//begin van prullebak
	{
	vragenFout += 1;
	clearCtxVraag();
	tekenVraag = 0;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag6Beantwoord = true;
	}
if(vraag6.isOneKey === true)//eind van prullebak
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag6Beantwoord = true;
	}
if(vraag7.isOneKey === true || vraag7.isThreeKey === true)//begin van agenda
	{
	vragenFout += 1;
	clearCtxVraag();
	tekenVraag = 0;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag7Beantwoord = true;
	}
if(vraag7.isTwoKey === true)//eind van agenda
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag7Beantwoord = true;
	}
	
if(vraag8.isOneKey === true)//begin van game
	{
	vragenFout += 1;
	clearCtxVraag();
	tekenVraag = 0;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag8Beantwoord = true;
	}
if(vraag8.isTwoKey === true)//eind van game
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag8Beantwoord = true;
	}
if(vraag9.isOneKey === true || vraag9.isTwoKey === true)//begin van hond & bed
	{
	vragenFout += 1;
	clearCtxVraag();
	tekenVraag = 0;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag9Beantwoord = true;
	}
if(vraag9.isThreeKey === true)//eind van hond & bed
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag9Beantwoord = true;
	}


if(vraag10.isTwoKey === true)
	{	
		
		clearCtxVraag();
		tekenVraag = 0;
		score += 1;
		console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag10Beantwoord = true;
		
	}
if(vraag10.isOneKey === true || vraag10.isThreeKey == true)
	{
		vragenFout += 1;
		clearCtxVraag();
		tekenVraag = 0;
		console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag10Beantwoord = true;
	}
if(vraag11.isThreeKey === true)
	{	
		clearCtxVraag();
		tekenVraag = 0;
		score += 1;
		console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag11Beantwoord = true;
		
	}
if(vraag11.isOneKey === true || vraag11.isTwoKey == true)
	{
		vragenFout += 1;
		clearCtxVraag();
		tekenVraag = 0;
		console.log('score:', score);
	console.log('fout:', vragenFout);
	vraag11Beantwoord = true;
	}
if(vraag12.isOneKey === true)
	{	
		clearCtxVraag();
		tekenVraag =0;
		score += 1;
		console.log('score:', score);
		vraag12Beantwoord = true;
	console.log('fout:', vragenFout);
		
	}
if(vraag12.isTwoKey === true || vraag12.isThreeKey == true)
	{
		vragenFout += 1;
		clearCtxVraag();
		tekenVraag = 0;
		console.log('score:', score);
		vraag12Beantwoord = true;
	console.log('fout:', vragenFout);
	}
	



}

function clearCtxHand(){
ctxHand.clearRect(0,0,800,600);
}
function telefoonSluiten(){
telefoonIsGetekend = 3;
clearCtxTelefoon();
clearCtxHand();

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
	if(this.isRightKey && this.drawX >= -3656) {
		this.drawX -= this.speed;
		achtergrondRight = true;
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
		console.log('avatarX:', this.drawX);
		console.log('handX:', hand.drawX);
	}
	if(telefoonIsGetekend === 3)
	{
		clearCtxHand(0,0,800,600);
		}
	
}


Hand.prototype.checkKeys = function(){
	if(this.isRightKey && this.drawX <= 516) {
		this.drawX += 20;
	}
	if(this.isLeftKey  && this.drawX >= 258)
	{
		this.drawX -= 20;
	}	
		if(this.isUpKey && this.drawY >= 78){
		this.drawY -= 20;
	}
	if(this.isDownKey && this.drawY <= 462){
		this.drawY += 20;
	}
	if(this.isSpaceBarKey === true && this.drawX >= 270 && this.drawX <= 310 && this.drawY >= 170 && this.drawY <= 190 && vraag10Beantwoord === false  && checklistGetekend === false)// berekening voor de knop van de eerste telefoon vraag
	{
		tekenVraag = 10;
		//vraag10Beantwoord = true;


	}
		if(this.isSpaceBarKey === true && this.drawX >= 370 && this.drawX <= 410 && this.drawY >= 170 && this.drawY <= 190 && vraag11Beantwoord === false && checklistGetekend === false)// berekening voor de knop van de tweede telefoon vraag
		{
			tekenVraag = 11;
			//vraag11Beantwoord = true;
		
			//console.log('telefoon vraag 2');
		}
	if(this.isSpaceBarKey === true && this.drawX >= 490 && this.drawX <=530 && this.drawY >= 170 && this.drawY <= 190 && vraag12Beantwoord === false && checklistGetekend === false)//berekening voor de knop van de derde telefoon vraag
		{
			tekenVraag = 12;
			
		}
	if(this.isSpaceBarKey === true && this.drawX >=250 && this.drawX <= 530  && this.drawY >= 230 && this.drawY <= 290 && checklistGetekend === false)// berekening voor de knop van de checklist
	{
	
		checklist.draw();
		checklistGetekend = true;
		//console.log(checklistGetekend);
	}
	if(this.isSpaceBarKey === true && this.drawX >=250 && this.drawX <= 530  && this.drawY >= 330 && this.drawY <= 390 && checklistGetekend === false)//berekening voor de knop van het sluiten
	{
		telefoonSluiten();
		//console.log('sluiten');
		
	}
	if(this.isSpaceBarKey === true && this.drawX >=430 && this.drawX <= 530  && this.drawY === 90 )//berkening voor de home knop
	{
		checklistGetekend = false;
		ctxChecklist.clearRect(0,0,800,600);
		//drawTelefoon();
	}
		if(this.isSpaceBarKey === true && this.drawX >=250 && this.drawX <= 290  && this.drawY >= 90 && this.drawY <= 130 && checklistGetekend === false  )//berkening voor de berichten knop
	{
		checklistGetekend = true;
		ctxChecklist.clearRect(0,0,800,600);
		ctxChecklist.drawImage(imgTelefoonSms,0,0,800,600,0,0,800,600);
	}

	
	
}
Avatar.prototype.checkKeys = function(){
	if(this.isUpKey &&this.topY > 83){
		this.drawY -= this.speed;
	}
	if(this.isDownKey && this.bottomY < 490){
		this.drawY += this.speed;
	}
	if(this.isSpaceBarKey && achtergrond1.drawX <= -540 && achtergrond1.drawX >= -704 && vraag1Beantwoord === false && this.drawY === 83)//berekening voor de koelkast vraag
	{
		vraag1.srcX = 0;
		tekenVraag = 1;
		//vraag1Beantwoord = true;
	}
	if(this.isSpaceBarKey && achtergrond1.drawX <= -96 && achtergrond1.drawX >= -348 && vraag2Beantwoord === false && this.drawY === 83 )//berekening voor de computer vraag
	{
		
		tekenVraag = 2;
		//vraag2Beantwoord = true;
	}
		if(this.isSpaceBarKey && achtergrond1.drawX <= -1029 && achtergrond1.drawX >= -1348 && this.drawY <= 83 &&  vraag3Beantwoord === false)//berekening voor de bank vraag
	{
		tekenVraag = 3;
		//vraag3Beantwoord = true;
	}
		if(this.isSpaceBarKey && achtergrond1.drawX <=-3124 && achtergrond1.drawX >= -3204 && vraag4Beantwoord === false)//berekening voor de giraffe vraag
	{
		tekenVraag = 4;
		//vraag4Beantwoord = true;
	}
		
		if(this.isSpaceBarKey && achtergrond1.drawX <= -2032 && achtergrond1.drawX >= -2392 && this.drawY === 83 && vraag5Beantwoord === false)//berekening voor het familie portret
	{
		tekenVraag = 5;
		//vraag5Beantwoord = true;
	}
	if(this.isSpaceBarKey && achtergrond1.drawX <= -1444 && achtergrond1.drawX >= -1524 && this.drawY === 83 && vraag6Beantwoord === false)//berekening voor de prullebak
	{
		tekenVraag = 6;
		//vraag6Beantwoord = true;
	}
	if(this.isSpaceBarKey && achtergrond1.drawX <= -1820 && achtergrond1.drawX >= -1924 && this.drawY === 83 && vraag7Beantwoord === false)//berekening voor de agenda
	{
		tekenVraag = 7;
		//vraag7Beantwoord = true;
	}
	if(this.isSpaceBarKey && achtergrond1.drawX <=-3020 && achtergrond1.drawX >= -3092 && vraag8Beantwoord === false)//berekening voor de beer vraag
	{
		tekenVraag = 8;
		//vraag8Beantwoord = true;
	}
	if(this.isSpaceBarKey && achtergrond1.drawX <= -3496 && achtergrond1.drawX >= -3648 && this.drawY === 83 && vraag9Beantwoord === false)// berekening voor de hond
		{
		tekenVraag = 9;
		//vraag9Beantwoord = true;
		}
	if(this.isSpaceBarKey && achtergrond1.drawX <= -2686 && achtergrond1.drawX >= -2760 && this.drawY === 83 )// berekening voor de telefoon
		{

			drawTelefoon();
		}
	if(muziek === true)
		{
				sound.play();
		}
	   if(muziek === false)
		{
			sound.pause();
		}
	

	
	if(this.isSpaceBarKey && achtergrond1.drawX <= -1900  && achtergrond1.drawX >=-2012 && vraag1Beantwoord === true && vraag2Beantwoord === true && 
	vraag3Beantwoord === true && vraag4Beantwoord === true && vraag5Beantwoord === true && this.drawY === 110)
	{
		drawResultatenScherm();
	}
	if(vraag1Beantwoord && vraag2Beantwoord && vraag3Beantwoord && vraag4Beantwoord && vraag5Beantwoord && vraag6Beantwoord && vraag7Beantwoord && vraag8Beantwoord && vraag9Beantwoord && vraag10Beantwoord && vraag11Beantwoord && vraag12Beantwoord)
	{
		console.log('klaar');
		drawResultatenScherm();
	}

	if(this.isRkey){
		
		console.log('avatarY:' , this.drawY);
		console.log('handY:' , hand.drawY);
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
		vraag4.srcX = 4800;
		vraag4.draw();
		break;
	case 5:
	
		clearCtxMenu();
		vraag5.srcX = 2400;
		vraag5.draw();
		break;
	case 6://prullebak
	
		clearCtxMenu();
		vraag6.srcX = 6400;
		vraag6.draw();
		break;
	
	case 7: //agenda
	clearCtxMenu();
	vraag7.srcX = 3200;
	vraag7.draw();
	break;
	
	case 8: //beer
	clearCtxMenu();
	vraag8.srcX = 4000;
	vraag8.draw();
	break;
	
	case 9: //hond & bed
	clearCtxMenu();
	vraag9.srcX = 7200;
	vraag9.draw();
	break;
	
	case 10: //telefoon vraag 1, juiste antwoord is 2
	clearCtxHand();
	vraag10.srcX = 8000;
	vraag10.draw();
	break;
	
	case 11: //telefoon vraag 2, juiste antwoord is  3
	clearCtxHand();
	vraag11.srcX = 8800;
	vraag11.draw();
	break;
	
	case 12: //telefoonvraag 3, juiste antwoord is 1
	clearCtxHand();
	vraag12.srcX = 5600;
	vraag12.draw();
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

function introductie(){
	ctxHelp.drawImage(imgHelpMenu2,0,0,800,600,0,0,800,600);

}

function checkKeyDown(e){
	var keyID = e.keyCode || e.which;
	if (keyID === 38 || keyID ===87) { //38 betekent pijl omhoog,87 betekent w toets
	if(helpIsDrawn === true)
	{
		e.preventDefault();
	}
	else	if(telefoonIsGetekend === 1)
		{
			hand.isUpKey= true;
			hand.draw();
				e.preventDefault();
			
		}
		else{
		avatar1.isUpKey=true;
			telefoonIsGetekend = 0;
		e.preventDefault();//zorgt ervoor dat er niet gescrolled kan worden, alleen in game movements
		//console.log('avatar omhoog');
		}
	}
	if (keyID === 39 || keyID ===68) //rechter pijl of d key
	{ 
		if(helpIsDrawn === true)
			{
			//console.log('volgende pagina');
			drawNextPage();
			e.preventDefault();
			}
		else if(telefoonIsGetekend === 1){
			hand.isRightKey = true;
			hand.draw();
				e.preventDefault();
			}
		else
			{
				//console.log('poppetje naar rechts');
				achtergrond1.isRightKey=true;
				telefoonIsGetekend = 0;
				e.preventDefault();
			}
	}
	if (keyID === 40 || keyID ===83) { 
	if(helpIsDrawn === true)
	{
		e.preventDefault();
	}
	else if(telefoonIsGetekend === 1)
		{
			hand.isDownKey = true;
			hand.draw();
			e.preventDefault();
		}
		else{
		avatar1.isDownKey=true;
			telefoonIsGetekend = 0;
		e.preventDefault();
		}
	}
	if (keyID === 37 || keyID ===65) { //linker pijl en a toets
		if(helpIsDrawn === true)
			{
			//console.log('volgende pagina');
			drawPreviousPage();
				e.preventDefault();
			}
		else if(telefoonIsGetekend === 1)
		{
			hand.isLeftKey=true;
			hand.draw();
				e.preventDefault();
		}
		else
		{
			achtergrond1.isLeftKey=true;
				telefoonIsGetekend = 0;
			e.preventDefault();
		}
	}
	if(keyID=== 27){
		achtergrond1.isEscapeKey=true;
		e.preventDefault();
	}
	if(keyID === 32){
	if(helpIsDrawn === true)
	{
		e.preventDefault();
	}
		else if(telefoonIsGetekend === 1)
		{
			hand.isSpaceBarKey=true;
			hand.draw();
			e.preventDefault();
		}
		else{
		avatar1.isSpaceBarKey=true;
		e.preventDefault();
		}
	}
	if(keyID ===77)
	{
		avatar1.isMKey = true;
		keyMCount ++;
		console.log(keyMCount);
		if(keyMCount % 2 === 1)
		{
			console.log('oneven');
			muziek = false;
		}
		if(keyMCount % 2 ===0)
		{
			console.log('even');
			muziek = true;
		}
	
	
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
			if((keyID === 49 || keyID===97) && tekenVraag ===6)
	{
		vraag6.isOneKey = true;
		e.preventDefault();

	}
			if((keyID === 49 || keyID===97) && tekenVraag ===7)
	{
		vraag7.isOneKey = true;
		e.preventDefault();

	}
			if((keyID === 49 || keyID===97) && tekenVraag ===8)
	{
		vraag8.isOneKey = true;
		e.preventDefault();

	}
			if((keyID === 49 || keyID===97) && tekenVraag ===9)
	{
		vraag9.isOneKey = true;
		e.preventDefault();

	}
			if((keyID === 49 || keyID===97) && tekenVraag ===10)
	{
		vraag10.isOneKey = true;
		e.preventDefault();

	}
			if((keyID === 49 || keyID===97) && tekenVraag ===11)
	{
		vraag11.isOneKey = true;
		e.preventDefault();

	}
			if((keyID === 49 || keyID===97) && tekenVraag ===12)
	{
		vraag12.isOneKey = true;
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
	if((keyID === 50 || keyID=== 98) && tekenVraag ===5){
		vraag5.isTwoKey = true;
		e.preventDefault();
	}
		if((keyID === 50 || keyID=== 98) && tekenVraag ===6){
		vraag6.isTwoKey = true;
		e.preventDefault();
	}
		if((keyID === 50 || keyID=== 98) && tekenVraag ===7){
		vraag7.isTwoKey = true;
		e.preventDefault();
	}
		if((keyID === 50 || keyID=== 98) && tekenVraag ===8){
		vraag8.isTwoKey = true;
		e.preventDefault();
	}
		if((keyID === 50 || keyID=== 98) && tekenVraag ===9){
		vraag9.isTwoKey = true;
		e.preventDefault();
	}
		if((keyID === 50 || keyID=== 98) && tekenVraag ===10){
		vraag10.isTwoKey = true;
		e.preventDefault();
	}
		if((keyID === 50 || keyID=== 98) && tekenVraag ===11){
		vraag11.isTwoKey = true;
		e.preventDefault();
	}
		if((keyID === 50 || keyID=== 98) && tekenVraag ===12){
		vraag12.isTwoKey = true;
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
	if((keyID === 51 || keyID=== 99) && tekenVraag===6){
		vraag6.isThreeKey = true;
		e.preventDefault();
	}
	if((keyID === 51 || keyID=== 99) && tekenVraag===7){
		vraag7.isThreeKey = true;
		e.preventDefault();
	}
	if((keyID === 51 || keyID=== 99) && tekenVraag===8){
		vraag8.isThreeKey = true;
		e.preventDefault();
	}
	if((keyID === 51 || keyID=== 99) && tekenVraag===9){
		vraag9.isThreeKey = true;
		e.preventDefault();
	}
	if((keyID === 51 || keyID=== 99) && tekenVraag===10){
		vraag10.isThreeKey = true;
		e.preventDefault();
	}
	if((keyID === 51 || keyID=== 99) && tekenVraag===11){
		vraag11.isThreeKey = true;
		e.preventDefault();
	}
	if((keyID === 51 || keyID=== 99) && tekenVraag===12){
		vraag12.isThreeKey = true;
		e.preventDefault();
	}
		if(keyID === 122){//f11
		switch(magHelpTekenen)
		{
			case(0):
			ctxHelp.clearRect(0,0,800,600);
			magHelpTekenen = 1;
			helpIsDrawn = false;
			break;
			
			case(1):
			drawHelpMenu();
			magHelpTekenen = 0;
			break;
		}

	   e.preventDefault();
	}
	//	if(keyID === 84){// t key
		//	if(telefoonIsGetekend === 0)
		//	{
			// magHandTekenen = false;
			//drawTelefoon();
			//e.preventDefault();
			//telefoonIsGetekend = 1;
			//}
	//	if(telefoonIsGetekend === 1)
		//{
		//magHandTekenen = true;
		//hand.draw();
		//}
		//}
	
		
	

 
}

function checkKeyUp(e){
	var keyID =  e.keyCode || e.which;
	if (keyID === 38 || keyID ===87) { //38 betekent pijl omhoog,87 betekent w toets
		avatar1.isUpKey=false;
		hand.isUpKey=false;
		e.preventDefault();//zorgt ervoor dat er niet gescrolled kan worden, alleen in game movements
	}
	if (keyID === 39 || keyID ===68) { 
		achtergrond1.isRightKey=false;
		hand.isRightKey = false;
		e.preventDefault();
	}
	if (keyID === 40 || keyID ===83) { 
		avatar1.isDownKey=false;
		hand.isDownKey = false;
		e.preventDefault();
	}
	if (keyID === 37 || keyID ===65) { //linker pijl
		achtergrond1.isLeftKey=false;
		hand.isLeftKey = false;
		e.preventDefault();
		
	}
	if(keyID=== 27){
		achtergrond1.isEscapeKey=false;
	
		e.preventDefault();
	}
	if(keyID === 32){
		avatar1.isSpaceBarKey=false;
			hand.isSpaceBarKey = false;
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
	if(keyID ===77)
	{
		avatar1.isMKey = false;
		e.preventDefault();
	}
	
	if(keyID === 81)
	{
		vraag1.isQKey = false;
		//tekenVraag = 0;
		e.preventDefault();
	}
	if(keyID === 49 || keyID === 97)// 1 en num 1
	{
		vraag1.isOneKey = false;
		vraag2.isOneKey = false;
		vraag3.isOneKey = false;
		vraag4.isOneKey = false;
		vraag5.isOneKey = false;
		vraag6.isOneKey = false;
		vraag7.isOneKey = false;
		vraag8.isOneKey = false;
		vraag9.isOneKey = false;
		vraag10.isOneKey = false;
		vraag11.isOneKey = false;
		vraag12.isOneKey = false;
		e.preventDefault();
		
	}
	if(keyID === 50 || keyID === 98)
	{
		vraag1.isTwoKey = false;
		vraag2.isTwoKey=false;
		vraag3.isTwoKey = false;
		vraag4.isTwoKey = false;
		vraag5.isTwoKey = false;
		vraag6.isTwoKey = false;
		vraag7.isTwoKey = false;
		vraag8.isTwoKey = false;
		vraag9.isTwoKey = false;
		vraag10.isTwoKey = false;
		vraag11.isTwoKey = false;
		vraag12.isTwoKey = false;
									
		e.preventDefault();
	}
	if(keyID === 51 || keyID === 99)
	{
		vraag1.isThreeKey = false;
		vraag2.isThreeKey = false;
		vraag3.isThreeKey = false;
		vraag4.isThreeKey = false;
		vraag5.isThreeKey = false;
		vraag6.isThreeKey = false;
		vraag7.isThreeKey = false;
		vraag8.isThreeKey = false;
		vraag9.isThreeKey = false;
		vraag10.isThreeKey = false;
		vraag11.isThreeKey = false;
		vraag12.isThreeKey = false;
		e.preventDefault();
	}
		if(keyID === 122)//f11
	{
		e.preventDefault();
	}
	if(keyID === 84)
	{
		e.preventDefault();
	}
		
 
}
//end of event functions
//end of comments