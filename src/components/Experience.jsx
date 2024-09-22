import React from "react";
import "./style/Experience.css";

const Experience = () => {
    return (
      <div  name="experience" className="w-full bg-black text-white py-10">
        <div className="max-w-screen-lg p-4 mx-auto card-wrapper">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              <span style={{ borderBottom: '2px solid white' }}>Experience- 3+ Years </span>
            </p>
          </div>
          <p className='text-xl'>(Software Developer)</p>
          <div className='flex items-center'>
            <h1 className="text-4xl font-bold">
              STEP TO SOFT PVT LTD
            </h1>
          </div>
          <div className="mt-5">
            <p className='text-xl'>Key Responsibilities:</p>
            <ul className="list-disc ml-8 text-lg leading-loose">
              <li>As a backend developer responsible for creating REST APIs. Design and implement server-side logic.</li>
              <li>Assisting in bug fixing and issues resolution by client's. </li>
              <li>Developing and maintaining features based on clients requirements and specifications. </li>
              <li>Participating in code reviews, testing, and documentation to
              ensure code quality and project Integrity.</li>
              <li>Worked with Client's and project teams to understand the needs and provide features that helps attracting the customer's and more revenue.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;