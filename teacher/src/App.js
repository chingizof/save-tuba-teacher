import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import SignIn from './components/SignIn';
import Register from "./components/Register";
import ProfilePage from './components/ProfilePage';
import './App.css';
import React from 'react';

function App() {
  const [username, setUsername] = React.useState("");
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<ProfilePage setUsername={setUsername}/>} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
