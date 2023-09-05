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

export const StyledSlide = styled(SlideTemplate)`
    position: relative !important;
    top: -60px;
    left: 0;
    margin-bottom: -60px;
    height: 90vh;
    & .swiper-slide{
        display: flex;
        justify-content: center;
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
    background-color: ${getColor('white')};
    padding: .5rem 2rem;
    &:hover{
        background-color: ${getColor('gray-100')};
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    }
`;


export function Slide(props) {
    return (
        <>
            <StyledSlide id="swiper-banner-main">
				<SwiperSlide>
                    <Image src={banner.src} alt="banner-principal" height={400} width={2000} blurDataURL={banner.src} placeholder="blur"/>
                    <Container maxWidth="xl">
                        <Stack alignItems='flex-start' justifyContent='center' style={{width: '100%', height: '100%'}}>
                            <H1 color="white" transform="uppercase">
                                O Melhor do seu verão <br /> é aqui
                            </H1>
                            <H4 color="white" transform="none" margin="5px 0 0 0">
                                Entre no clima do verão com as roupas <br /> mais estilosas da estação.
                            </H4>
                            <ButtonStyled margin='40px 0 0 0' variant="outlined">EU QUERO!</ButtonStyled>
                        </Stack>
                    </Container>
				</SwiperSlide>
			</StyledSlide>
        </>
    );
}