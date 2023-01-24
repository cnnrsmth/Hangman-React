import React, { useState, useEffect } from 'react';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import Instructions from './components/Instructions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


import './App.css';

//words to be used in the application
const words = ['hyperion', 'coding', 'javascript', 'react'];
//select randomly from the array of words (to be used in a given round)
let selectedWord = words[Math.floor(Math.random() * words.length)];

function show(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

function App() {
  const [playable, setPlayable] = useState(true);
  // set state for correctLetters to keep track through gameplay, and pass as props
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  // state for showing notification. initially false as we don't want it to show by default
  const [showNotification, setShowNotification] = useState(false);
  const [showInstruction, setShowInstruction] = useState("");

  const [showButton, setShowButton] = useState("show")

  // useEffect to prevent an event listener being added everytime the app reloads
  useEffect(() => {
    const handleKeydown = event => {
      // destructure the parameters of the event
      const { key, keyCode } = event;
      // code 65 - 90 represents any valid keyboard stroke from aA - zZ
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        // if the letter provided by the user is included in the string of the word, and they haven't already provided
        // the letter, then update accordingly
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            // update the state of currentLetters by passing a callback function to the set function, and returning 
            // the new state, which is the current letters, with the addition of a new letter
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
              // execute show function, passing the setter function to it
            show(setShowNotification);
          }
        } else {
          // similar to setCorrectLetters, but this time for wrong letters
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      } else{
        // if it's not a letter, then show notification
        show(setShowNotification);
      }
    }
    // add the event listener, and use it to trigger the handleKeydown function, which subsequently updates state
    // depending on the users input
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
    // the useEffect will run the callback only when there'san update to correctLetters, wrongLetters, and playable
    // this prevents the app running on every refresh, or only once during start of app
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    //reset game and show restart button
    setPlayable(true);
    setShowButton("show")

    // Empty the state when a user wants to play again
    setCorrectLetters([]);
    setWrongLetters([]);

    // grab another random word
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

   function instructionsVisibility(){
    setShowInstruction(!showInstruction)
   }

  return (
    <>
      <div>
        <WrongLetters wrongLetters={wrongLetters} />
      </div>
      <div className="container">
        <div className="game-container">
          {/* pass wrongLetters as props to the figure to display each part of the hangman svg in seqeunce */}
          <Figure wrongLetters={wrongLetters} />
          {/* pass wrongLetters as props to wrongLetters */}
          {/* pass selected word and correctLetters as props to Word to display each correct letter to screen */}
          <Notification showNotification={showNotification} />
          <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        </div>
        {/* pop up displays whether we've won or not, and as such needs all state to be passed to it to determine this */}
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} hideButton={setShowButton}/>
        {/* notification is a component of the app, which is passed the showNotification prop. When the showNotification
        prop is 'true' it'll pass true, and the notification will render, otherwise it'll be hidden. This will re-render
        every time it's triggered by the useEffect hook above */}
        <div className="instbtn-container">
          <button onClick={playAgain} className={`${showButton} restart-btn`}>Restart</button>
          <FontAwesomeIcon className={`${showButton} info-btn`} onClick={instructionsVisibility} icon={faInfoCircle} />
        </div>
        <Instructions showInstruction={showInstruction} instructionsVisibility={instructionsVisibility} />
      </div>
    </>

  );
}

export default App;
