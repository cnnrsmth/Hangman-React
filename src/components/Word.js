import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {
//pull in the selectedWord and correctLetters from App as destructured props
  return (
    <div className="word">
      {/* map through each of the letters in the selected word and create a span to be styled on the UI */}
      {selectedWord.split('').map((letter, i) => (
        <span className="letter" key={i}>
            {/* Display letters, when user enters a correct letter */}
            {correctLetters.includes(letter) ? letter : ''}
        </span>
      ))}
    </div>
  )
}

export default Word
