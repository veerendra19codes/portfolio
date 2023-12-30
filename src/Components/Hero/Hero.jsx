import React from 'react'
import profile from "../../assets/images/profile.jpg"
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"

const Hero = () => {

    return (
        <AnimatePresence>
            <div id="aboutme" className="Hero w-full h-[600px] mt-32 flex flex-row justify-around gap-4 px-24">
                <div className="left w-1/2 h-[500px] justify-center content-center items-center place-content-center pt-28 pl-32">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                        exit={{ opacity: 0, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[12x] pl-1 font-inter font-medium text-start">Hi, I am </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        exit={{ opacity: 0, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[40px] font-inter font-black text-start -mt-2 p-0">Veerendra Gumate</motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        exit={{ opacity: 0, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[32px] font-syne font-extrabold text-blue-600 text-start -mt-2 p-0">Web Developer</motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        exit={{ opacity: 0, x: 0 }}
                        viewport={{ once: true }}
                        className="location text-start">
                        <div className="h-[30px] m-0 p-0 flex justify-start content-center self-center text-start">
                            <IoLocationSharp className="w-[30px] h-[30px] -ml-1 p-0" size={30} color="green" />
                            <div className="text-[24px] h-[24px] p-0 py-0 font-inter font-semibold text-start">Mumbai, India</div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        exit={{ opacity: 0, x: 0 }}
                        viewport={{ once: true }}
                        className="icons flex flex-row gap-4 mt-4">
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
                    </motion.div>
                </div>
                <div
                    className="right flex w-1/2 h-[500px] justify-center content-center items-center">
                    <motion.img
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0 }}
                        transition={{ duration: 1, delay: 0 }}
                        viewport={{ once: true }}
                        className="items-center h-[400px] -mt-10 rounded-full" src={profile} alt="profile"></motion.img>
                </div>
            </div >
        </AnimatePresence>
    )
}

export default Hero
