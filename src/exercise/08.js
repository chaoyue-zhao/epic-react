// Controlled Forms
// http://localhost:3000/isolated/exercise/08.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add state here for the `username` using React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    // 🐨 this change is not required, but since we're controlling the username
    // state ourselves anyway, we know what the value is without having to
    // reach through the form's elements, so you can pass `username` here instead
    onSubmitUsername(event.target.elements.usernameInput.value)
  }

  // 🐨 add an event handler here called `handleChange` which accepts the event
  // and calls setUsername with the lower case version of the input's value
  // 💰 event.target.value.toLowerCase()

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          // 🐨 add an onChange prop here and pass `handleChange`
          // 🐨 set the value here to the `username` state
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default App
