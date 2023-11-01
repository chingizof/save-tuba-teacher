import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/Tuba.png';

const headerStyle = {
  backgroundColor: '#fff',
  padding: '0px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '2px solid #000',
};

const Title = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding-left: 10px;
  font-size: 48px;
  font-weight: bold;
  font-family: 'Pacifico', cursive;
  margin-top: 20px;
`;

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


function Header() {
  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', width: '74%' }}>
        <Title to="/">
          <img src={logo} alt="Logo" style={{ height: '100px' }} />
        </Title>
      </div>
      
      <ButtonContainer>
        <LoginButton to="/signin">Log In</LoginButton>
        <RegisterButton to="/register">Register</RegisterButton>
      </ButtonContainer>
    </header>
  );
}

export default Header;
//react-icons/fa
//styled-components