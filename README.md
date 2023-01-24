# Project description

This project is a hangman game build with React. 

## Game rules

Hangman is a game where a user has to make a series of guesses to accurately identify a word, chosen at random. The word is not known initially, and the user will be presented with a screen that contains a number of blank slots, each representing a space for a letter. 

As the user enters a particular letter via the keyboard, the blank slot will be replaced by the respective letter, or the user will be informed that the guess was incorrect. The word is successively revealed as the blank slots fill with letters based on the users guesses.

To win the game, the user has to accurately fill the all of the blank slots with letters to complete the letter, before reaching a total of 6 failed guesses.

## Using / testing the code

To use the app, you will first need to install dependencies using 'npm install' whilst in the app directory. Then use 'npm start' to start the application


## Components & Props

Figure is responsible for rendering the hangman graphic onto the screen, dynamically. wrongLetters is passed as a prop.

Wrongletters is responsible for assessing whether there are any wrong letters, and displaying a paragraph component if there are. It will map through each wrong letter and create a span, with comma separation where applicable. wrongLetters is passed as a prop

wrongLetters prop is managed in App.js. A useEffect hook is used to assess user entry, and append the wrong letter into a new array and update state accordingly

Instructions is responsible for displaying hangman instructions, based on an action (clicking the 'i' or cross). This will toggle visibility of the instructions

Notification will display a notification pop up, letting the user know that their entry is invalid. This is based on showNotification which is passed as a prop.

showNotification prop value is determined by if-else statements, that capture the logic of whether the user has made a valid entry

Word is responsible for taking the selectedWord as a prop, and splitting it into an array, which is then mapped through to create spaces for the letters
