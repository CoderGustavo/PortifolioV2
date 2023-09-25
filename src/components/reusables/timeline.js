import { Stack } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import React from "react";
import styled from "styled-components";
import { getColor } from "../design_system/colors";
import { H3, Text } from "../design_system/typography";
import Image from "next/image";

const DateStyle = styled.span`
    color: ${getColor('primary-100')};
    font-size: 14pt;
`;

const UlStyle = styled.ul`
    color: ${getColor('primary-100')};
    font-size: 14pt;
    padding-left: 3rem;
    padding-bottom: 4rem;
    padding-top: 1rem;
`;

export default function TimelineSection() {
    return (
        <>
        <section>
            <Stack justifyContent='center' alignItems='center' style={{paddingTop: "2rem", paddingBottom: "1rem"}}>
                <H3 align="center" weight="500" transform="uppercase" size="32pt">Minhas experiencias</H3>
            </Stack>
            <Stack justifyContent='flex-start' alignItems='flex-start' style={{paddingBottom: "2rem"}}>
                <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <DateStyle>( Fev2019-Dez2021 )</DateStyle>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="info" variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div>
                                <H3>Etec João Maria Stevanatto</H3>
                                <UlStyle>
                                    <li>
                                        <Text>Ensino médio</Text>
                                    </li>
                                    <li>
                                        <Text>Curso técnico em Desenvolvimento de Sistemas</Text>
                                    </li>
                                </UlStyle>
                            </div>
                            <div>
                                <Image src="/etec.jpg" width={500} height={300}></Image>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <DateStyle>( Fev2022-Cursando )</DateStyle>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="info" variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div>
                                <H3>Fatec Itapira</H3>
                                <UlStyle>
                                    <li>
                                        <Text>Tecnólogo em Desenvolvimento de Sistemas Multiplataforma</Text>
                                    </li>
                                </UlStyle>
                            </div>
                            <div>
                                <Image src="/fatec.png" width={500} height={300}></Image>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <DateStyle>( Jul2022-Atual )</DateStyle>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="info" variant="outlined" />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div>
                                <H3>Encora Brazil Division</H3>
                                <UlStyle>
                                    <li>
                                        <Text>Estágio em Cloud Software Engineer</Text>
                                    </li>
                                </UlStyle>
                            </div>
                            <div>
                                <Image src="/encora.webp" width={500} height={300}></Image>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Stack>
        </section>
        </>
    );
}
