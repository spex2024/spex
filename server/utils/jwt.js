import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

 const generateToken = (user) =>{
    const payload ={
        id: user.id,
        username: user.username,
        role: user.role,

    }
    return jwt.sign(payload, process.env.SECRET_KEY,{expiresIn:'1h'})
}

export default generateToken;



// utils/blacklist.js
let blacklistedTokens = [];

export const addToBlacklist = (token) => {
    blacklistedTokens.push(token);
};

export const isTokenBlacklisted = (token) => {
    return blacklistedTokens.includes(token);
};
