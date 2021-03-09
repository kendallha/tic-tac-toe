# Tic-Tac-Toe Final Solo Project

## Contributors:
* [Kendall Haworth](https://github.com/kendallha)

## Technologies Used:
* Vanilla JavaScript
* HTML
* CSS
* localStorage

## Walkthrough:

* Upon page load, a new 2-player game is automatically started.
  <img width="1000" height="500" src="./assets/Screen Shot 2021-03-09 at 9.41.28 AM.png">
* The middle section header shows who's turn it is. Click anywhere on the tic-tac-toe grid to place a token. Tokens can only
  be placed in empty squares.
* If either player places 3 tokens in a row, the header will update to declare the winner. The player's score will update to  reflect the win.
 ![GIF showing player 1 (octopus) winning a game](https://media.giphy.com/media/3fgZ75t3bR5d9bZlZa/giphy.gif)
* If the board is filled without either player placing 3 tokens in a row, the header will update to declare the game a draw.
 ![GIF demonstrating a tie game](https://media.giphy.com/media/TrgVF0acPCz82fxyLA/giphy.gif)
* Once a winner or a draw is declared, a timeout starts to reset the game board and begin a new game. Tokens cannot be
  added during this timeout.
* Player scores are visible in the left and right hand columns, and are carried through the start of a new game and page refresh.

## Learning Goals:
* The project assignment can be found [here](https://frontend.turing.io/projects/module-1/tic-tac-toe-solo.html)
  * Solidify and demonstrate your understanding of:
    * DRY JavaScript
    * localStorage to persist data
    * event delegation to handle similar event listeners
  * Understand the difference between the data model and how the data is displayed on the DOM
  * Iterate through/filter DOM elements using for loops
  * Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on  an outside “answer” to a logical challenge

## Road Map:
* Save copies of winning game boards under each player's score
* Mobile Version
* Allow players to choose their token
