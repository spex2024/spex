// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from "./pages/Dashboard.jsx";
import Register from "./pages/Register.jsx";
import { UserContext } from "./context/User.jsx";

function App() {
    const { userData } = useContext(UserContext);

    const ProtectedRoute = ({ element }) => {
        return userData ? element : <Navigate to="/" replace />;
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
