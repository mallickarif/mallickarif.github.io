import React from "react";
// import html from "../assets/html.png";
import html from "../assets/HTML.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/React.png";
import github from "../assets/github.jpeg";
import node from "../assets/Node.png";
import express from "../assets/expressjs.png";
import aws from "../assets/AWS.png";
// import node from "../assets/node.png";
// import Next from "../assets/Nextjs.png";
// import express from "../assets/express.png";
import mongodb from "../assets/Mongodb.png";
import nextjs from "../assets/Nextjs.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
// import aws from "../assets/AWS.png";
import redis from "../assets/redis.png";
import sql from "../assets/Sql.png";
import docker from "../assets/docker.png";
import softskill from "../assets/softskill.png";


const Skills = () => {
    const techs = [
      {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
      {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500",
      },
      {
        id: 4,
        src: reactImage,
        title: "React",
        style: "shadow-blue-600",
      },
      {
        id: 5,
        src: github,
        title: "GitHub",
        style: "shadow-gray-400",
      },
      
      {
        id: 14,
        src: mongodb,
        title: "MongoDB",
        style: "shadow-green-500",
      },
      {
        id: 15,
        src: node,
        title: "Node js",
        style: "shadow-green-500",
      },
      {
        id: 16,
        src: express,
        title: "Express",
        style: "shadow-gray-400",
      },
      {
        id: 14,
        src: nextjs,
        title: "Next.js",
        style: "shadow-blue-500",
      },
      {
          id: 14,
          src: aws,
          title: "AWS",
          style: "shadow-blue-500",
        },
        {
          id: 14,
          src: redis,
          title: "Redis",
          style: "shadow-blue-500",
        },
        {
          id: 14,
          src: sql,
          title: "SQL",
          style: "shadow-blue-500",
        },
        {
          id: 14,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-blue-500",
        },
        {
          id: 14,
          src: redux,
          title: "Redux",
          style: "shadow-blue-500",
        },
        {
          id: 14,
          src: docker,
          title: "Docker",
          style: "shadow-blue-500",
        },
        {
          id: 14,
          src: softskill,
          title: "Softskill",
          style: "shadow-blue-500",
        },

    ];
  
    return (
      <div
        name="skills"
        className=" w-full h-100  bg-black text-white ptop py-10"
      >
        <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Skills
            </p>
            <p className="py-6">
              These are the technologies I've worked with and used them in my
              projects.
            </p>
          </div>
  
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
