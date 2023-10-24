import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import SignIn from './components/SignIn';
import Register from "./components/Register";
import ProfilePage from './components/ProfilePage';
import Home from './components/Home';
import './App.css';
import React from 'react';

function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" elements={<Home />} username={username} />
        <Route 
          path="/signin" 
          element={
            <SignIn 
              setUsername={setUsername}
              setPassword={setPassword}
         />
        }  
        />
        <Route path="/profile" element={<ProfilePage setUsername={setUsername}/>} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
