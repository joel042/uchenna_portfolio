import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCard from "./SwiperCard";
import PortFolioDetails from "../assets/PortFolioDetails";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SwiperContainerTwo() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="text-white"
        spaceBetween={20}
        slidesPerView={2}
        navigation
        // scrollbar={{ draggable: true }}
        // pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {PortFolioDetails.map((e) => {
          return (
            <>
              <SwiperSlide key={e.id}>
                <SwiperCard
                  githubLink={e.gitHubLink}
                  demoLink={e.DemoLink}
                  images={e.image}
                  gitHubText={e.text1}
                  demoText={e.text2}
                  description={e.description}
                />
              </SwiperSlide>
            </>
          );
        })}
        {/* <SwiperSlide><SwiperCard/></SwiperSlide>
      <SwiperSlide><SwiperCard/></SwiperSlide> */}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ... */}
      </Swiper>
    </div>
  );
}

export default SwiperContainerTwo;

;
