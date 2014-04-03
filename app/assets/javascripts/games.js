$(document).ready(function(){
  var letter;
  var turn = 0;
  var winningCombos = [
    ["#sq0","#sq4","#sq8"],
    ["#sq2","#sq4","#sq6"],
    ["#sq0","#sq1","#sq2"],
    ["#sq3","#sq4","#sq5"],
    ["#sq6","#sq7","#sq8"],
    ["#sq0","#sq3","#sq6"],
    ["#sq1","#sq4","#sq7"],
    ["#sq2","#sq5","#sq8"]
  ];
  var gameIsOver = false;
  
  $(".square").on("click", move);
  
  function move() {
    if (gameIsOver) {
      alert("Game is over");
    } else {
      letter = "X";
      if (moveIsValid(this)) {
        $(this).text("X");
        turn++;
        findWinner();
        computerMove();
        findWinner();
      }
    }
  }
  
  function moveIsValid(square) {
    if ($(square).text()) {
      alert("You can't go there");
      return false;
    } else {
      return true;
    }
  }
  
  function computerMove() {
    if (!gameIsOver) {
      letter = "O";
      if (determineTwoInARowWin()) {
        return true;
      } else if (determineTwoInARowBlock()) {
        return true;
      } else if (turn == 1) {
        turn1();
      } else if (makeTwoInARow()) {
        return true;
      } else if (!makeAnyMove()) {
        $("#winner_text p").text("Cat's Game");
        $("#winner_text").css("background-color", "#ccc");
        gameIsOver = true;
      }
    }
  }
  
  function determineTwoInARowWin() {
    for (var i = 0; i < winningCombos.length; i++) {
      var a = winningCombos[i][0];
      var b = winningCombos[i][1];
      var c = winningCombos[i][2];
      
      if        ($(a).text() == "O" && $(b).text() == "O" && !$(c).text()) {
        $(c).text("O");
        return true;
      } else if ($(b).text() == "O" && $(c).text() == "O" && !$(a).text()) {
        $(a).text("O");
        return true;
      } else if ($(c).text() == "O" && $(a).text() == "O" && !$(b).text()) {
        $(b).text("O");
        return true;
      }
    }
    return false;
  }
  
  function determineTwoInARowBlock() {
    for (var i = 0; i < winningCombos.length; i++) {
      var a = winningCombos[i][0];
      var b = winningCombos[i][1];
      var c = winningCombos[i][2];
      
      if        ($(a).text() == "X" && $(b).text() == "X" && !$(c).text()) {
        $(c).text("O");
        return true;
      } else if ($(b).text() == "X" && $(c).text() == "X" && !$(a).text()) {
        $(a).text("O");
        return true;
      } else if ($(c).text() == "X" && $(a).text() == "X" && !$(b).text()) {
        $(b).text("O");
        return true;
      }
    }
    return false;
  }
  
  function turn1() {
    if ($("#sq4").text()) {
      $("#sq0").text("O");
    } else {
      $("#sq4").text("O");
    }
  }
  
  function makeTwoInARow() {
    for (var i = 0; i < winningCombos.length; i++) {
      var a = winningCombos[i][0];
      var b = winningCombos[i][1];
      var c = winningCombos[i][2];
      
      if ($(a).text() == "O" && !$(b).text() && !$(c).text()) {
        $(c).text("O");
        return true;
      } else if (!$(a).text() && $(b).text() == "O" && !$(c).text()) {
        $(a).text("O");
        return true;
      } else if (!$(a).text() && !$(b).text() && $(c).text() == "O") {
        $(a).text("O");
        return true;
      }
    }
    return false;
  }
  
  function makeAnyMove() {
    for (var i = 0; i < 9; i++) {
      if (!$("#sq" + i).text()) {
        $("#sq" + i).text("O");
        return true;
      }
    }
    return false;
  }
  
  function findWinner (){
    for (var i = 0; i < winningCombos.length; i++) {
      var a = winningCombos[i][0];
      var b = winningCombos[i][1];
      var c = winningCombos[i][2];
      
      if ($(a).text() == letter && $(b).text() == letter && $(c).text() == letter) {
        $("#winner_text p").text("Winner is " + letter);
        $("#winner_text").css("background-color", "#ccc");
        gameIsOver = true;
      }
    }
  }
  
  function saveGame (){
    
  }
});
