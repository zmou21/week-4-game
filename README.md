# week-4-game
Crystal Collector's Game using jQuery

Rules of the game:

1- There will be four crystals displayed as buttons on the page. 
2- The player will be shown a random number at the start of the game.
3- When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
	Your game will hide this amount until the player clicks a crystal.
	When they do click one, update the player's score counter.

4- The player wins if their total score matches the random number from the beginning of the game.
	The player loses if their score goes above the random number.

5- The game restarts whenever the player wins or loses.

Option 1 Game design notes

The random number shown at the start of the game should be between 19 - 120.
Each crystal should have a random hidden value between 1 - 12.