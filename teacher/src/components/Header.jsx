import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const headerStyle = {
  backgroundColor: '#fff',
  padding: '0px 0',
  display: 'flex',
  maxHeight: '100px',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '2px solid #000',
};

const LoginButton = styled(Link)`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 15px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  min-width: 90px;  /* Set a min-width property */
  text-align: center;  /* Ensure text is centered */
`;

const RegisterButton = styled(Link)`
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  border-radius: 15px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  margin-left: 3%;
  min-width: 90px;  /* Set a min-width property */
  text-align: center;  /* Ensure text is centered */
`;

const ButtonContainer = styled.div`
  margin-right: 50px;  /* This will push the ButtonContainer to the left */
  display: flex;
`;

const headerLink = {
  color: 'black', 
  textDecoration: 'none',
  fontSize: '20px'
}

export const Header = () => {
  return (
    <nav style={headerStyle}>
      <img src={"/Tuba.png"} alt="Logo" style={{ maxHeight: '100px'}} /> {/*max height - to keep logo in boundaries*/}
      <Link style={ headerLink } to="/"> Home </Link>
      <Link style={ headerLink } to="/help"> Help </Link>
      <Link style={ headerLink } to="/"> Switch Language </Link>
      
      <ButtonContainer>
        <LoginButton to="/signin">Log In</LoginButton>
        <RegisterButton to="/register">Register</RegisterButton>
      </ButtonContainer>
    </nav>
  );
}

