import React from 'react';

import { Slide as SlideTecnologies } from '@/components/reusables/slideTecnologies';
import { SwiperSlide } from 'swiper/react';


import Image from 'next/image';

import html from '@/../public/technologies/html.png';
import { H3 } from '../design_system/typography';
import { Stack } from '@mui/material';


export default function SlideSkills(props) {

	return (
		<>
            <section>
                <Stack alignItems="center">
                    <H3 align="center" weight="500" transform="uppercase" size="32pt" >Tecnologias conhecidas</H3>
                </Stack>
                <SlideTecnologies slidesPerView="5" >
                    <SwiperSlide>
                        <Image src={html.src} alt="banner-principal" height={200} width={200} blurDataURL={html.src} placeholder="blur"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={html.src} alt="banner-principal" height={200} width={200} blurDataURL={html.src} placeholder="blur"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={html.src} alt="banner-principal" height={200} width={200} blurDataURL={html.src} placeholder="blur"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={html.src} alt="banner-principal" height={200} width={200} blurDataURL={html.src} placeholder="blur"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={html.src} alt="banner-principal" height={200} width={200} blurDataURL={html.src} placeholder="blur"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={html.src} alt="banner-principal" height={200} width={200} blurDataURL={html.src} placeholder="blur"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={html.src} alt="banner-principal" height={200} width={200} blurDataURL={html.src} placeholder="blur"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={html.src} alt="banner-principal" height={200} width={200} blurDataURL={html.src} placeholder="blur"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={html.src} alt="banner-principal" height={200} width={200} blurDataURL={html.src} placeholder="blur"/>
                    </SwiperSlide>
                </SlideTecnologies>
            </section>
		</>
	)
}