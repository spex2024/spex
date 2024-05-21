// UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import {toast} from "react-toastify";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");

    const fetchUserData = async () => {
        try {
            const response = await fetch(`https://spex-api.onrender.com/api/user`, {
                credentials: 'include',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to fetch user data');
            }

            const data = await response.json();
            setUserData(data);
            setError(null);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setError(error.message);
        }
    };




    const login = async (username, password) => {
        try {
            const response = await fetch(`https://spex-api.onrender.com/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            const data = await response.json();
            setUserData(data);
            setError(null);
            fetchUserData();
            toast.success('Login successful!');
        } catch (error) {
            console.error('Error during login:', error);
            setError(error.message);
        }
    };

    const logout = async () => {
        try {
            const response = await fetch('https://spex-api.onrender.com/api/logout', {
                method: 'POST',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Failed to logout');
            }

            // Clear user data
            setUserData(null);
            setError(null);

            console.log('Logout successful');
        } catch (error) {
            console.error('Error during logout:', error);
            setError(error.message);
        }
    };

    return (
        <UserContext.Provider value={{ userData, error, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
