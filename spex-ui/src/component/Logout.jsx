import React, { useContext, useState } from 'react';
import { UserContext } from "../context/User";
import { RiArrowDropDownLine } from "react-icons/ri";

function Logout({ userData }) {
    const [isOpen, setIsOpen] = useState(false);
    const { role } = userData;
    const { logout } = useContext(UserContext);

    const handleLogout =  () => {
         logout();
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen); // Toggle dropdown visibility
    };


    return (
        <div>
            <div className="relative font-[sans-serif] w-max mx-auto" onClick={toggleDropdown}>
                <button type="button"
                        className="px-6 py-2 flex items-center rounded-full text-[#333] text-sm font-semibold border-2 border-gray-300 outline-none hover:bg-gray-100">
                    <img src="https://readymadeui.com/profile_6.webp"
                         className="w-7 h-7 mr-2 rounded-full shrink-0"></img>
                    {role}
                    <RiArrowDropDownLine size={30} />
                </button>
                {isOpen && (
                    <ul className='absolute shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto'>
                        <li className='py-2.5 px-6 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer'
                            onClick={handleLogout}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-3"
                                 viewBox="0 0 6.35 6.35">
                                <path
                                    d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                                    data-original="#000000"></path>
                            </svg>
                            Logout
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Logout;
