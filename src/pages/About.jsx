import React from "react";
import ucheImg from "../assets/uchenna id.jpg";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="flex  rounded  flex-col w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
        <div>
          {/* image */}
          {/* <div>
            <img src={ucheImg} alt="" />
          </div> */}
        </div>

        {/* about me  */}
        <div className="grid grid-cols-2 gap-2">
          <NavLink
            to="/"
            className="h-[200px] p-2 text-gray-100 border border-gray-100 flex flex-col"
          >
            <h2 className="px-1">&lt;Introduction /&gt;</h2>
            <div className=" grid grid-cols-1  gap-1 p-1 text-xs">
              <p className="border  p-1">
                My name is Uchenna Joel Eze I am a results-driven Website
                Developer with expertise in front-end and back-end technologies,
                including React.js, Node.js, Express.js, and MongoDB.
              </p>
            </div>
          </NavLink>
          <NavLink
            to="/"
            className=" h-[200px] text-gray-100 border border-gray-100 flex "
          >
            <img src={ucheImg} alt="" />
          </NavLink>
        </div>

        {/* my tech stack       */}

        <div></div>
        <div className="grid grid-cols-2 gap-2">
          <NavLink
            to="/"
            className=" h-[15rem] p-2 text-gray-100 border border-gray-100 flex flex-col  "
          >
            <h2 className="px-1">&lt;My Tech Stack /&gt;</h2>
            <ul className=" grid grid-cols-2 text-center gap-1 p-1 text-xs">
              <li className="border  ">React</li>
              <li className="border ">Next.js</li>
              <li className="border ">JavaScript</li>
              <li className="border ">Tailwind</li>
              <li className="border ">Bootstrap</li>
              <li className="border ">Git</li>
              <li className="border ">GitHub</li>
              <li className="border ">WordPress</li>
              <li className="border ">Node.js</li>
              <li className="border ">Express.js</li>
              <li className="border ">MongoDB</li>
              <li className="border ">Firebase</li>
              <li className="border ">Vscode</li>
            </ul>
          </NavLink>
          <NavLink
            to="/"
            className=" h-[50px] text-gray-100 border border-gray-100 flex "
          >
            <img src={ucheImg} alt="" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 gap-1 ">
          <button className="button" type="button">
            <span className="button__text">DOWNLOAD CV</span>
            <span className="button__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                id="bdd05811-e15d-428c-bb53-8661459f9307"
                data-name="Layer 2"
                className="svg"
              >
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
              </svg>
            </span>
          </button>
          <button className="bg-red-700 font-semibold h-[50px] text-white flex items-center justify-center">
            HIRE ME
          </button>
          <div className="flex justify-between mb-2 ">
            <div>
              <NavLink to="/" className="text-white underline text-xs">
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/"
                className="text-white  justify-end underline text-xs"
              >
                Next
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
