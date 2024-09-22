import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
// import resume from "../assets/arifresume.pdf";
import resume from "../assets/Md_Arif_Eqbal_updatedCV._.pdf";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "about",
        },
        {
          id: 3,
          link: "experience",
        },
        {
          id: 4,
          link: "projects",
        },
        {
          id: 5,
          link: "skills",
        },
        // {
        //   id: 6,
        //   link: "statistics",
        // },
        {
          id: 7,
          link: "contact",
        },
    
      ];
    
      useEffect(() => {
        Events.scrollEvent.register("begin", () => { });
        Events.scrollEvent.register("end", () => { });
        scrollSpy.update();
    
        return () => {
          Events.scrollEvent.remove("begin");
          Events.scrollEvent.remove("end");
        };
      }, []);
    
      const handleSetActive = (to) => {
        setActiveSection(to);
      };
    
      return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
          <div>
            <h1 className="text-5xl font-signature ml-2">
              <a className="link-underline link-underline-black text-sky" target="_blank" rel="noreferrer">
                Md Arif Eqbal
              </a>
            </h1>
          </div>
    
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className={`nav-links px-4 cursor-pointer capitalize ${activeSection === link ? "text-sky-900" : "text-white"
                  } hover:scale-105 hover:text-sky-900 font-medium duration-200 link-underline`}
              >
                <Link offset={-100} to={link} smooth duration={500} spy={true} onSetActive={handleSetActive}>
                  {link}
                </Link>
              </li>
            ))}
            <li
              className="nav-links px-4 cursor-pointer capitalize font-weight:500  text-black-500 hover:scale-105 hover:text-sky-900 duration-200 link-underline"
            >
              <a
                href={"https://drive.google.com/file/d/159oJP21oW2SDyS7yiCqFnDU0xKPVSqzO/view?usp=drive_link"}
                target="_blank" rel="noreferrer"
              >
                resume 
              </a>
            </li>
          </ul>
    
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
    
          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
              {links.map(({ id, link }) => (
                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                  <Link
                    offset={-100}
                    onClick={() => {
                      setNav(!nav);
                      scroll.scrollTo(link);
                    }}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    };
    
    export default NavBar;