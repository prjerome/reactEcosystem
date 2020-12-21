import React, { useEffect, useState } from 'react'

function SecondComponent () {
  const [signIn, setSignIn] = useState('Sign in')

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => setSignIn('Signed in as')}>{signIn}</button>
    </div>
  )
}

export default SecondComponent
