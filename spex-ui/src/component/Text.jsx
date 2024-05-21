import React from 'react';

function Text(props) {

    const data = {
        name: 'jorge',
        email: 'jorge@gmail.com',
        phone: '23355200900',
        organization: 'chegg',
        location: 'Tano',
        medium : 'x',
        branch : 'adenta'

    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault(); // Prevent default form submission behavior
    //
    //     try {
    //         const response = await fetch('http://localhost:5000/api/feedback', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(data),
    //         });
    //
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //
    //         const feed = await response.json(); // Parse the JSON from the response
    //         console.log('Response from server:', feed);
    //         // Handle any further actions upon successful submission
    //     } catch (error) {
    //         console.error('There was a problem with the fetch operation:', error);
    //         // Handle error scenarios
    //     }
    // };

    return (
        <>
            <button
                onClick={handleSubmit}
                className="w-full text-white bg-green-700 font-medium rounded-full text-md px-5 py-2.5 text-center"
                type="button"
            >
                Join the waitlist
            </button>



            <style>{`
                @media (max-width: 640px) {
                    /* Add responsive styles here */
                    .max-w-lg {
                        max-width: 90%;
                    }
                }
            `}</style>
        </>
    );
}

export default Text;