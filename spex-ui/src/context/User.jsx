// UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import {toast} from "react-toastify";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");

    const fetchUserData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/user', {
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            console.log(response)
            const data = await response.json();
            setUserData(data);
            setError(null);

        } catch (error) {
            console.error('Error fetching user data:', error);
            setError('Failed to fetch user data'); // Update error state with a generic message
        }
    };




    const login = async (username, password) => {
        try {
            const response = await fetch('https://spex-drab.vercel.app/api/login', {
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
            const response = await fetch('http://localhost:5000/api/logout', {
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
