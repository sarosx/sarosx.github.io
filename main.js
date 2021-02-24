var player1 = [];
var player2 = [];

var activePlayer = 1;

function buttonClick(clickedID) {
  if (activePlayer == 1) {
    document.getElementById(clickedID).innerHTML = "X";
    player1.push(clickedID);
    activePlayer = 2;
    disableButton();
  } else {
    document.getElementById(clickedID).innerHTML = "O";
    player2.push(clickedID);
    activePlayer = 1;
    disableButton();
  }
  function disableButton() {
    var button = document.getElementById(clickedID);
    button.disabled = true;
  }

  checkWinner();
}

function checkWinner() {
  var winner = 0;

  if (player1.includes("1") && player1.includes("2") && player1.includes("3")) {
    var winner = 1;
  }
  if (player2.includes("1") && player2.includes("2") && player2.includes("3")) {
    var winner = 2;
  }
  if (player1.includes("4") && player1.includes("5") && player1.includes("6")) {
    var winner = 1;
  }
  if (player2.includes("4") && player2.includes("5") && player2.includes("6")) {
    var winner = 2;
  }
  if (player1.includes("7") && player1.includes("8") && player1.includes("9")) {
    var winner = 1;
  }
  if (player2.includes("7") && player2.includes("8") && player2.includes("9")) {
    var winner = 2;
  }
  if (player1.includes("1") && player1.includes("5") && player1.includes("9")) {
    var winner = 1;
  }
  if (player2.includes("1") && player2.includes("5") && player2.includes("9")) {
    var winner = 2;
  }
  if (player1.includes("3") && player1.includes("5") && player1.includes("7")) {
    var winner = 1;
  }
  if (player2.includes("3") && player2.includes("5") && player2.includes("7")) {
    var winner = 2;
  }
  if (player1.includes("2") && player1.includes("5") && player1.includes("8")) {
    var winner = 1;
  }
  if (player2.includes("2") && player2.includes("5") && player2.includes("8")) {
    var winner = 2;
  }
  if (player1.includes("1") && player1.includes("4") && player1.includes("7")) {
    var winner = 1;
  }
  if (player2.includes("1") && player2.includes("4") && player2.includes("7")) {
    var winner = 2;
  }
  if (player1.includes("3") && player1.includes("6") && player1.includes("9")) {
    var winner = 1;
  }
  if (player2.includes("3") && player2.includes("6") && player2.includes("9")) {
    var winner = 2;
  }

  if (winner != 0) {
    if (winner == 1) {
      document.getElementById("winner").innerHTML = "Player 1 Won!";
    }
    if (winner == 2) {
      document.getElementById("winner").innerHTML = "Player 2 Won!";
    }
  }
}
