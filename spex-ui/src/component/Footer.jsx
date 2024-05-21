import React from 'react';
import {AiFillFacebook, AiFillInstagram, AiFillYoutube} from "react-icons/ai";
import {FaXTwitter} from "react-icons/fa6";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={`w-full flex flex-col lg:flex-row justify-between items-center lg:h-auto  py-5 mt-36 `}>
            <div className=" flex items-center ">
                <ul className="flex items-center gap-2 ">
                    <li className="list-none"><AiFillInstagram/></li>
                    <li className="list-none"><AiFillFacebook/></li>
                    <li className="list-none"><FaXTwitter /></li>
                    <li className="list-none"><AiFillYoutube/></li>
                    <li className="list-none"><p>spexafrica</p></li>
                </ul>
            </div>

            <div className="flex items-center ">
                <p>Spex  &copy; {currentYear}, All Rights Reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;