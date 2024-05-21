import React, {useContext, useEffect} from 'react';
import Logout from "../component/Logout.jsx";
import Feedback from "../component/Feedback.jsx";
import {UserContext} from "../context/User.jsx";
import SpexLogo from '../assets/spex-logo.webp'
import {FeedbackContext} from "../context/Feedback.jsx";
import {Link} from "react-router-dom";
import {AiFillFileExcel} from "react-icons/ai";

function Dashboard(props) {
    const {userData}= useContext(UserContext)
    const { feedbackData } = useContext(FeedbackContext);
    const downloadCSV = () => {
        const csvContent = "data:text/csv;charset=utf-8," +
            feedbackData.map(row => Object.values(row).join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "feedback_data.csv");
        document.body.appendChild(link);
        link.click();
    };
  const {username , role} = userData;



    return (
        <div className={`w-full flex flex-col items-center min-h-screen  bg-gray-100`}>
            <header className={`w-full h-[20%] flex gap-[50%] items-center justify-center  py-5 bg-white `}>
                <Link to='/'>

                <img src={SpexLogo}/>
                </Link>

                 <Logout userData={userData}/>
                </header>
            <div className={`w-[64%] h-[20vh]  mt-16   flex  justify-between`}>
                <div >
                <h1 className={`text-5xl font-bold capitalize mb-2`}>Welcome , {username} 👋</h1>
                <p className={`text-xl `}> Good to see you boss</p>

                </div>

                <button onClick={downloadCSV}
                        className="bg-green-700 h-[45px]  text-white font-bold py-2 px-2 rounded mt-4 ml-4 flex items-center gap-3">
                    Download CSV <AiFillFileExcel size={20}/>
                </button>

            </div>
            <div className={`w-[80%] min-h-screen `}>

                <Feedback/>
            </div>

        </div>
    );
}

export default Dashboard;