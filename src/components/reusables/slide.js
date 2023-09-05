import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";

export function Slide({children, modules, ...props}) {
    modules = modules || [];
    return (
        <>
        <Swiper
            navigation={true}
            loop={true}
            autoplay={{
                delay: 2500
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation, Pagination, ...modules]}
            {...props}
        >
            {children}
        </Swiper>
        </>
    );
}
