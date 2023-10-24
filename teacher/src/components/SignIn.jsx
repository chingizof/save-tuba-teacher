// SignIn.js
import React from 'react';

const formContainerStyle = {
  maxWidth: '400px',
  margin: '20px auto',
  padding: '20px',
  backgroundColor: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
};

function SignIn() {
  return (
    <div style={formContainerStyle}>
      <h2>Sign In</h2>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;