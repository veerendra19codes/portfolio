import React from 'react'
import careerexpo from "../../assets/images/careerexpo.png"
import movieland from "../../assets/images/movieland.png"
import resto from "../../assets/images/resto.png"
import { FaLink } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"


const Projects = () => {
    return (
        <div className="Projects flex flex-col w-full my-4 py-12 pb-24" id="project">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="font-inter text-2xl font-light text-center text-lightBlue mt-4">
                Projects
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="font-syne text-5xl font-medium text-center text-darkBlue">
                My Projects
            </motion.div>
            {/* https://careerexpo.netlify.app/ */}
            {/* https://github.com/veerendra19codes/codestorm_HackHeads */}


            {/* all cards container */}
            <div className="cards flex flex-row gap-4 justify-center w-full px-24 mt-12">

                {/* card1 starts */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    viewport={{ once: true }}
                    className="card1 flex flex-col  border-2 border-gray-200 h-[500px] max-w-[400px] rounded-xl hover:shadow-custom hover:-translate-y-4 duration-500">
                    <div className="image w-full min-h-[210px] overflow-hidden">
                        <img src={careerexpo} alt="projectimg" className="w-full h-full bg-no-repeat bg-center hover:scale-105 duration-500"></img>
                    </div>
                    <div className="content flex flex-col mt-2 px-4">
                        <h1 className="projectTitle text-[24px] h-[24px] p-0 font-inter font-extrabold text-start">
                            CareerExpo
                        </h1>
                        <h3 className="projectDesc text-[12x] mt-4 pl-0 font-inter font-medium text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente atque distinctio quos inventore repudiandae eveniet laborum quaerat ea. Distinctio facere aliquam, repellendus impedit aut labore explicabo nobis illo ut tempora?</h3>
                        <h3 className="projectTech flex flex-row justify-start mt-4">
                            <p className="px-2 py-0 bg-green-800 font-inter text-white text-center text-extrabold text-wrap  text-sm mx-2 ml-0 align-middle">React</p>
                            <p className="px-2 py-0 bg-green-800 font-inter text-white  text-center text-extrabold text-wrap  text-sm mx-2 align-middle">Nodejs</p>
                            <p className="px-2 py-0 bg-green-800 font-inter text-white  text-center text-extrabold text-wrap  text-sm mx-2 align-middle">Expressjs</p>
                            <p className="px-2 py-0 bg-green-800 font-inter text-white text-center text-extrabold text-wrap  text-sm mx-2 align-middle">MongoDb</p>
                        </h3>
                        <div className="linksn flex flex-row my-4 justify-between p-0">
                            <a href="https://careerexpo.netlify.app/" target="_blank">
                                <button className="livelink text-blue-800 text-[20px] py-0 font-inter px-2 pl-0 hover:underline flex flex-row gap-2 align-middle justify-center content-center items-center">
                                    Live <FaLink className="text-blue-800 text-[20px]" />
                                </button>
                            </a>
                            <a href="https://github.com/veerendra19codes/codestorm_HackHeads" target="_blank">
                                <button className="githublink text-green-800 text-[20px] py-0 font-inter px-2 hover:underline flex flex-row gap-2 align-middle justify-center content-center items-center">
                                    <FaCode className="text-green-800 text-[20px]" /> Github
                                </button>
                            </a>
                        </div>
                    </div>
                </motion.div>
                {/* card1 ends */}

                {/* card2 starts */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="card flex flex-col border-2 border-gray-200 h-[500px] max-w-[400px] rounded-xl hover:shadow-custom hover:-translate-y-4 duration-500">
                    <div className="image w-full min-h-[210px] overflow-hidden">
                        <img src={movieland} alt="projectimg" className="w-full h-full bg-no-repeat bg-center hover:scale-105 duration-500"></img>
                    </div>
                    <div className="content flex flex-col mt-2 px-4">
                        <h1 className="projectTitle text-[24px] h-[24px] p-0 font-inter font-extrabold text-start">
                            MovieLand
                        </h1>
                        <h3 className="projectDesc text-[12x] mt-4 pl-0 font-inter font-medium text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente atque distinctio quos inventore repudiandae eveniet laborum quaerat ea. Distinctio facere aliquam, repellendus impedit aut labore explicabo nobis illo ut tempora?</h3>
                        <h3 className="projectTech flex flex-row justify-start mt-4">
                            <p className="px-2 py-0 bg-green-800 font-inter text-white text-center text-extrabold text-wrap  text-sm mx-2 ml-0 align-middle">React</p>
                            <p className="px-2 py-0 bg-green-800 font-inter text-white  text-center text-extrabold text-wrap  text-sm mx-2 align-middle">API</p>
                        </h3>
                        <div className="linksn flex flex-row my-4 justify-between p-0">
                            <a href="https://veerendra19codes.github.io/MovieLand/" target="_blank">
                                <button className="livelink text-blue-800 text-[20px] py-0 font-inter px-2 pl-0 hover:underline flex flex-row gap-2 align-middle justify-center content-center items-center">
                                    Live <FaLink className="text-blue-800 text-[20px]" />
                                </button>
                            </a>
                            <a href="https://github.com/veerendra19codes/MovieLand" target="_blank">
                                <button className="githublink text-green-800 text-[20px] py-0 font-inter px-2 hover:underline flex flex-row gap-2 align-middle justify-center content-center items-center">
                                    <FaCode className="text-green-800 text-[20px]" /> Github
                                </button>
                            </a>
                        </div>
                    </div>
                </motion.div>
                {/* card2 ends */}

                {/* card3 starts  */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="card flex flex-col border-2 border-gray-200 h-[500px] max-w-[400px] rounded-xl hover:shadow-custom hover:-translate-y-4 duration-500">
                    <div className="image w-full min-h-[210px] overflow-hidden">
                        <img src={resto} alt="projectimg" className="w-full h-full bg-no-repeat bg-center hover:scale-105 duration-500"></img>
                    </div>
                    <div className="content flex flex-col mt-2 px-4">
                        <h1 className="projectTitle text-[24px] h-[24px] p-0 font-inter font-extrabold text-start">
                            Resto
                        </h1>
                        <h3 className="projectDesc text-[12x] mt-4 pl-0 font-inter font-medium text-start text-light text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente atque distinctio quos inventore repudiandae eveniet laborum quaerat ea. Distinctio facere aliquam, repellendus impedit aut labore explicabo nobis illo ut tempora?</h3>
                        <h3 className="projectTech flex flex-row justify-start mt-4">
                            <p className="px-2 py-0 bg-green-800 font-inter text-white text-center text-extrabold text-wrap  text-sm mx-2 ml-0 align-middle">HTML</p>
                            <p className="px-2 py-0 bg-green-800 font-inter text-white  text-center text-extrabold text-wrap  text-sm mx-2 align-middle">CSS</p>
                            <p className="px-2 py-0 bg-green-800 font-inter text-white  text-center text-extrabold text-wrap  text-sm mx-2 align-middle">Javascript</p>

                        </h3>
                        <div className="linksn flex flex-row my-4 justify-between p-0">
                            <a href="https://veerendra19codes.github.io/Food-Order-Website/" target="_blank">
                                <button className="livelink text-blue-800 text-[20px] py-0 font-inter px-2 pl-0 hover:underline flex flex-row gap-2 align-middle justify-center content-center items-center">
                                    Live <FaLink className="text-blue-800 text-[20px]" />
                                </button>
                            </a>
                            <a href="https://github.com/veerendra19codes/Food-Order-Website" target="_blank">
                                <button className="githublink text-green-800 text-[20px] py-0 font-inter px-2 hover:underline flex flex-row gap-2 align-middle justify-center content-center items-center">
                                    <FaCode className="text-green-800 text-[20px]" /> Github
                                </button>
                            </a>
                        </div>
                    </div>
                </motion.div>
                {/* card3 ends  */}

            </div>
        </div>

    )
}

export default Projects;
