function dice(){
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var diceNumber1 = "images/dice"+randomNumber1+".png";
var diceNumber2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src", diceNumber1);
document.querySelector(".img2").setAttribute("src", diceNumber2);

var namePlayer1;
namePlayer1 = document.querySelector("#player1").value;
var namePlayer2;
namePlayer2 = document.querySelector("#player2").value;
var playerOneWins = namePlayer1+" Wins! 🚩";
var playerTwoWins = namePlayer2+" Wins! 🚩";
var draw = "Draw 😐"

if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML = playerOneWins
} else if (randomNumber1 < randomNumber2) {
  document.querySelector(".container h1").innerHTML = playerTwoWins;
} else {
  document.querySelector(".container h1").innerHTML = draw;
}

}