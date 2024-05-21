import React, { useContext } from 'react';
import { FeedbackContext } from "../context/Feedback.jsx";

const Feedback = () => {
    const { feedbackData } = useContext(FeedbackContext);



    return (
        <div className=" w-[80%] relative overflow-x-auto shadow-sm sm:rounded-lg mt-16 mx-auto">

            <table className="w-full text-sm text-left rtl:text-right text-white">
                <thead className="text-xs text-white uppercase bg-green-700 ">
                <tr>
                    <th scope="col" className="px-6 py-3 th-green">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 th-green">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3 th-green">
                        Phone
                    </th>
                    <th scope="col" className="px-6 py-3 th-green">
                        Organization
                    </th>
                    <th scope="col" className="px-6 py-3 th-green">
                        Location
                    </th>
                </tr>
                </thead>
                <tbody className="bg-gray-400 text-black">
                {feedbackData.map((feedback, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'odd:bg-white odd:dark:even:bg-gray-50 even:border-b dark:border-gray-700' : 'even:bg-white '}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap uppercase ">
                            {feedback.name}
                        </th>
                        <td className="px-6 py-4">
                            {feedback.email}
                        </td>
                        <td className="px-6 py-4">
                            {feedback.phone}
                        </td>
                        <td className="px-6 py-4">
                            {feedback.organization}
                        </td>
                        <td className="px-6 py-4">
                            {feedback.location}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Feedback;
