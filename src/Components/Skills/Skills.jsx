import React from 'react'
import html from "../../assets/images/html.png"
import css from "../../assets/images/css.png"
import javascript from "../../assets/images/javascript.png"
import node from "../../assets/images/node.png"
import react from "../../assets/images/react.png"
import express from "../../assets/images/express.png"
import tailwind from "../../assets/images/tailwind.png"
import mongodb from "../../assets/images/mongodb.png"
import git from "../../assets/images/git.png"
import github from "../../assets/images/github.png"
import { motion, AnimatePresence } from "framer-motion"



const Skills = () => {
    return (
        <AnimatePresence>
            <div id="skills" className="skills w-full py-12 sm:p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    className="font-inter text-2xl font-light text-center text-lightBlue mt-4 sm:m-0 sm:text-xl"
                >
                    Skills
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    className="font-syne text-5xl font-semibold text-center text-darkBlue sm:text-4xl"
                >
                    My Skills
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="container w-full my-24 mx-auto px-4 flex justify-center content-center items-center sm:mt-8 sm:px-0 sm:mx-0">
                    <div className="grid grid-cols-5 gap-4 place-content-center m-0 p-0 mx-4 sm:grid-cols-2 sm:gap-1 sm:mx-0">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center items-center content-center align-middle w-[200px] h-[200px] border-2 border-purple-800 hover:border-purple-300 rounded-xl sm:w-[130px] sm:h-[130px] ">
                            <div className="flex justify-center h-[120px] w-[120px] items-center sm:w-[80px] sm:h-[80px]">
                                <img className="w-full h-full p-4 self-center bg-transparent sm:p-2" src={html} alt="html"></img>
                            </div>
                            <div className="font-inter text-blue-800 text-2xl font-normal flex content-center items-center self-center sm:text-xl">Html</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center items-center content-center w-[200px] h-[200px] border-2 border-purple-800 hover:border-purple-300 rounded-xl sm:w-[130px] sm:h-[130px]">
                            <div className="flex justify-center h-[120px] w-[120px] items-center  sm:w-[80px] sm:h-[80px]">
                                <img className="w-full h-full p-4 self-center bg-transparent sm:p-2" src={css} alt="css"></img>
                            </div>
                            <div className="font-inter text-blue-800 text-2xl font-medium flex content-center items-center self-center sm:text-xl">CSS</div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center items-center content-center w-[200px] h-[200px] border-2 border-purple-800 hover:border-purple-300 rounded-xl sm:w-[130px] sm:h-[130px]">
                            <div className="flex justify-center h-[120px] w-[120px] items-center  sm:w-[80px] sm:h-[80px]">
                                <img className="w-full h-full p-4 self-center bg-transparent sm:p-2" src={javascript} alt="javascript"></img>
                            </div>
                            <div className="font-inter text-blue-800 text-2xl font-normal flex content-center items-center self-center sm:text-xl">Javascript</div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center items-center content-center w-[200px] h-[200px] border-2 border-purple-800 hover:border-purple-300 rounded-xl sm:w-[130px] sm:h-[130px]">
                            <div className="flex justify-center h-[120px] w-[120px] items-center  sm:w-[80px] sm:h-[80px]">
                                <img className="w-full h-full p-4 self-center bg-transparent sm:p-2" src={react} alt="react"></img>
                            </div>
                            <div className="font-inter text-blue-800 text-2xl font-normal flex content-center items-center self-center sm:text-xl">React</div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1, delay: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center items-center content-center w-[200px] h-[200px] border-2 border-purple-800 hover:border-purple-300 rounded-xl sm:w-[130px] sm:h-[130px]">
                            <div className="flex justify-center h-[120px] w-[120px] items-center  sm:w-[80px] sm:h-[80px]">
                                <img className="w-full h-full p-4 self-center bg-transparent sm:p-2" src={node} alt="node"></img>
                            </div>
                            <div className="font-inter text-blue-800 text-2xl font-normal flex content-center items-center self-center sm:text-xl">NodeJS</div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center items-center content-center w-[200px] h-[200px] border-2 border-purple-800 hover:border-purple-300 rounded-xl sm:w-[130px] sm:h-[130px]">
                            <div className="flex justify-center h-[120px] w-[120px] items-center  sm:w-[80px] sm:h-[80px]">
                                <img className="w-full h-full p-4 self-center bg-transparent rounded-full sm:p-2" src={express} alt="express"></img>
                            </div>
                            <div className="font-inter text-blue-800 text-2xl font-normal flex content-center items-center self-center sm:text-xl">ExpressJS</div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1, delay: 1.4 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center items-center content-center w-[200px] h-[200px] border-2 border-purple-800 hover:border-purple-300 rounded-xl sm:w-[130px] sm:h-[130px]">
                            <div className="flex justify-center h-[120px] w-[120px] items-center  sm:w-[80px] sm:h-[80px]">
                                <img className="w-full h-full p-4 self-center bg-transparent sm:p-2" src={mongodb} alt="mongodb"></img>
                            </div>
                            <div className="font-inter text-blue-800 text-2xl font-normal flex content-center items-center self-center sm:text-xl">MongoDB</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1, delay: 1.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center items-center content-center w-[200px] h-[200px] border-2 border-purple-800 hover:border-purple-300 rounded-xl sm:w-[130px] sm:h-[130px]">

                            <div className="flex justify-center h-[120px] w-[120px] items-center  sm:w-[80px] sm:h-[80px]">
                                <img className="w-full h-full p-4 self-center bg-transparent sm:p-2" src={tailwind} alt="tailwind"></img>
                            </div>
                            <div className="font-inter text-blue-800 text-2xl font-normal flex content-center items-center self-center sm:text-xl">TailwindCSS</div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1, delay: 1.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center items-center content-center w-[200px] h-[200px] border-2 border-purple-800 hover:border-purple-300 rounded-xl sm:w-[130px] sm:h-[130px]">
                            <div className="flex justify-center h-[120px] w-[120px] items-center  sm:w-[80px] sm:h-[80px]">
                                <img className="w-full h-full p-4 self-center bg-transparent sm:p-2" src={git} alt="git"></img>
                            </div>
                            <div className="font-inter text-blue-800 text-2xl font-normal flex content-center items-center self-center sm:text-xl">Git</div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1, delay: 2 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center items-center content-center w-[200px] h-[200px] border-2 border-purple-800 hover:border-purple-300 rounded-xl sm:w-[130px] sm:h-[130px]">
                            <div className="flex justify-center h-[120px] w-[120px] items-center  sm:w-[80px] sm:h-[80px]">
                                <img className="w-full h-full p-4 self-center bg-transparent sm:p-2" src={github} alt="github"></img>
                            </div>
                            <div className="font-inter text-blue-800 text-2xl font-normal flex content-center items-center self-center sm:text-xl">Github</div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default Skills
