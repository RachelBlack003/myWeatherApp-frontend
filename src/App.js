import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.js";
import Login from './components/Login.js';
import Register from './components/Register.js'
import Weather from './components/Weather.js';
import './App.css';

//app.js is just used to set up the routes. The other js files which set up the pages
//use navigate to navigate the website.

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* temporary easy path to the weather page */}
          <Route path="/weather" element={<Weather />}/>
          {/* <Route path="/weather" element={<ProtectedRoute element={<Weather />} />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;