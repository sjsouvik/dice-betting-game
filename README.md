# Single dice betting game

- User starts with $100 in his balance. He is given $1 chips to play with.
- He bets on one or many of the 6 dice positions, namely: 1,2,3,4,5,6
- He can bet multiple amount of money on each dice position, e.g. $4 on 3, $9 on 6.
- A six-sided dice is rolled and if the bet and the dice role matches, the user wins twice the amount he bet on that position. If it doesn't, the user loses the amount he bet on that position.

The game runs as follows:

1. A timer starts the game. The user is given 10 seconds to make his move.

| Dice 1  | Dice 2  | Dice 3  | Dice 4  | Dice 5  | Dice 6  |
| ------- | ------- | ------- | ------- | ------- | ------- |
| Bet: $0 | Bet: $0 | Bet: $4 | Bet: $0 | Bet: $0 | Bet: $9 |

2. The user can click on each bet position. Each click will increment the bet by $1.
3. After 10 seconds, disable all positions. No more bets allowed. Wait 2 seconds and do nothing.
4. After 2 seconds, perform a random math operation between 1 to 6, and the result will be the winner.
5. Display the win move for 5 seconds and show how much the user won or lost. Update the balance accordingly.
6. Clear the board and start the step 1 again.
