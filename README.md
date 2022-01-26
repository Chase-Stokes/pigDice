----What we will need----

utility function for rolling the die
      Math.floor((Math.random() * 6) + 1);
utility function for switching turns
      boolean 


player constructor to keep track of current/total score
      start the current and total score at 0

 2 methods for tracking score and adding current to total if player holds
      add rolls together and add to the total if they hold, or end your turn if you roll 1

method for checking for a winner
      checks current & total score to see if a player reached 100 or greater


Describe: diceRoll()

test: it will return a number between 1 and 6

code: 
      Math.floor((Math.random() * 6) + 1);
expected result:
      A number between 1-6      

Describe: new Player()

test: it will construct a variable with the properties of a current and total score

code:
      let player1 = new Player()
      player1
expected result: 
      player1= (0, 0)  

test: it will use diceRoll() and increment the current score if the roll result is not 1 and if it is a 1 reset the current score to 0

code:
       let player1 = new Player()
       player1.roll()
expected result:
        player1 = (num>1, 0)  || player1 = (0, 0)

test: it will add the current score to the total score if a player holds

code:
      let player1 = new Player()
      player1.hold()
expected result:
      player1 = (0, previous current)  

test: it will check to see if current or total is greater or equal to 100

code:
      let player1 = new Player()
      player1.checkScore()
expected result:
      "Your the winner"    

Describe: turns()

test: if a user holds or rolls a 1 it switches turns

code:

expected result: