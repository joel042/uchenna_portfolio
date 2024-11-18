import React from 'react';
import ucheImg from "../assets/uchenna id.jpg"

function Card() {
  return (
    <div>
      <div className="flex  rounded   flex-col w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
        <div>
          {/* techstack */}
          <div></div>
          {/* image */}
          {/* <div>
            <img src={ucheImg} alt="" />
          </div> */}
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
          <button className=" h-22 text-gray-100 border border-gray-100 flex items-center justify-center">
            ABOUT ME
          </button>
          <button className=" h-[50px] text-gray-100 border border-gray-100 flex items-center justify-center">
            PORTFOLIO
          </button>
        </div>
        <div className="grid grid-cols-1 gap-1 ">
          <button className="bg-red-500 h-[50px] text-white flex items-center justify-center">
            HIRE ME
          </button>
          <button className="bg-red-500 h-[50px] text-white flex items-center justify-center">
            HIRE ME
          </button>
          
        </div>

      </div>
    </div>
  );
}

export default Card