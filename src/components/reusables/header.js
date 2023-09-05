import React, {use, useState} from 'react';
import { Container, Stack } from '@mui/material';
import styled from 'styled-components';

import logo from '@/../public/logo.svg'

import { getColor } from '@/components/design_system/colors'

import { Text } from '@/components/design_system/typography'

import Link from '@/components/infra/link'

import { useScrollPosition } from '@/hooks/useScrollPosition';
import Image from 'next/image';


const HeaderStyled = styled.header`
    background-color: ${getColor('black')};
    top: 2rem;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    position: relative;
    z-index: 99 !important;
    transition: .3s;
    & .logo{
        display: flex;
        align-items: center;
        &:hover{
            background: transparent;
        }
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    .nav-link{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90%;
        padding: 1rem;
        border-radius: 8px;
        &:hover{
            background: ${getColor('gray-200')};
        }
        &.menu{
            position: relative;
            &::after{
                content: ' ';
                width: 0;
                height: 2px;
                background-color: ${getColor('primary-100')};
                position: absolute;
                bottom: 6px;
                border-radius: 8px;
                transition: .5s all;
            }
            &:hover{
                background: transparent;
                &::after{
                    width: 90%;
                }
            }
        }
        &.menu p{
            text-transform: uppercase;
            color: ${getColor('white')};
        }
        
    }
    
`;

export default function Header() {

    const scrollPosition = useScrollPosition();

    return (
        <>
            <Container component={HeaderStyled} maxWidth="xl"
                style={{
                    maxWidth: scrollPosition > 80 && '100%',
                    position: scrollPosition > 80 && 'sticky',
                    borderRadius: scrollPosition > 80 && 0,
                    top: scrollPosition > 80 && 0
                }}>
                <Stack
                direction='row'
                justifyContent='space-between'
                alignContent='center'
                spacing={2}
                width='100%'
                >
                    <Link href="/" className="nav-link logo">
                        <Image src={logo.src} height={37} width={152} alt='qrcode_image' />
                    </Link>
                    <Nav>
                        <Link href="/" className="nav-link menu">
                            <Text>
                                Experiências
                            </Text>
                        </Link>
                        <Link href="/" className="nav-link menu">
                            <Text>
                                Habilidades
                            </Text>
                        </Link>
                        <Link href="/" className="nav-link menu">
                            <Text>
                                Serviços
                            </Text>
                        </Link>
                        <Link href="/" className="nav-link menu">
                            <Text>
                                contato
                            </Text>
                        </Link>
                    </Nav>
                </Stack>
            </Container>
        </>
    )
}