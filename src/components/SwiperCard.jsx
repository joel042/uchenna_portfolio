import React from 'react';
import ucheImg from '../assets/uchenna id.jpg'

function SwiperCard() {
  return (
    <div>
      <div>
        <div className="relative inline-block">
          <img src={ucheImg} alt="" className="w-full h-auto" />
          <div className="absolute  inset-0 flex items-end justify-center">
            <div className="text-white h-14 text-center grid grid-cols-2  text-lg bg-black w-full bg-opacity-60">
                <button>btn2</button>
                <button>btn1</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="relative flex w-50 flex-col  bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-8 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              type="button"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Read More
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default SwiperCard