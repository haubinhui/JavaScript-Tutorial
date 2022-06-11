//Left side player(1)
var randomNumber = Math.floor(Math.random()*6)+1;
var pictureSource="images/dice"+randomNumber+".png";
document.getElementsByClassName("img1")[0].src=pictureSource;



//Right side player(2)
var randomNumber2 = Math.floor(Math.random()*6)+1;
var pictureSource2="images/dice"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].src=pictureSource2;



//Header modification
var headerText;
if (randomNumber === randomNumber2){
  headerText = "Draw!"
} else if (randomNumber > randomNumber2){
  headerText = "&#128681 Player 1 Wins!"
} else {
  headerText = "Player 2 Wins! &#128681"
}
document.getElementsByTagName("h1")[0].innerHTML = headerText;
