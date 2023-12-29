import React from 'react'

const ContactMe = () => {
    return (
        <div className="contactme w-full p-4 mt-32 mb-16" id="contact">

            <div className="flex flex-row justify-evenly items-center">

                <div className="flex flex-col text-start w-1/2 ">
                    <div className="-mt-[250px] w-full h-full">


                        <div className="font-inter text-2xl font-light text-lightBlue mt-4">Contact Me</div>
                        <div className="font-syne text-5xl font-medium text-darkBlue">Send me a mail</div>
                        <div>veerendragumate@gmail.com</div>
                        <div>Mumbai,India</div>
                    </div>
                </div>

                <form>
                    <div className="flex flex-col justify-center items-center w-full bg-sky-400 gap-4 p-8 rounded-xl">
                        <input type="text" name="name" placeholder="Name" className="w-[500px] h-[50px] pl-4" />
                        <input type="email" name="email" placeholder="Email" className="w-[500px] h-[50px] pl-4" />
                        <textarea type="text" name="message" placeholder="type your message here..." className="w-[500px] h-[200px] pl-4 pt-4" />
                        <button type="submit" className="bg-dark px-8 py-2 text-white bg-purple-700   hover:bg-purple-800 rounded-xl">Send</button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default ContactMe
