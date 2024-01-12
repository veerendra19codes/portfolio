import React from 'react'
import careerexpo from "../../assets/images/careerexpo.png"
import movieland from "../../assets/images/movieland.png"
import resto from "../../assets/images/resto.png"
import axel from "../../assets/images/axel.png"
import { FaLink } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"


const Projects = () => {
    const projects = [
        {
            id: 1,
            src: careerexpo,
            name: "CareerExpo",
            description: "CareerExpo is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, designed to assist individuals in navigating their career paths. The platform combines career assessment tools with personalized recommendations, helping users make informed decisions about their professional journey.",
            tech: [
                {
                    id: 1,
                    name: "React",
                },
                {
                    id: 2,
                    name: "Nodejs",
                },
                {
                    id: 3,
                    name: "Expressjs",
                },
                {
                    id: 4,
                    name: "MongoDB",
                },
            ],
            live: "https://careerexpo.netlify.app",
            github: "https://github.com/veerendra19codes/codestorm_HackHeads",
        },
        {
            id: 2,
            src: axel,
            name: "Axel",
            description: "Axel is a sleek and modern furniture website developed using React, Tailwind CSS, and Framer Motion. Enjoy a seamless and captivating shopping experience with responsive design, enchanting animations, and a dark mode.",
            tech: [
                {
                    id: 1,
                    name: "Reactjs",
                },
                {
                    id: 2,
                    name: "TailwindCSS",
                },
                {
                    id: 3,
                    name: "Framer-motion",
                },
            ],
            github: "https://github.com/veerendra19codes/ReactandFramerMotion",
            live: "https://furniture-website-rtf.netlify.app",
        },
        {
            id: 3,
            src: movieland,
            name: "MovieLand",
            description: "MovieLand is a web application developed using React.js, designed to fetch and display movie information from the OMDB API. The user-friendly interface incorporates a search bar, allowing users to filter a vast database of movies seamlessly.The project's responsive design ensures accessibility across various devices.",
            tech: [
                {
                    id: 1,
                    name: "React",
                },
                {
                    id: 2,
                    name: "OMDB API",
                },

            ],
            live: "https://veerendra19codes.github.io/MovieLand",
            github: "https://github.com/veerendra19codes/MovieLand",
        },
        {
            id: 4,
            src: resto,
            name: "Resto",
            description: "Resto is a responsive food order website designed to provide users with a seamless experience in exploring a variety of delicious dishes and placing orders online. Built using HTML, CSS, and JavaScript, the website offers an intuitive interface, ensuring accessibility across devices for a delightful food ordering experience.",
            tech: [
                {
                    id: 1,
                    name: "html",
                },
                {
                    id: 2,
                    name: "css",
                },
                {
                    id: 3,
                    name: "js",
                },
            ],
            live: "https://veerendra19codes.github.io/Food-Order-Website",
            github: "https://github.com/veerendra19codes/Food-Order-Website",
        },
    ]
    return (
        <div className="Projects flex flex-col w-full my-4 py-12 pb-24" id="project">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="font-inter text-2xl font-light text-center text-lightBlue mt-4 sm:text-xl">
                Projects
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="font-syne text-5xl font-semibold text-center text-darkBlue sm:text-4xl">
                My Projects
            </motion.div>


            {/* all cards container */}
            <div className="cards grid grid-cols-3 gap-4 justify-center w-full px-24 mt-12 sm:p-6 sm:m-0 sm:grid-cols-1">

                {projects.map((project) => {
                    return (
                        <div key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0 }}
                                viewport={{ once: true }}
                                className="card1 flex flex-col  border-2 border-gray-300 h-[480px]  min-w-[250px] max-w-[380px]  hover:shadow-custom hover:-translate-y-4 duration-500 sm:h-[450px] place-content-between pb-2">
                                <div className="image w-full min-h-[180px] overflow-hidden sm:min-h-[100px]">
                                    <img src={project.src} alt="projectimg" className="w-full h-full bg-no-repeat bg-center hover:scale-105 duration-500"></img>
                                </div>
                                <div className="content flex flex-col mt-2 px-4">
                                    <h1 className="projectTitle text-[24px] h-[24px] p-0 font-inter font-extrabold text-start">
                                        {project.name}
                                    </h1>
                                    <h3 className="projectDesc text-sm mt-4 pl-0 font-inter font-medium text-start sm:text-[10px]">{project.description}</h3>
                                    <h3 className="projectTech flex flex-row justify-start mt-4 flex-wrap gap-2">
                                        {project.tech.map((t) => {
                                            return (
                                                <div key={t.id}>

                                                    <p className="px-2 py-0 bg-green-800 font-inter text-white text-center text-extrabold text-wrap  text-sm ml-0 align-middle sm:text-[10px]">{t.name}</p>
                                                </div>
                                            )
                                        })}

                                    </h3>
                                </div>
                                <div>
                                    <div className="linksn flex flex-row my-4 px-4 justify-between p-0 sm:m-0 sm:mt-6">
                                        <a href={project.live} target="_blank">
                                            <button className="livelink text-blue-800 text-[20px] py-0 font-inter px-2 pl-0 hover:underline flex flex-row gap-2 align-middle justify-center content-center items-center sm:text-[16px]">
                                                Live <FaLink className="text-blue-800 text-[20px]" />
                                            </button>
                                        </a>
                                        <a href={project.github} target="_blank">
                                            <button className="githublink text-green-800 text-[20px] py-0 font-inter px-2 hover:underline flex flex-row gap-2 align-middle justify-center content-center items-center sm:text-[16px]">
                                                <FaCode className="text-green-800 text-[20px]" /> Github
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    )
                })}

            </div>
        </div>

    )
}

export default Projects;
