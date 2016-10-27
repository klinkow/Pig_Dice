// Business logic


var roll;
var score;
var pig;
var image;
var score = 0;
var pig;

function pigDice (playerOne, playerTwo) {
this.currentPlayer = "playerOne";
this.playerOneScore = 0;
this.playerTwoScore = 0;
};

var game1 = new pigDice("playerOne", 0, 0);
document.write(game1.currentPlayer);

function endTurn() {
  if (game1.currentPlayer === "playerOne") {
  game1.playerOneScore += score;
  score = 0;
  console.log(game1.playerOneScore);
  console.log(game1.playerTwoScore);
  console.log(game1.currentPlayer);
  game1.currentPlayer = "playerTwo";
} else {
  game1.playerTwoScore += score;
  score = 0;
  console.log(game1.playerOneScore);
  console.log(game1.playerTwoScore);
  console.log(game1.currentPlayer);
  game1.currentPlayer = "playerOne";
};
};

function rollDice() {
  roll = Math.floor(Math.random() * 9014) +1000;
// add score amount to each pig text
  if (1000 <= roll && roll <= 4225) {
    score = 0;
    pig = "Pig Out (Your turn is over. It is now the next person's roll.)";
    image = "BB";
    //end turn;
  } else if (4226 <= roll && roll <= 4710) {
    score += 20;
    pig = "Double Razorback";
    image = "RR";
  } else if (4711 <= roll && roll <= 4792) {
    score += 20;
    pig = "Double Trotter";
    image = "TT";
  } else if (4793 <= roll && roll <= 4802) {
    score += 40;
    pig = "Double Snouter";
    image = "SS";
  } else if (roll === 4803) {
    score += 60;
    pig = "Double Leaning Jowler";
    image = "JJ";
  } else if (4804 <= roll && roll <= 7664) {
    score += 5;
    pig = "Razorback (plus a useless side pig)";
    image = "BR";
  } else if (7665 <= roll && roll <= 8835) {
    score += 5;
    pig = "Trotter (plus a useless side pig)";
    image = "BT";
  } else if (8836 <= roll && roll <= 9226) {
    score += 10;
    pig = "Snouter (plus a useless side pig)";
    image = "BS";
  } else if (9227 <= roll && roll <= 9357) {
    score += 15;
    pig = "Jowler (plus a useless side pig)";
    image = "BJ";
  } else if (9358 <= roll && roll <= 9753) {
    score += 10;
    pig = "Razorback plus Trotter";
    image = "RT";
  } else if (9754 <= roll && roll <= 9886) {
    score += 15;
    pig = "Razorback plus Snouter";
    image = "RS";
  } else if (9887 <= roll && roll <= 9931) {
    score += 20;
    pig = "Razorback plus Jowler";
    image = "RJ";
  } else if (9932 <= roll && roll <= 9986) {
    score += 15;
    pig = "Trotter plus Snouter";
    image = "TS";
  } else if (9987 <= roll && roll <= 10005) {
    score += 20;
    pig = "Trotter plus Jowler";
    image = "TJ";
  }  else if (10006 <= roll && roll <= 10012) {
    score += 25;
    pig = "Snouter plus Jowler";
    image = "SJ";
  } else if (roll === 10013) {
    //currentPlayer.score = 0;
    pig = "Oinker (You have gone bankrupt! It is now the next player's turn.)";
    image = "OK";
    //End turn
  } else if (roll === 10014) {
    pig = "Piggy Back (Pigs don't do that! You lose and the game is over.)";
    image = "PB";
    //End game. Display winner
  };
};






// User interface logic
$().ready(function() {
  $("button#roll-dice").click(function(event) {
    event.preventDefault();
    rollDice();
    console.log(score);
    console.log(pig);
    console.log(image);
    console.log(roll);
    $("#latestRoll").text(pig);
    if (game1.currentPlayer === "playerOne") {
      $("#player1-turnscore").text(score);
    } else if (game1.currentPlayer === "playerTwo") {
      $("#player2-turnscore").text(score);
    }
    // Jquery display image variables
  });

  $("button#end-turn").click(function(event) {
    event.preventDefault();
    endTurn();
    $("#player1-totalscore").text(game1.playerOneScore);
    $("#player2-totalscore").text(game1.playerTwoScore);
  });
});
