// import { useState } from "react";

// function login(onLogin) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const handle = (e) => {
//         e.preventDefault();
//         // Dummy authentication logic
//         if (email === "gayatrikate114@gmail.com" && password === "password123") {
//             onLogin();
//         } else {
//             setError("Invalid email or password");
//         }
//     }
//     return (
//         <>
//         <div style={{maxWidth:"400px",margin:"0 auto",padding:"20px"}}>
//             <h2>Login Page</h2>
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handle}>Login</button>
//             {error && <p style={{ color: 'red' }}>{error}</p>}  
//         </div>

//         </>
//     );
// }
// export default login;

import { useState } from "react";

function Login({ onLogin }) {   // ✅ destructuring props
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handle = (e) => {
    e.preventDefault();

    if (
      email === "gayatrikate114@gmail.com" &&
      password === "password123"
    ) {
      onLogin();   // ✅ this NOW works
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handle}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '28px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
    fontWeight: '500',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '14px',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  },
  error: {
    color: '#dc3545',
    fontSize: '14px',
    marginBottom: '15px',
    textAlign: 'center',
  },
}

export default Login;
