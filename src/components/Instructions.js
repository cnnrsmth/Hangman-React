import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useState } from 'react';

const Instructions = ({ showInstruction , instructionsVisibility }) => {
  const [updateClass, setupdateClass] = useState("appear");

  return (
    <div className={`notification-container ${showInstruction ? 'appear' : 'disappear'}`}>
      <FontAwesomeIcon className="inst-btn" onClick={instructionsVisibility} icon={faCircleXmark} />
      <div>
        <p>Hangman is a game where a user has to make a series of guesses to accurately identify a word, chosen at random. The word is not known initially, and the user will be presented with a screen that contains a number of blank slots, each representing a space for a letter.</p>
        <br></br>
        <p>As the user enters a particular letter via the keyboard, the blank slot will be replaced by the respective letter, or the user will be informed that the guess was incorrect. The word is successively revealed as the blank slots fill with letters based on the users guesses.</p>
        <br></br>
        <p>To win the game, the user has to accurately fill the all of the blank slots with letters to complete the letter, before reaching a total of 6 failed guesses.</p>
      </div>
    </div>
  )
}

export default Instructions
