import React from 'react';
import Register from "../component/Register.jsx";
import spex from "../assets/spex.jpg";

function RegisterPage() {
    return (
        <div className="w-full h-screen px-4 flex items-center justify-center bg-cover bg-center relative"
             style={{ backgroundImage:`url(${spex})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 opacity-80"></div>
            <div className="relative z-10 w-full max-w-md mx-auto">
                <Register />
            </div>
        </div>
    );
}

export default RegisterPage;
