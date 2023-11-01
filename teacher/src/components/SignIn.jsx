// SignIn.js
import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const FormContainer = styled.div`
  width: 50%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
`;

const StyledH1 = styled.h1`
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;

const StyledH4 = styled.h4`
  margin: 10px 0 5px 0;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #555;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 5px;
`;

const SaveButton = styled.button`
  width: 100%;
  line-height: 46px;
  font-weight: 700;
  margin-top: 20px;
  padding: 10px;
  border: none;
  background-color: #2196f3;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
`;

// const formContainerStyle = {
//   maxWidth: '400px',
//   margin: '20px auto',
//   padding: '20px',
//   backgroundColor: '#fff',
//   boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   borderRadius: '8px',
// };

function SignIn({setEmail, setPassword }) {
  const [email, setEmailValue] = useState('');  
  const [password, setPasswordValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email.length === 0) {
      alert('Profile could not save!')
      return;
    } 
    alert('Profile saved successfully!')
    setEmail(email);
    navigate('/');
  }

  return (
    <Container>
      <FormContainer>
        <StyledH1>Sign In</StyledH1>
        <StyledH4>Email:</StyledH4>
        <StyledInput
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <StyledH4>Password:</StyledH4>
        <StyledInput
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <SaveButton onClick={handleSubmit}>Sign In</SaveButton>
      </FormContainer>
    </Container>
  );
}

export default SignIn;

/*
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
*/


