import React from 'react'

const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className="wrong-letters-container">
      <div>
        {/* add paragraph 'wrong' where wrongLetters has more than 0 elements */}
        {wrongLetters.length > 0 && 
          <p>Wrong</p>
        }
        {/* map over each letter in wrong letters, and add the letter to UI, each should have a comma separating */}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
    </div>
  )
}

export default WrongLetters
