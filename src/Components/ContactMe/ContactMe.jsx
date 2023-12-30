import React from 'react'
import { motion, AnimatePresence } from "framer-motion"


const ContactMe = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="contactme w-full px-56 py-32 m-0 text-white" id="contact">

            <div className="flex flex-row justify-evenly items-center">

                <div className="flex flex-col text-start w-1/2 ">
                    <div className="-mt-[250px] w-full h-full ">


                        <div className="font-inter text-2xl font-light text-lightBlue mt-4">Contact Me</div>
                        <div className="font-syne text-5xl font-medium text-darkBlue">Send me a mail</div>
                        <div className="text-dark">veerendragumate@gmail.com</div>
                        <div className="text-dark"  >Mumbai,India</div>
                    </div>
                </div>

                <form className="" onSubmit={onSubmit}>
                    <div className="flex flex-col justify-center items-center w-full bg-sky-400 gap-4 p-8 rounded-xl">
                        <input type="text" name="name" placeholder="Name" className="w-[500px] h-[50px] pl-4" />
                        <input type="email" name="email" placeholder="Email" className="w-[500px] h-[50px] pl-4" />
                        <textarea type="text" name="message" placeholder="type your message here..." className="w-[500px] h-[200px] pl-4 pt-4" />
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit" className="bg-dark px-8 py-2 mt-4 text-white bg-purple-800   hover:bg-purple-700 rounded-xl text-xl">Send</motion.button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default ContactMe
