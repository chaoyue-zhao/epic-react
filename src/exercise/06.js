// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)

  const [errorState, setErrorState] = React.useState(null)
  const [inputValue, setInputValue] = React.useState('')

  const handleChange = () => {
    const inputValue = inputRef.current.value
    setInputValue(inputValue.toLowerCase())

    const isValid = inputValue === inputValue.toLowerCase()
    !isValid
      ? setErrorState('Input needs to be lowercase!')
      : setErrorState(null)
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      {errorState && <p role="alert">{errorState}</p>}
      <button type="submit" disabled={!errorState}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
