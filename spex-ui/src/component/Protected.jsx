import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/User.jsx';

const Protected = ({ element }) => {
    const { userData } = useContext(UserContext);
    const isAuthenticated = userData && userData.token;
     console.log(isAuthenticated);
    return isAuthenticated ? element : <Navigate to="/" />;
};

export default Protected;