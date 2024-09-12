import React from "react";
import Wanderlust from "../assets/Wanderlust.png";
import Weatherapp from "../assets/weather.jpg";
import Spotifyclone from "../assets/Spotify.jpg";
import simongame from "../assets/simons.jpeg";


const Portfolio = () => {
    const projects = [
  
      {
        id: 1,
        src: Wanderlust,
        title: "Wanderlust",
        techStack:"HTML| CSS| NODEJS| EXPRESS| MONGODB",
        desc: "This is Airbnb website with multiple features like booking, geolocation.",
        link: "https://my-new-project.onrender.com/listings",
        repo: "https://github.com/mallickarif/my-new-project.git",
      },
  
      {
        id: 2,
        src: Weatherapp,
        title: "Weather App",
        techStack:"REACT| JavaScript | Tailwind | Material UI ",
        desc: "This is the weather app to allows users to check the current weather conditions.",
        link: "https://weatherappp32312.netlify.app/",
        repo: "https://github.com/mallickarif/Weather-app.git",
      },
  
      {
        id: 3,
        src: Spotifyclone,
        title: "Spotify Clone",
        techStack:"HTML| CSS|BOOTSTRAP",
        desc: "This is a basic music streaming app designed and user experience to Spotify.",
        link: "https://spotifycloneooooo.netlify.app/",
        repo: "https://github.com/mallickarif/Spotify-Clone.git",
      },
      {
        id: 4,
        src: simongame,
        title: "simon says game",
        techStack:"HTML | CSS | JavaScript",
        desc: "This is the Simon says game for user to play and score.",
        link: "https://simon-says12.netlify.app/",
        repo: "https://github.com/mallickarif/Simon-Says.git",
      },
      // {
      //   id: 7,
      //   src: Men,
      //   title: "Mytheresa Clone",
      //   techStack:"HTML|CSS |JS",
      //   desc: "Mytheresa is an online shopping destination for children's, men's, and women's luxury fashion and lifestyle design",
      //   link: "https://illustrious-pasca-32510e.netlify.app/",
      //   repo: "https://github.com/br-lovanshi/mytheresa.com",
      // },
  
    ];
  
    return (
      <div
        name="projects"
        className="w-full h-100 bg-gradient-to-l from-sky-400 to-indigo-900 py-10">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6 text-xl"><b>Check out some of my work right here</b></p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
            {projects.map(({ id, src, link, repo,title,desc,techStack }) => (
              <div key={id} className="shadow-md shadow-gray-600 bg-black rounded-lg">
                <img
                  src={src}
                  alt="projects"
                  className="rounded-md duration-200 hover:scale-105 h-60 w-full  object-cover"
                />
                <div className="text-2xl text-slate-300 text-center">{title}</div>
                <div className="mt-2 p-4 text-slate-300 text-lg">{desc}</div>
                <p className="text-center pt-4 text-slate-300	font-medium	text-xl	">Tech Stack: 
                {techStack}</p>
  
                  
                <div className="flex items-center justify-center">
                  <button
                    className="w-24 padding-left: 1.5rem padding-right: 1.5rem/ pl-4  padding-top: 0.75rem
                    padding-bottom: 0.75rem m-4 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                    onClick={() => window.open(link, "_blank")}>
                    Live
                  </button>
                  <button
                    className="w-24 padding-left: 1.5rem padding-right: 1.5rem/ pl-4  padding-top: 0.75rem
                    padding-bottom: 0.75rem m-4 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.open(repo, "_blank")}>
                    Github
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;