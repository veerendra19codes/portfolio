import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll"

const Navbar = () => {
    const navbarData = [
        {
            id: "1",
            name: "About Me",
            link: "aboutme",
        },
        {
            id: "2",
            name: "Skills",
            link: "skills",
        },
        {
            id: "3",
            name: "Projects",
            link: "project",
        },
        {
            id: "4",
            name: "Contact",
            link: "contact",
        },
    ];

    const [scroll, setScroll] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    return (
        <div className={
            scroll ? "Navbar h-16 w-full fixed top-0 flex transition items-center ease-in-out duration-500 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20 px-32"
                : "Navbar bg-transparent h-16 w-full fixed top-0 transition ease-in-out duration-500 flex items-center z-20 px-32"
        }>
            <div className=" flex justify-between items-center m-0 fixed">

                <div className="Logo">
                    <h2 className="text-2xl font-black text-dark ml-24">Portfolio</h2>
                </div>

                <div className="links flex flex-row items-center justify-center ml-[500px]">
                    {navbarData.map((item) => {
                        return (
                            <div key={item.id}>
                                <Link
                                    to={item.link}
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={50}
                                    duration={500}
                                    isDynamic={true}
                                    ignoreCancelEvents={false}
                                    spyThrottle={500}
                                    className="cursor-pointer text-dark font-inter text-lg font-semibold tracking-tight py-1 px-8 hover:text-blue-500">
                                    {item.name}
                                </Link>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Navbar
