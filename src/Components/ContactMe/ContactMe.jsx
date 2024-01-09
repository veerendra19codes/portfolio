import React, { useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useState } from 'react';

const ContactMe = () => {

    const VITE_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const VITE_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;



    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // setName("")
        // setEmail("")
        // setMessage("")
        //to clear the form once submitted
        e.target.reset();



        emailjs.sendForm(
            VITE_SERVICE_ID,
            VITE_TEMPLATE_ID,
            form.current,
            VITE_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contactme w-full px-56 py-32 m-0 text-white sm:p-4" id="contact">

            <div className="flex flex-row justify-evenly items-center sm:flex-col sm:p-4">

                <div className="flex flex-col text-start w-1/2 sm:w-full pl-2">
                    <div className="-mt-[250px] w-full h-full sm:m-0">
                        <div className="font-inter text-2xl font-light text-lightBlue mt-4 sm:text-xl">Contact Me</div>
                        <div className="font-syne text-5xl font-semibold text-darkBlue sm:text-3xl">Send me a mail</div>
                        <div className="text-dark flex flex-row gap-1">
                            <IoMdMail className="flex  self-center text-sm w-[20px] h-[20px]" size={20} color="blue" />veerendragumate@gmail.com</div>
                        <div className="text-dark flex flex-row gap-1"  ><IoLocationSharp className="flex  self-center text-sm w-[20px] h-[20px]" size={20} color="green" />Mumbai,India</div>
                    </div>
                </div>

                <form className="" ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-col justify-center items-center w-full bg-sky-400 gap-4 p-8 rounded-xl sm:p-4 sm:mt-8">
                        <input type="text" name="user_name" placeholder="Name" className="w-[500px] h-[50px] pl-4 sm:w-[250px] sm:h-[40px] text-black" onChange={(e) => setName(e.target.value)} />
                        <input type="email" name="user_email" placeholder="Email" className="w-[500px] h-[50px] pl-4 sm:w-[250px] sm:h-[40px] text-black" onChange={(e) => setEmail(e.target.value)} />
                        <textarea type="text" name="message" placeholder="type your message here..." className="w-[500px] h-[200px] pl-4 pt-4 sm:w-[250px] sm:h-[100px] sm:m-0 text-black" onChange={(e) => setMessage(e.target.value)} />
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit" value="Send" className="bg-dark px-8 py-2 mt-4 text-white bg-purple-800   hover:bg-purple-700 rounded-xl text-xl">Send</motion.button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default ContactMe
