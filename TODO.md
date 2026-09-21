## Feature 1: Starting & Moving
- [X] 1.1 A new game starts with Player 1 and Player 2 on Square 1
- [ ] 1.2 Given Player 1 is on Square 1, when they roll a 4, they land on Square 5
- [ ] 1.3 Given Player 1 is on Square 1, when they roll a 3 and then a 4, they land on Square 8
- [ ] A new game is in progress with no winner

## Feature 2: Winning the Game
- [ ] 2.1 Given Player 1 is on Square 97, when they roll a 3, they land on Square 100 and Player 1 wins
- [ ] 2.2 Given Player 1 is on Square 97, when they roll a 4, they bounce back to Square 99
- [ ] 2.3 Given a player has won, further turns are ignored
- [ ] A turn that doesn't reach 100 leaves the game in progress
- [ ] Bounce boundaries: 99 + 1 → 100, 99 + 6 → 95, 95 + 6 → 99

## Feature 3: Turns & Multiple Players
- [ ] 3.1 After Player 1 rolls, it is Player 2's turn
- [ ] 3.2 After Player 2 rolls, the turn returns to Player 1
- [ ] 3.3 Player 1 rolling a 3 doesn't change Player 2's square

## Board (from General Rules)

- [ ] The board starts at Square 1
- [ ] The board ends at Square 100
- [ ] The game is won by landing on the board's final square 

## Dice

- [ ] The die always rolls a whole number from 1 to 6
- [ ] The die can roll every face from 1 to 6