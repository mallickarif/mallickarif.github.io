import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
// import arifimage from "../assets/arifimg.jpg";
import arifimage from "../assets/arifimg.jpg";
// import resume from "../assets/arifresume.pdf";
// import resume from "../assets/arifresume.pdf";
import resume from "../assets/arifresume.pdf.pdf";

const Home = () => {
    return (
      <div  
        name="home"
        className="h-screen w-full bg-gradient-to-r from-sky-400 to-indigo-900"
      >
        <div style={{height:"100"}} className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen  mt-10 mx-10">
            <img
              src={arifimage}
              alt="profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm  <span className="text-black" >Md Arif Eqbal</span> <p className="">Software Developer</p>
            </h2>
            <p className="text-black	 font-bold text-xl  py-4 max-w-md">
              I am passionate about building websites and desgining software.
              I love to work on web application using MERN stack.
            </p>
            
              <div className="portfolio-btn"  >
                <div
                  to="/"
                  smooth
                  duration={500}
                  className="group text-white  w-fit  my-2 flex items-center rounded-md   bg-black cursor-pointer">
              <a href={resume} download className="py-3  px-6 flex" style={{height:"100%",width:"100"}} >
                  Resume
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </a>
                </div>
              </div>
            
          </div>
          
          {/* <div className="big-screen">
            <img 
              src={arifimage}
              alt="profile"
              className="p-10 w-100 h-90 rounded-full"
            />
          </div> */}
          
        </div>
      </div>
    );
  };
  
  export default Home;

