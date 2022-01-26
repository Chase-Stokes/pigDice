function diceRoll() {
  let roll =Math.floor((Math.random() * 6) + 1);
  return roll;
}

function Player(){
  this.p1CurrentScore = 0;
  this.p2CurrentScore = 0;
  this.p1TotalScore = 0;
  this.p2TotalScore = 0;
  this.p1 = true;
  this.p2 = false;
}

Player.prototype.roll = function () {
  let roll = diceRoll()
  console.log(roll)
  if (roll != 1 && this.p1 === true){
    this.p1CurrentScore += roll;
  } else if (roll != 1 && this.p2 === true) {
    this.p2CurrentScore += roll;
  }else {
    this.currentScore = 0;
    this.p1 = !this.p1;
    this.p2 = !this.p2;
  }
}

Player.prototype.hold = function() {
  if (this.p1 === true) {
    this.p1TotalScore += this.p1CurrentScore;
    this.p1CurrentScore = 0;
  } else if (this.p2 === true){
    this.p2TotalScore += this.p2CurrentScore;
    this.p2CurrentScore = 0;
  }
  // this.checkScore();
}

Player.prototype.checkScore = function() {
  if (this.p1TotalScore >= 100) {
    return "PLAYER ONE WINS";
  } else if (this.p2TotalScore >= 100) {
    return "PLAYER TWO WINS";
  }
}


$(document).ready(function() {
  let player = new Player();
  $("#p1Roll").on("click", function() {
    player.roll();
    if (player.p1 === false) {
      $(".player1").toggle();
      $(".player2").show();
    }
    $(".p1Current").text(player.p1CurrentScore);
  });
  $("#p2Roll").on("click", function() {
    player.roll();
    if (player.p2 === false) {
      $(".player2").toggle();
      $(".player1").show();
    }
    $(".p2Current").text(player.p2CurrentScore);
  });
  $("#p1Hold").on("click", function() {
      player.hold();
      $(".player1").toggle();
      $(".player2").show();
      $(".p1Total").text(player.p1TotalScore);
  });
  $("#p2Hold").on("click", function() {
      player.hold();
    $(".player2").toggle();
    $(".player1").show();
    $(".p2Total").text(player.p2TotalScore);
  });

  
  
  
})