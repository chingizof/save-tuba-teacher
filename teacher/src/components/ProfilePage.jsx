import React from 'react';
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


const FileInput = styled.input`
  margin-top: 10px;
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

function ProfilePage({setUsername}) {
  const [user,setUser] = React.useState(""); 
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("SUII")
    }
  };

  const handleSubmit = () => {
    if (user.length === 0) {
      alert('Profile could not save!')
      return;
    } 
    alert('Profile saved successfully!')
    setUsername(user);
    navigate('/');
  }

  return (
    <Container>
      <FormContainer>
        <StyledH1>Edit Profile</StyledH1>
        <div>
            <StyledH4>Edit Photo</StyledH4>
            <FileInput type="file" onChange={handleFileUpload} />
        </div>
        <StyledH4>Username</StyledH4>
        <StyledInput
          type="text"
          placeholder="Enter your username"
          maxLength="20"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <StyledH4>First Name</StyledH4>
        <StyledInput
          type="text"
          placeholder="Enter your first name"
          maxLength="20"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <StyledH4>Last Name</StyledH4>
        <StyledInput
          type="text"
          placeholder="Enter your last name"
          maxLength="20"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <StyledH4>School Name</StyledH4>
        <StyledInput
          type="text"
          placeholder="Enter your school name"
          maxLength="20"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        {/* Add other form fields as needed */}
        <SaveButton onClick={handleSubmit}>Save</SaveButton>
      </FormContainer>
    </Container>
  );
}

export default ProfilePage;