import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="flex flex-row justify-around w-full bg-gray-300 p-4 border-t-2 border-gray-400">
            <div className="left">
                <div className="text-[12x] pl-1 font-inter font-medium text-start">Copyright @Veerendra Gumate. </div>
                <div className="text-[12x] pl-1 font-inter font-medium text-start">All rights reserved</div>
            </div>

            <div className="right">
                <div className="icons flex flex-row gap-4 mt-4">
                    <a href="https://www.linkedin.com/in/veerendragumate" target="_blank">
                        <FaLinkedinIn className="w-[30px] h-[30px] m-0 p-1 cursor-pointer text-blue-700 hover:text-white hover:bg-blue-700 rounded" size={30}
                        />
                    </a>
                    <a href="https://github.com/veerendra19codes" target="_blank">
                        <FaGithub className="w-[30px] h-[30px] m-0 p-1 cursor-pointer hover:text-white hover:bg-black rounded" size={30} />
                    </a>
                    <a href="https://twitter.com/Veerendra_198" target="_blank">
                        <FaXTwitter className="w-[30px] h-[30px] m-0 p-1 cursor-pointer hover:text-white hover:bg-black rounded" size={30} />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Footer
