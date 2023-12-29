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


const Skills = () => {
    return (
        <div id="skills" className="skills w-full bg-darkBlue ">
            <div className="font-inter text-2xl font-light text-center text-lightBlue mt-4">Skills</div>
            <div className="font-syne text-5xl font-medium text-center text-white">My Skills</div>

            <div className="container w-full my-8 mx-auto px-4 flex justify-center content-center items-center">
                <div className="grid grid-cols-5 w-full mx-auto">
                    <div className="flex flex-col justify-center items-center content-center w-[200px] h-[200px]">
                        <div className="flex flex-none justify-center h-[120px] w-[120px] items-center">
                            <img className="w-full h-full p-4 self-center bg-transparent" src={html} alt="html"></img>
                        </div>
                        <div className="font-inter text-white text-2xl font-normal flex content-center items-center self-center">Html</div>
                    </div>

                    <div className="flex flex-col justify-center items-center content-center w-[200px] h-[200px]">
                        <div className="flex flex-none justify-center h-[120px] w-[120px] items-center">
                            <img className="w-full h-full p-4 self-center bg-transparent" src={css} alt="css"></img>
                        </div>
                        <div className="font-inter text-white text-2xl font-medium flex content-center items-center self-center">CSS</div>
                    </div>


                    <div className="flex flex-col justify-center items-center content-center w-[200px] h-[200px]">
                        <div className="flex flex-none justify-center h-[120px] w-[120px]items-center">
                            <img className="w-full h-full p-4 self-center bg-transparent" src={javascript} alt="javascript"></img>
                        </div>
                        <div className="font-inter text-white text-2xl font-normal flex content-center items-center self-center">Javascript</div>
                    </div>


                    <div className="flex flex-col justify-center items-center content-center w-[200px] h-[200px]">
                        <div className="flex flex-none justify-center h-[120px] w-[120px] items-center">
                            <img className="w-full h-full p-4 self-center bg-transparent" src={react} alt="react"></img>
                        </div>
                        <div className="font-inter text-white text-2xl font-normal flex content-center items-center self-center">React</div>
                    </div>


                    <div className="flex flex-col justify-center items-center content-center w-[200px] h-[200px]">
                        <div className="flex flex-none justify-center h-[120px] w-[120px] items-center">
                            <img className="w-full h-full p-4 self-center bg-transparent" src={node} alt="node"></img>
                        </div>
                        <div className="font-inter text-white text-2xl font-normal flex content-center items-center self-center">NodeJS</div>
                    </div>


                    <div className="flex flex-col justify-center items-center content-center w-[200px] h-[200px]">
                        <div className="flex flex-none justify-center h-[120px] w-[120px] items-center">
                            <img className="w-full h-full p-4 self-center bg-transparent rounded-full" src={express} alt="express"></img>
                        </div>
                        <div className="font-inter text-white text-2xl font-normal flex content-center items-center self-center">ExpressJS</div>
                    </div>


                    <div className="flex flex-col justify-center items-center content-center w-[200px] h-[200px]">
                        <div className="flex flex-none justify-center h-[120px] w-[120px] items-center">
                            <img className="w-full h-full p-4 self-center bg-transparent" src={mongodb} alt="mongodb"></img>
                        </div>
                        <div className="font-inter text-white text-2xl font-normal flex content-center items-center self-center">MongoDB</div>
                    </div>

                    <div className="flex flex-col justify-center items-center content-center w-[200px] h-[200px]">

                        <div className="flex flex-none justify-center h-[120px] w-[120px] items-center">
                            <img className="w-full h-full p-4 self-center bg-transparent" src={tailwind} alt="tailwind"></img>
                        </div>
                        <div className="font-inter text-white text-2xl font-normal flex content-center items-center self-center">TailwindCSS</div>
                    </div>


                    <div className="flex flex-col justify-center items-center content-center w-[200px] h-[200px]">
                        <div className="flex flex-none justify-center h-[120px] w-[120px] items-center">
                            <img className="w-full h-full p-4 self-center bg-transparent" src={git} alt="git"></img>
                        </div>
                        <div className="font-inter text-white text-2xl font-normal flex content-center items-center self-center">Git</div>
                    </div>


                    <div className="flex flex-col justify-center items-center content-center w-[200px] h-[200px]">
                        <div className="flex flex-none justify-center h-[120px] w-[120px] items-center">
                            <img className="w-full h-full p-4 self-center bg-transparent" src={github} alt="github"></img>
                        </div>
                        <div className="font-inter text-white text-2xl font-normal flex content-center items-center self-center">Github</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills
