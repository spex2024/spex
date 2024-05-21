import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const initialFormData = {
        name: '',
        username: '',
        email: '',
        password: '',
        role: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://spex.onrender.com/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log(formData);
            if (response.ok) {
                const data = await response.json();
                toast.success('Registration successful!');
                setFormData(initialFormData);
                setTimeout(() => {
                    navigate('/');
                }, 2000); // Redirect after 2 seconds
            } else {
                toast.error('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Network error');
        }
    };

    return (
        <div className="flex flex-col justify-center font-[sans-serif] text-[#333] min-h-screen p-4 sm:h-screen">
            <ToastContainer />
            <div className="max-w-md w-full mx-auto border border-gray-300 rounded-md p-6 bg-white">
                <div className="text-center mb-12">
                    <h1 className="text-2xl font-bold">SPEX</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-8">
                        <div>
                            <input
                                name="name"
                                type="text"
                                className="bg-white border-b border-gray-300 w-full text-sm py-2 focus:outline-none focus:border-green-700"
                                placeholder="Enter full name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name="username"
                                type="text"
                                className="bg-white border-b border-gray-300 w-full text-sm py-2 focus:outline-none focus:border-green-700"
                                placeholder="Enter username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name="email"
                                type="email"
                                className="bg-white border-b border-gray-300 w-full text-sm py-2 focus:outline-none focus:border-green-700"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                className="bg-white border-b border-gray-300 w-full text-sm py-2 focus:outline-none focus:border-green-700"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <select
                                name="role"
                                className="bg-white border-b border-gray-300 w-full text-sm py-2 focus:outline-none focus:border-green-700"
                                value={formData.role}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select role</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                                <option value="guest">Guest</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-start">
                        <button
                            type="submit"
                            className="w-full sm:w-[50%] py-3 px-4 text-sm font-semibold rounded text-white bg-green-700 hover:bg-green-800 focus:outline-none"
                        >
                            Create an account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
