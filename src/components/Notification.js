import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    // if showNotification is true, then set the class name to 'show' (this will last for 2 seconds before reverting
    // back)
    <div className={`notification-pop ${showNotification ? 'show1' : ''}`}>
      <p>Invalid</p>
    </div>
  )
}

export default Notification
