// src/context/UserContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            setUser({ token }); // You might want to decode the token to get user info
        }
    }, []);

    const login = (token) => {
        setUser({ token });
        Cookies.set('token', token, { expires: 1 });
    };

    const logout = () => {
        setUser(null);
        Cookies.remove('token');
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
