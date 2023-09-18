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
import { H2, H3, Text } from "../design_system/typography";

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
            <Stack justifyContent='center' alignItems='center'>
                <H3 align="center" weight="500" transform="uppercase" size="32pt">Minhas experiencias</H3>
            </Stack>
            <Stack justifyContent='flex-start' alignItems='flex-start'>
                <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <DateStyle>( 2019-2021 )</DateStyle>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="info" variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <H3>Etec João Maria Stevanatto</H3>
                            <UlStyle>
                                <li>
                                    <Text>Ensino médio</Text>
                                </li>
                                <li>
                                    <Text>Curso técnico em Desenvolvimento de Sistemas</Text>
                                </li>
                            </UlStyle>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <DateStyle>( 2022-Cursando )</DateStyle>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="info" variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <H3>Fatec Itapira</H3>
                            <UlStyle>
                                <li>
                                    <Text>Tecnólogo em Desenvolvimento de Sistemas Multiplataforma</Text>
                                </li>
                            </UlStyle>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <DateStyle>( Jun2022-Atual )</DateStyle>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="info" variant="outlined" />
                        </TimelineSeparator>
                        <TimelineContent>
                            <H3>Encora Brazil Division</H3>
                            <UlStyle>
                                <li>
                                    <Text>Estágio em Cloud Software Engineer</Text>
                                </li>
                            </UlStyle>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Stack>
        </section>
        </>
    );
}
