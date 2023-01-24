import React from 'react'
import step1 from '../images/43980.png'

const Figure = ({ wrongLetters }) => {

  // how many wrong letters we have
  const errors = wrongLetters.length

  return (
    <svg height="250" width="200" className="figure-container">
      {/* <!-- Rod --> */}
      {/* always display */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* <!-- Head --> */}
      {/* display when there's more than 0 errors */}
      {errors > 0 &&
        <circle cx="140" cy="70" r="20" />
      }
      {/* <!-- Body --> */}
      {/* display when there's more than 1 error */}
      {errors > 1 &&
        <line x1="140" y1="90" x2="140" y2="150" />
      }
      {/* <!-- Arms --> */}
      {/* display when there's more than 2 errors */}
      {errors > 2 &&
        <line x1="140" y1="120" x2="120" y2="100" />
      }
      {/* display when there's more than 3 errors */}
      {errors > 3 &&
        <line x1="140" y1="120" x2="160" y2="100" />
      }
      {/* <!-- Legs --> */}
      {/* display when there's more than 4 errors */}
      {errors > 4 &&
        <line x1="140" y1="150" x2="120" y2="180" />
      }
      {/* display when there's more than 5 errors (i.e. complete the hangman illustration)*/}
      {errors > 5 &&
        <line x1="140" y1="150" x2="160" y2="180" />
      }
    </svg>
  )
}

export default Figure
