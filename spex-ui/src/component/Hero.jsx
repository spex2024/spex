import React, {useContext} from 'react';

import {FaPlay} from "react-icons/fa6";
import FormModal from "./Form.jsx";
import spex from "../assets/spex.jpg"
import Login from "./Login.jsx";
import {Link} from "react-router-dom";
import SpexLogo from "../assets/spex-logo.webp";

import {UserContext} from "../context/User.jsx";

import {BiGrid} from "react-icons/bi";

function Hero() {




    const {userData}= useContext(UserContext)

    return (
        <section className="w-full min-h-screen lg:w-[90vw]  flex flex-col items-center lg:px-24 lg:py-8">
            <header className="w-full flex items-center justify-between px-4 lg:px-8">
                <Link to='/'>

                    <img src={SpexLogo}/>
                </Link>

                {userData ? (
                    <Link to={'/dashboard'}>
                        <button

                            className="flex gap-2 items-center text-white bg-green-700 font-medium text-sm px-5 py-2.5 text-center"
                            type="button"
                        >
                             <BiGrid size={20}/> Dashboard
                        </button>
                    </Link>
                ) : (
                    <Login/>
                )}

            </header>
            <div className=" w-full flex flex-col items-center justify-center lg:px-28">

                <h1 className=" text-2xl lg:text-7xl font-bold text-gray-900 mt-10 lg:mt-14 lg:mb-14">SMART PACK EXCHANGE </h1>
                <p className="lg:text-xl font-medium text-gray-900 lg:px-28 mb-3 text-center text-lg ">
                    The cutting-edge smart pack exchange app revolutionizing food management.
                </p>
                <p className="lg:text-xl text-lg  font-medium text-gray-900 lg:px-52 mb-10 text-center ">
                    Join our waitlist for a sneak peek into the future of sustainable, cost-effective packaging
                    solutions.
                </p>
                <div className="lg:w-[17%]">
                    <FormModal/>

                </div>
            </div>

            <div
                className=" w-[90%] h-[70vh] flex flex-col items-center justify-center px-28  bg-cover bg-center rounded-xl mt-20"
                style={{backgroundImage:  `url(${spex})`}}>
                <button
                    className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center cursor-pointern animate-pulse">
                    <FaPlay size={40} className={`text-green-600`}/>
                </button>
            </div>


        </section>
    );
}

export default Hero;