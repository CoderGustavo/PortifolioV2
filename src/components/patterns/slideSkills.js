import React from 'react';

import { Slide as SlideTecnologies } from '@/components/reusables/slideTecnologies';
import { SwiperSlide } from 'swiper/react';


import Image from 'next/image';

import { H3 } from '../design_system/typography';
import { Stack } from '@mui/material';

import html from '@/../public/technologies/html.png';
import css from '@/../public/technologies/css.png';
import js from '@/../public/technologies/js.png';
import react from '@/../public/technologies/react.png';
import nextjs from '@/../public/technologies/nextjs.png';
import php from '@/../public/technologies/php.png';
import python from '@/../public/technologies/python.png';
import sql from '@/../public/technologies/sql.png';
import mongodb from '@/../public/technologies/mongodb.png';
import git from '@/../public/technologies/git.png';
import github from '@/../public/technologies/github.png';
import docker from '@/../public/technologies/docker.png';
import styled from 'styled-components';


const SlideTecnologiesStyle = styled(SlideTecnologies)`
    & img{
        filter: sepia(120%) hue-rotate(150deg) contrast(120%) saturate(5);
    }
`;

export default function SlideSkills(props) {

	return (
		<>
            <section>
                <Stack alignItems="center" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
                    <H3 align="center" weight="500" transform="uppercase" size="32pt" >Tecnologias conhecidas</H3>
                </Stack>
                <SlideTecnologiesStyle slidesPerView="5" style={{paddingBottom: "2rem"}}>
                    <SwiperSlide>
                        <Image src={html.src} alt="html" width={200} height={300} style={{objectFit: "contain"}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={css.src} alt="css" width={200} height={300} style={{objectFit: "contain"}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={js.src} alt="js" width={200} height={300} style={{objectFit: "contain"}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={react.src} alt="react" width={200} height={300} style={{objectFit: "contain"}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={nextjs.src} alt="nextjs" width={200} height={300} style={{objectFit: "contain"}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={python.src} alt="python" width={200} height={300} style={{objectFit: "contain"}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={php.src} alt="php" width={200} height={300} style={{objectFit: "contain"}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={sql.src} alt="sql" width={200} height={300} style={{objectFit: "contain"}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={mongodb.src} alt="mongodb" width={200} height={300} style={{objectFit: "contain"}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={git.src} alt="git" width={200} height={300} style={{objectFit: "contain"}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={github.src} alt="github" width={200} height={300} style={{objectFit: "contain"}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={docker.src} alt="docker" width={200} height={300} style={{objectFit: "contain"}}/>
                    </SwiperSlide>
                </SlideTecnologiesStyle>
            </section>
		</>
	)
}