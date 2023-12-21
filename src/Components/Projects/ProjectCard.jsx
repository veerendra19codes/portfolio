import React from 'react'
import careerexpo from "../../assets/images/careerexpo.png"
import { FaLink } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

const ProjectCard = () => {
    return (
        <div className="card flex flex-col p-2 border-2 border-gray-200 h-[500px] w-[400px] rounded-xl hover:shadow-custom hover:">
            <div className="image w-full h-[250px] rounded-lg">
                <img src={careerexpo} alt="projectimg" className="w-full h-full bg-no-repeat bg-center rounded-md"></img>
            </div>
            <div className="content flex flex-col mt-2 px-4">
                <h1 className="projectTitle text-[24px] h-[24px] p-0 mt-4 font-inter font-extrabold text-start">
                    CareerExpo
                </h1>
                <h3 className="projectDesc text-[12x] mt-4 pl-0 font-inter font-medium text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente atque distinctio quos inventore repudiandae eveniet laborum quaerat ea. Distinctio facere aliquam, repellendus impedit aut labore explicabo nobis illo ut tempora?</h3>
                <h3 className="projectTech flex flex-row justify-start mt-4">
                    <p className="px-2 py-0 bg-green-800 font-inter text-white text-center text-extrabold text-wrap  text-sm mx-2 ml-0 align-middle">React</p>
                    <p className="px-2 py-0 bg-green-800 font-inter text-white  text-center text-extrabold text-wrap  text-sm mx-2 align-middle">Nodejs</p>
                    <p className="px-2 py-0 bg-green-800 font-inter text-white  text-center text-extrabold text-wrap  text-sm mx-2 align-middle">Expressjs</p>
                    <p className="px-2 py-0 bg-green-800 font-inter text-white text-center text-extrabold text-wrap  text-sm mx-2 align-middle">MongoDb</p>
                </h3>
                <div className="linksn flex flex-row mt-8 justify-between p-0">
                    <a href="https://careerexpo.netlify.app/" target="_blank">
                        <button className="livelink text-blue-400 text-[20px] py-0 font-inter px-2 pl-0 hover:underline flex flex-row gap-2 align-middle justify-center content-center items-center">
                            Live <FaLink className="text-blue-400 text-[20px]" />
                        </button>
                    </a>
                    <a href="https://github.com/veerendra19codes/codestorm_HackHeads" target="_blank">
                        <button className="githublink text-green-400 text-[20px] py-0 font-inter px-2 hover:underline flex flex-row gap-2 align-middle justify-center content-center items-center">
                            <FaCode className="text-green-400 text-[20px]" /> Github
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
