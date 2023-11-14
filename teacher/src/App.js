import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from './components/Header';
import { SignIn } from './components/SignIn';
import { Register } from "./components/Register";
import { ProfilePage } from './components/ProfilePage';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { NoPage } from "./components/NoPage";
import './App.css';
import React from 'react';

function App() {
  const [username, setUsername] = React.useState("Chingiz");
  const [password, setPassword] = React.useState("");
  console.log(password)//deactivate warning

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home username={username} />}  />
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
        <Route path="*" element={<NoPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
