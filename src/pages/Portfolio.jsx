import React from 'react';
import { NavLink } from 'react-router-dom';
import SwiperContainer from '../components/SwiperContainer';
import DigitalClock from '../components/Time';



function Portfolio() {
  return (
    <div>
      <div className="flex  rounded  flex-col w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
        <p className="text-white text-4xl border-b">PORTFOLIO</p>
        {/* slider  */}
        <SwiperContainer />

        <div>
          <DigitalClock />
        </div>

        <div className="grid grid-cols-1 gap-1 ">
          <a
            href="https://drive.google.com/file/d/1pb7_6o-lsAnhqJcXSKV1S-dLxqQSlRfi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            type="button"
          >
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
          </a>
          <NavLink
            to="/contact"
            className="bg-red-700 hover:bg-red-800 transition duration-200 font-semibold h-[50px] text-white flex items-center justify-center"
          >
            HIRE ME
          </NavLink>
          <div className="flex justify-between mb-2 ">
            <div>
              <NavLink to="/" className="text-white underline text-xs">
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/contact"
                className="text-white  justify-end underline text-xs"
              >
                Contact Me
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio