import React from "react";
import ucheImg from "../assets/uchenna id.jpg";



function SwiperCard({images, demoLink,description, githubLink,gitHubText,demoText}) {
  return (
    <div>
      <div>
        <div className="relative hover:bg-black inline-block">
          <img src={images} alt="" className="w-full h-auto " />
          <div className="absolute  inset-0 flex items-end justify-center">
            <div className="text-whit h-[]  flex-col flex justify-between  border  text-xs bg-black hover:bg-black w-full bg-opacity-60">
              <div className="mb-1 hover:bg-black">
                <h1 className="text-[9px] font-light text-start px-1 hover:bg-black">
                  {description}
                </h1>
              </div>
              <div className="flex ">
                <button className="border w-full hover:bg-red-700">
                  <a href={githubLink}>{gitHubText}</a>
                </button>
                <button className="border-t border-r w-full hover:bg-[#209978] border-b">
                  <a href={demoLink}>{demoText}</a>
                </button>
              </div>

              {/* <button>btn1</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwiperCard;
