import React from "react";
// import arifimage from "../assets/arifimg.jpg";

const About = () => {
    return (
      <div
        name="about"
        className="w-full h-100 bg-black-bg-sky-900 text-white about py-10"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About Me
            </p>
          </div>

  
          <p className="text-xl mt-5">
          "NodeJs Developer with Extensive Expertise in RDBMS, MongoDB, JavaScript, and AWS for Data-Driven solutions.
           Ability to lead both the frontend and the backend team". 
          </p>
          <br />
        </div>
      </div>
    );
  };

export default About;