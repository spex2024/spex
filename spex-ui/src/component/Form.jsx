import { useState } from 'react';
import {toast} from "react-toastify";

const FormModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isThankYouVisible, setIsThankYouVisible] = useState(false);

    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        organization: '',
        location: '',
        agree: false
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://spex.onrender.com/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            console.log(formData);
            if (response.ok) {
                const data = response.json()
                setFormData(initialFormData);
                setIsOpen(false);
                setIsThankYouVisible(true);
                console.log(data)
            } else {
                toast.error(`Failed to submit form data: ${response.statusText}`);
            }
        } catch (error) {
            toast.error(`Error submitting form data: ${error.message}`);

        }
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="w-full text-white bg-green-700 font-medium rounded-full text-md px-5 py-2.5 text-center"
                type="button"
            >
                Join the waitlist
            </button>

            {isOpen && (
                <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-50 py-10 lg:py-0">
                    <div className="w-full max-w-lg mx-4 bg-white rounded-lg shadow-lg p-4">
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Join the waitlist now
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        Embrace the future of food packaging with Spex!
                                    </p>
                                </div>
                                <button
                                    onClick={toggleModal}
                                    type="button"
                                    className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <form className="space-y-12" onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="input-field w-full py-2 border-b border-gray-500 focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="input-field w-full border-b border-gray-500 focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="input-field w-full border-b border-gray-500 focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        className="input-field w-full border-b border-gray-500 focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your organization"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="input-field w-full border-b border-gray-500 focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your location of organization"
                                        required
                                    />
                                </div>
                                <div className="flex items-start">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        name="agree"
                                        checked={formData.agree}
                                        onChange={handleChange}
                                        className="checkbox"
                                        required
                                    />
                                    <label htmlFor="remember" className="text-sm text-gray-700 ml-2">
                                        By joining the Spex waitlist, you agree to receive updates and announcements
                                        from Spex. We respect your privacy and will never share your information with
                                        third parties.
                                    </label>
                                </div>
                                <button type="submit"
                                        className="w-[30%] text-white bg-green-700 font-medium text-md px-5 py-2.5 text-center mt-4">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {isThankYouVisible && (
                <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-50 py-10 lg:py-">
                    <div className="w-full max-w-lg mx-4 bg-white rounded-lg shadow-lg p-5">
                        <div className="p-5 text-center">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                Thank You!
                            </h3>
                            <p className="text-md text-gray-700 mb-5">
                                Thank you for joining the waitlist. We will keep you updated with the latest news and announcements.
                            </p>
                            <button
                                onClick={() => setIsThankYouVisible(false)}
                                className="w-[50%] text-white bg-green-700 font-medium rounded-full text-md px-5 py-2.5 text-center mt-4"
                                type="button"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @media (max-width: 640px) {
                    .max-w-lg {
                        max-width: 90%;
                    }
                }
            `}</style>
        </>
    );
};

export default FormModal;
