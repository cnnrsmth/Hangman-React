import React, { useState , useEffect } from 'react';

function checkWin(correct, wrong, word) {
  //win, if either of the two conditions below don't change status
  let status = 'win';
  // no win or loss
  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
    }
  });
  
  // Check for lose - 6 chances, so if length of wrong array is 6, then lose
  if(wrong.length === 6) status = 'lose';

  return status
}

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain, hideButton}) => {
  //create local variables for the final message and playable
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;


  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
    hideButton("btn-hide")

  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'You lose!!';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
    hideButton("btn-hide")
  }

  // run everytime we type out a letter
  useEffect(() => {
    setPlayable(playable);
  });

  return (
    // display the popup message is the finalMessage isn't blank
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        {/* trigger a re-run by setting the playAgain to true (via execution of associated function) */}
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup
