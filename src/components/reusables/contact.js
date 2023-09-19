import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, TextareaAutosize } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { getColor } from "../design_system/colors";
import { H3, Text } from "../design_system/typography";

const SectionStyled = styled.section`
    position: relative;
    height: 40vh;
    & > div {
        height: 100%;
        padding: 5rem 0;
        position: relative;
        max-width: 1000px !important;
        margin: 0 auto;
    }
`;

const ButtonStyled = styled(Button)`
    background-color: ${getColor('primary-200')};
    &:hover{
        background-color: ${getColor('primary-300')};
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    }
`;

export const TextFieldStyled = styled(TextField)`
    background-color: ${getColor('white')};
    color: ${getColor('white')};
    & label.Mui-focused {
        color: ${getColor('primary-200')};
    }
    & label.Mui-focused ~ div::after{
        border-color: ${getColor('primary-200')};
    }
`;

const StyledTextarea = styled(TextareaAutosize)(
    () => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${getColor('gray-300')};
    border-bottom: 1px solid ${getColor('gray-200')};
    outline: 0;
    background-color: ${getColor('white')};
`,
);

export default function Contact(){
    return (
        <>
            <SectionStyled>
                <Stack justifyContent='space-around' alignItems='flex-start'>
                    <H3 align="center" weight="500" transform="uppercase" size="32pt">Peça agora mesmo um orçamento</H3>
                    <Stack direction="row" gap="1rem" style={{width: '100%'}}>
                        <TextFieldStyled
                            id="outlined-basic"
                            label="Seu nome"
                            sx={{width: '100%' }}
                        />
                        <TextFieldStyled
                        id="outlined-basic"
                        label="Seu e-mail"
                        sx={{width: '100%' }}
                        />
                    </Stack>
                    <Stack direction="row" gap="1rem" style={{width: '100%'}}>
                        <StyledTextarea
                            placeholder="Digite uma mensagem"
                        />
                    </Stack>
                    <ButtonStyled variant="contained">Quero receber um orçamento</ButtonStyled>
                </Stack>
            </SectionStyled>
        </>
    );
}