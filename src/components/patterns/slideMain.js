import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styled from 'styled-components';

import { SwiperSlide } from "swiper/react";

import { Slide as SlideTemplate } from "@/components/reusables/slide";

import Image from 'next/image'

import { Container, Stack, Button } from "@mui/material";

import { H1, H4 } from "../design_system/typography";

import { getColor } from "../design_system/colors";

import banner from '@/../public/banner.jpeg';
import instagram from '@/../public/instagram.png';

export const StyledSlide = styled(SlideTemplate)`
    position: relative !important;
    top: -60px;
    left: 0;
    margin-bottom: -60px;
    height: 90vh;
    & .swiper-slide{
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: #000;
        &:before{
            content:'';
            position:absolute;
            left:0; top:0;
            width:100%; height:100%;
            display:inline-block;
            background: linear-gradient(to bottom, rgb(0,0,0,0), rgb(0,0,0));
        }
    }
    & img{
        position: absolute;
        max-width: 2000px;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }
`;

const ButtonStyled = styled(Button)`
    margin-top: 2rem;
    background-color: transparent;
    padding: .5rem 2rem;
    border-color: transparent;
    width: 100px;
    height: 100px;
    & img{
        position: grid;
        place-items: center;
    }
    &:hover{
        background-color: transparent;
        border-color: transparent;
    }
`;

const StackStyled = styled(Stack)`
    position: relative;
`;


export function Slide(props) {
    return (
        <>
            <StyledSlide id="swiper-banner-main">
				<SwiperSlide>
                    <Image src={banner.src} alt="banner-principal" height={400} width={2000} blurDataURL={banner.src} placeholder="blur"/>
                    <Container maxWidth="xl">
                        <StackStyled alignItems='flex-start' justifyContent='center' style={{width: '100%', height: '100%'}}>
                            <H1 color="white" transform="uppercase">
                                Desenvolvedor full-stack
                            </H1>
                            <H4 color="white" transform="none" margin="5px 0 0 0">
                                Um jovem criativo, ambicioso e focado em entregas.
                            </H4>
                            <ButtonStyled margin='40px 0 0 0' variant="outlined">
                                <Image src={instagram.src} alt="banner-principal" height={100} width={100} blurDataURL={instagram.src} placeholder="blur"/>
                            </ButtonStyled>
                        </StackStyled>
                    </Container>
				</SwiperSlide>
			</StyledSlide>
        </>
    );
}