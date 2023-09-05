import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";

export function Slide({children, modules, ...props}) {
    modules = modules || [];
    return (
        <>
        <Swiper
            slidesPerView={props.slidesPerView ? props.slidesPerView : "auto"}
            freeMode={props.freeMode ? props.freeMode : true}
            loop={true}
            spaceBetween={30}
            autoplay={{
                delay: 2500
            }}
            pagination={{
            clickable: true,
            }}
            modules={[FreeMode, ...modules]}
            className="swiper-tecnologies"
            {...props}
        >
            {children}
        </Swiper>
        </>
    );
}