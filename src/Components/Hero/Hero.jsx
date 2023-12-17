import React from 'react'
import profile from "../../assets/images/profile.jpg"
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
    return (
        <div id="aboutme" className="Hero w-full h-[600px] mt-16 flex flex-row justify-around gap-4">
            <div className="left w-1/2 h-[500px] justify-center content-center items-center place-content-center pt-28 pl-32">
                <div className="text-[12x] pl-1 font-inter font-medium text-start">Hi, I am </div>
                <div className="text-[40px] font-inter font-black text-start -mt-2 p-0">Veerendra Gumate</div>
                <div className="text-[32px] font-inter font-extrabold text-blue-600 text-start -mt-2 p-0">Web Developer</div>
                <div className="location text-start">
                    <div className="h-[30px] m-0 p-0 flex justify-start content-center self-center text-start">
                        <IoLocationSharp className="w-[30px] h-[30px] -ml-1 p-0" size={30} color="green" />
                        <div className="text-[24px] h-[24px] p-0 py-0 font-inter font-semibold text-start">Mumbai, India</div>
                    </div>
                </div>
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
            <div className="right flex w-1/2 h-[500px] justify-center content-center items-center">
                <img className="items-center h-[400px] -mt-10 rounded-full" src={profile} alt="profile"></img>
            </div>
        </div>
    )
}

export default Hero
