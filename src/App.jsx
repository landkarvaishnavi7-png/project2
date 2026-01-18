import { useState } from 'react'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSignup, setIsSignup] = useState(false)

  return (
    <div>
      {isLoggedIn ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>Welcome, you are logged in!</p>
          <button onClick={() => setIsLoggedIn(false)} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Logout
          </button>
        </div>
      ) : isSignup ? (
        <div>
          <Signup />
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <p>Already have an account? <button onClick={() => setIsSignup(false)} style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}>Login here</button></p>
          </div>
        </div>
      ) : (
        <div>
          <Login onLogin={() => setIsLoggedIn(true)} />
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <p>Don't have an account? <button onClick={() => setIsSignup(true)} style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}>Sign up here</button></p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

