import React from "react";
import { useRouter } from "next/router";
import Head from "@/components/infra/head";
import Header from "@/components/reusables/header";
import { StyledSlide as SlideMain } from "@/components/patterns/slideMain"
import styled from "styled-components";
import modelo from '@/../public/masculino.png';
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Container, Stack } from "@mui/material";
import { H1, Text } from "@/components/design_system/typography";
import { GridProducts } from '@/components/reusables/gridProducts';

const StyledSlide = styled(SlideMain)`
    height: 45vh;
`;

export default function Categorias(props) {
    const router = useRouter();
    const name = router.query.name.includes('-') ? router.query.name.replaceAll('-', ' ') : router.query.name;
    return (
        <>
            <Head />
			<Header />
            <StyledSlide>
                <SwiperSlide>
                    <Image src={modelo.src} alt="banner-principal" height={400} width={2000} blurDataURL={modelo.src} placeholder="blur"/>
                    <Container maxWidth="xl">
                        <Stack alignItems='flex-start' justifyContent='flex-end' style={{width: '100%', height: '100%', paddingBottom: '40px'}}>
                            <H1 transform="uppercase">
                                {name}
                            </H1>
                            <Text size='lg' weight={500} as='h2' transform="none" margin="5px 0 0 0">
                                Cuidar de si mesmo não é um luxo, é uma necessidade...
                            </Text>
                        </Stack>
                    </Container>
                </SwiperSlide>
            </StyledSlide>
            <section>
				<Container maxWidth="xl">
                    <GridProducts title={name} slide={false} products={props.products} />
                </Container>
            </section>
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: [{
            params:
            {
                name: 'Inverno',
                img: ''
            },
            params:{
                name: 'Verão',
                img: ''
            },
            params:{
                name: 'Masculino',
                img: ''
            },
            params:{
                name: 'Feminino',
                img: ''
            },
            params:{
                name: 'Infantil',
                img: ''
            },
        }],
        fallback: 'blocking',
    }
}


export async function getStaticProps(context) {

	const products = await fetch('https://dummyjson.com/products')
	.then(res => res.json())
	.then(json => json.products);

	return {
		props: {
			products
		},
	}
}
