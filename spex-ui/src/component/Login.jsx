import React, { useState, useEffect, useContext } from 'react';
import { AiFillCloseSquare, AiOutlineLogin } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import {UserContext} from "../context/User.jsx";


function Login() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const { login, error } = useContext(UserContext);  // Access login function and error from context

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            navigate('/dashboard');
        } else {
            setIsLoading(false);
        }
    }, [navigate]);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);  // Use the login function from the context

        const token = Cookies.get('token');  // Check if the token is set
        if (token) {
            toast.success('Login successful!');
            // Reset form values
            setUsername('');
            setPassword('');
            // Close modal and navigate to dashboard
            toggleModal();
            navigate('/dashboard');
        }
    };

    return (
        <div>
            <ToastContainer />
            <button
                onClick={toggleModal}
                className="flex gap-2 items-center text-white bg-green-700 font-medium text-sm px-5 py-2.5 text-center"
                type="button"
            >
                Login <AiOutlineLogin size={20} />
            </button>

            {isModalOpen && (
                <div
                    id="authentication-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg text-black">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-green-700">
                                <h3 className="text-xl font-semibold text-white">
                                    Sign in to the Dashboard
                                </h3>
                                <button
                                    type="button"
                                    className="text-white bg-transparent rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                                    onClick={toggleModal}
                                >
                                    <AiFillCloseSquare size={20} />
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <form className="space-y-10" onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder="Username"
                                            className="border-b border-gray-900 text-gray-900 text-sm w-full p-2.5 focus:outline-none"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            className="border-b border-gray-900 text-gray-900 text-sm w-full p-2.5 focus:outline-none"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-[20%] text-white bg-green-700 py-2"
                                    >
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
