import UserModel from "../model/user.js";
import bcrypt from "bcrypt";
import validator from 'validator';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export const createUser = async (req, res) => {
    const { name, username, email, password, role } = req.body;

    if (!name || !username || !email || !password || !role) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Validating email address
    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "Invalid email address" });
    }

    // // Checking for strong password
    // if (!validator.isStrongPassword(password)) {
    //     return res.status(400).json({ error: "Password is not strong enough" });
    // }

    // Validating role
    const validRoles = ['admin', 'user', 'guest'];
    if (!validRoles.includes(role)) {
        return res.status(400).json({ error: "Invalid role" });
    }

    try {
        // Checking for existing username and email address
        const usernameExist = await UserModel.findOne({ username });
        const emailExist = await UserModel.findOne({ email });

        if (usernameExist) {
            return res.status(409).json({ error: "Username already taken" });
        }

        if (emailExist) {
            return res.status(409).json({ error: "Email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = await UserModel.create({ name, username, email, password: hashPassword, role });

        res.status(201).json({
            message: "User created successfully",
            user: { name: user.name, username: user.username, email: user.email, role: user.role }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const user = await UserModel.findOne({ username });

        if (!user) {
            return res.status(401).json({ error: "No account is registered with this username" });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        jwt.sign({ username, id: user._id, role: user.role }, process.env.SECRET_KEY, { expiresIn: "1h" }, (err, token) => {
            if (err) return res.status(500).json({ error: "Token generation failed" });
            res.cookie('token', token, { httpOnly: true }).json({ message: "Login successful" });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const users = async (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a parameter in the request URL

    try {
        // Find the user by ID
        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Return user data
        res.json({
            name: user.name,
            username: user.username,
            email: user.email,
            role: user.role
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



export const logout = async (req, res) => {
    try {
        // Clear the token cookie
        res.clearCookie('token', { httpOnly: true, sameSite: 'Strict' });
        // Respond with a success message
        res.json({ message: "Logout successful" });
    } catch (error) {
        // Handle errors, if any
        console.error('Logout failed:', error);
        res.status(500).json({ error: "Logout failed" });
    }
};

