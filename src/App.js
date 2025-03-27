import React from "react";
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from "react-router-dom";
import Signup from "./component/Signup";
import NoteList from "./component/NoteList";
import Login from "./component/Login";
import './App.css';

// Signup Page Component

// NoteList Page Component

// Main App Component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/welcome" element={<NoteList/>}/>
            </Routes>
        </Router>
    );
}

export default App;


