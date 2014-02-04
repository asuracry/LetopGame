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



//var canvasAfvinken = document.getElementById('canvasAfvinken');
//var ctxAfvinken = canvasAfvinken.getContext('2d');




  

var helpIsDrawn = false;

var vraag1;
var vraag2;
var vraag3;
var vraag4;

var magHelpTekenen = 1;
var remove = 0;
var vragenFout= 0;

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
var vraag11Beantwoord = false;
var vraag12Beantwoord = false;

var score = 0;
var telefoonIsGetekend;


var imgVraag = new Image();
imgVraag.src = 'vragen.png';

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
imgMenu.src = 'introductie.png';

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



var sound = new Audio('music.mp3');
//sound.play();


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

function drawResultatenScherm(){
	clearAll();
	clearCtxMenu();
	ctxResultatenScherm.drawImage(imgResultatenScherm,0,0,800,600,0,0,800,600);
	resultaat.draw();
	//console.log('Score:', score);
}

function drawTelefoon(){
	ctxTelefoon.drawImage(imgTelefoon,0,0,800,600,0,0,800,600);
	telefoonIsGetekend = 1;
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
	ctxHand.clearRect(0,0,800,600);
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
    this.height= 70;
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
this.updateCoors();
clearCtxHand();
this.checkKeys();

ctxHand.drawImage(imgHand,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
avatar1.checkTekenenVanVraag();
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
Resultaat.prototype.draw = function()
{
	switch (score)
		{
			case 0:
				console.log('Je Score is 0');
				this.srcX=0;
				 ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
				break;
			case 1:
				console.log('Je Score is 1');
				this.srcX = 75;
				 ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
				break;
			case 2:
				console.log('Je Score is 2');
				this.srcX = 150;
				 ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
				break;
			case 3:
				console.log('Je Score is 3');
				this.srcX = 225;
				 ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
				break;
			case 4:
				console.log('Je Score is 4');
				this.srcX = 300;
				 ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
				break;
			case 5:
				console.log('Je Score is 5');
				this.srcX = 375;
				 ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
				break;
			case 6:
				console.log('Je Score is 6');
				this.srcX = 450;
				 ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
				break;
		}
			switch (vragenFout)
				{
			case 0:
			
				this.srcX=0;
				this.drawY = 320;
				ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
				break;
			case 1:
			
				this.srcX = 75;
				this.drawY = 320;
					 ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
				break;
			case 2:
				
				this.srcX = 150;
				this.drawY = 320;
				 ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
				break;
			case 3:
			
				this.srcX = 225;
				this.drawY = 320;
					 ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
				break;
			case 4:
		
				this.srcX = 300;
				this.drawY = 320;
						 ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
				break;
			case 5:
				
				this.srcX = 375;
				this.drawY = 320;
				 ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
				break;
			case 6:
				 
				this.srcX = 450;
				this.drawY = 320;
				ctxResultaat.drawImage(imgResultaat,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
				break;
			
				}
		
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
if(vraag1.isOneKey === true)//begin van koeklast
	{
	score += 1;
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag1.isTwoKey === true || vraag1.isThreeKey === true)
	{
	vragenFout +=1;
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag2.isOneKey === true || vraag2.isTwoKey === true)//begin tv
	{
	vragenFout +=1;
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag2.isThreeKey === true)//eind van tv
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	}
if(vraag3.isOneKey === true || vraag3.isThreeKey === true)//begin van poster
	{
	vragenFout += 1;
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag3.isTwoKey === true)//einde van de poster
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	}
if(vraag4.isOneKey === true)//begin van schilderij
	{
	clearCtxVraag();
	tekenVraag = 0;
	score += 1;
	}
if(vraag4.isTwoKey === true || vraag4.isThreeKey === true)
	{
	vragenFout += 1;
	clearCtxVraag();
	tekenVraag = 0;
	}
if(vraag5.isOneKey === true || vraag5.isTwoKey === true)//begin van game
	{
	vragenFout += 1;
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
	
}

function drawChecklist()
{
	ctxTelefoon
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
	if(this.isSpaceBarKey === true && this.drawX >= 270 && this.drawX <= 310 && this.drawY >= 170 && this.drawY <= 190 && vraag10Beantwoord === false)// berekening voor de knop van de eerste telefoon vraag
	{
		tekenVraag = 10;
		vraag10Beantwoord = true;
		//console.log('telefoon vraag 1');
	}
		if(this.isSpaceBarKey === true && this.drawX >= 370 && this.drawX <= 410 && this.drawY >= 170 && this.drawY <= 190 && vraag11Beantwoord === false)// berekening voor de knop van de tweede telefoon vraag
		{
			tekenVraag = 11;
			vraag11Beantwoord = true;
		
			//console.log('telefoon vraag 2');
		}
	if(this.isSpaceBarKey === true && this.drawX >= 490 && this.drawX <=530 && this.drawY >= 170 && this.drawY <= 190 && vraag12Beantwoord === false)//berekening voor de knop van de derde telefoon vraag
		{
			tekenVraag = 12;
			vraag12Beantwoord = true;
		}
	if(this.isSpaceBarKey === true && this.drawX >=250 && this.drawX <= 530  && this.drawY >= 230 && this.drawY <= 290)// berekening voor de knop van de checklist
	{
		checklist.draw();
	}
	if(this.isSpaceBarKey === true && this.drawX >=250 && this.drawX <= 530  && this.drawY >= 330 && this.drawY <= 390)//berekening voor de knop van het sluiten
	{
		console.log('sluiten');
	}
	if(this.isSpaceBarKey === true && this.drawX >=430 && this.drawX <= 530  && this.drawY === 90 )//berkening voor de home knop
	{
		ctxTelefoon.clearRect(0,0,800,600);
		ctxChecklist.clearRect(0,0,800,600);
		drawTelefoon();
	}
}
Avatar.prototype.checkKeys = function(){
	if(this.isUpKey &&this.topY > 50){
		this.drawY -= this.speed;
	}
	if(this.isDownKey && this.bottomY < 490){
		this.drawY += this.speed;
	}
	if(this.isSpaceBarKey && achtergrond1.drawX <= -544 && achtergrond1.drawX >= -632 && vraag1Beantwoord === false)//berekening voor de koelkast vraag
	{
		vraag1.srcX = 0;
		tekenVraag = 1;
		vraag1Beantwoord = true;
	}
	if(this.isSpaceBarKey && achtergrond1.drawX <= -96 && achtergrond1.drawX >= -348 && vraag2Beantwoord === false)//berekening voor de computer vraag
	{
		
		tekenVraag = 2;
		vraag2Beantwoord = true;
	}
		if(this.isSpaceBarKey && achtergrond1.drawX <= -1124 && achtergrond1.drawX >= -1328 && this.drawY <= 77 &&  vraag3Beantwoord === false)//berekening voor de bank vraag
	{
		tekenVraag = 3;
		vraag3Beantwoord = true;
	}
		if(this.isSpaceBarKey && achtergrond1.drawX <=-3124 && achtergrond1.drawX >= -3204 && vraag4Beantwoord === false)//berekening voor de knuffel vraag
	{
		tekenVraag = 4;
		vraag4Beantwoord = true;
	}
		if(this.isSpaceBarKey && achtergrond1.drawX <= -2076 && achtergrond1.drawX >= -2444 && this.drawY === 50 && vraag5Beantwoord === false)//berekening voor het familie portret
	{
		tekenVraag = 5;
		vraag5Beantwoord = true;
	}
	if(this.isSpaceBarKey && achtergrond1.drawX <= -1460 && achtergrond1.drawX >= -1492 && this.drawY === 50 && vraag6Beantwoord === false)//berekening voor de prullebak
	{
		tekenVraag = 6;
		vraag6Beantwoord = true;
	}
	if(this.isSpaceBarKey && achtergrond1.drawX <= -1868 && achtergrond1.drawX >= -1892 && this.drawY === 50 && vraag7Beantwoord === false)//berekening voor de agenda
	{
		tekenVraag = 7;
		vraag7Beantwoord = true;
	}
	if(this.isSpaceBarKey && achtergrond1.drawX <= -3400 && achtergrond1.drawX >= -3460 && this.drawY === 50)// berekening voor de hond
		{
				console.log('woef');
		}
	
	if(this.isSpaceBarKey && achtergrond1.drawX <= -1900  && achtergrond1.drawX >=-2012 && vraag1Beantwoord === true && vraag2Beantwoord === true && 
	vraag3Beantwoord === true && vraag4Beantwoord === true && vraag5Beantwoord === true && this.drawY === 110)
	{
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
	
	case 10: //telefoon vraag 1
	clearCtxHand();
	vraag10.srcX = 8000;
	vraag10.draw();
	break;
	
	case 11: //telefoon vraag 2
	clearCtxHand();
	vraag11.srcX = 8800;
	vraag11.draw();
	break;
	
	case 12: //telefoonvraag 3
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


function checkKeyDown(e){
	var keyID = e.keyCode || e.which;
	if (keyID === 38 || keyID ===87) { //38 betekent pijl omhoog,87 betekent w toets
		if(telefoonIsGetekend === 1)
		{
			hand.isUpKey= true;
			hand.draw();
				e.preventDefault();
			
		}
		else{
		avatar1.isUpKey=true;
		e.preventDefault();//zorgt ervoor dat er niet gescrolled kan worden, alleen in game movements
		console.log('avatar omhoog');
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
				console.log('poppetje naar rechts');
				achtergrond1.isRightKey=true;
				e.preventDefault();
			}
	}
	if (keyID === 40 || keyID ===83) { 
	 if(telefoonIsGetekend === 1)
		{
			hand.isDownKey = true;
			hand.draw();
			e.preventDefault();
		}
		else{
		avatar1.isDownKey=true;
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
			e.preventDefault();
		}
	}
	if(keyID=== 27){
		achtergrond1.isEscapeKey=true;
		e.preventDefault();
	}
	if(keyID === 32){
		if(telefoonIsGetekend === 1)
		{
			hand.isSpaceBarKey=true;
			hand.draw();
			e.preventDefault();
		}
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
	if((keyID === 50 || keyID=== 98) && tekenVraag ===5){
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
		if(keyID === 84)
		{
		drawTelefoon();
		hand.draw();
			   e.preventDefault();
		}
	

 
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