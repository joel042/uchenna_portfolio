import React from "react";
import ucheImg from "../assets/uchenna id.jpg";
import { NavLink } from "react-router-dom";

function Card() {
  return (
    <div className="flex justify-center">
      <div className="flex  flex-col w-[90%] sm:max-w-96 mt-8 gap-4 text-gray-800">
        <div>
          <div className="relative inline-block">
            <img src={ucheImg} alt="" className="w-full h-auto" />
            <div className="absolute  inset-0 flex items-end justify-center">
              <span className="text-white h-14 text-center font-semibold text-3xl bg-black w-full bg-opacity-60 p-3">
                UCHENNA JOEL EZE
              </span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <NavLink
            to="/about"
            className=" h-[50px] text-gray-100 border border-gray-100 flex items-center justify-center"
          >
            <button>ABOUT ME</button>
          </NavLink>
          <NavLink
            to="/Portfolio"
            className=" h-[50px] text-gray-100 border border-gray-100 flex items-center justify-center"
          >
            <button>PORTFOLIO</button>
          </NavLink>
        </div>
        <div className="grid grid-cols-1 gap-1 ">
          {/* <button className="bg-red-700 button h-[50px] text-white flex items-center justify-center">
           DOWNLOAD CV
          </button> */}

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
        </div>
      </div>
    </div>
  );
}

export default Card;
