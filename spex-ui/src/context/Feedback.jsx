import React, { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
    const [feedbackData, setFeedbackData] = useState([]);

    const fetchFeedbackData = async () => {
        try {
            const response = await fetch('https://spex-drab.vercel.app/api/feedback', {
                credentials: 'include'
            });
            const data = await response.json();
            setFeedbackData(data);
        } catch (error) {
            console.error('Error fetching feedback data:', error);
        }
    };

    useEffect(() => {
        fetchFeedbackData(); // Initial fetch

        // Polling every 30 seconds
        const intervalId = setInterval(() => {
            fetchFeedbackData();
        }, 10000);

        return () => clearInterval(intervalId); // Clean up interval on unmount
    }, []);

    return (
        <FeedbackContext.Provider value={{ feedbackData, fetchFeedbackData }}>
            {children}
        </FeedbackContext.Provider>
    );
};

export { FeedbackProvider, FeedbackContext };
