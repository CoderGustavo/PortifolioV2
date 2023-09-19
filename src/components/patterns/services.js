import Grid from '@mui/material/Unstable_Grid2';
import Link from '@/components/infra/link';
import styled from 'styled-components';
import Image from 'next/image'

import { H1, H3, H4, Text } from '@/components/design_system/typography'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { getColor } from '../design_system/colors';

const CatMainStyled = styled.div`
    position: relative;
    a{
        position: relative;
        img{
            border-radius: 8px;
            position: static !important;
        }
    }
`;

const Services = () => {
    return (
        <>
            <section style={{padding: "2rem 0"}}>
                <Grid container spacing={4} component={CatMainStyled}>
                    <Grid xs={12}>
                        <H3 align="center" weight="500" transform="uppercase" size="32pt" >Serviços</H3>
                    </Grid>
                    <Grid xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="300"
                                image="/example.png"
                                alt="green iguana"
                                />
                                <CardContent style={{background: getColor('black'), color: getColor('white')}}>
                                    <Typography variant="h5">
                                        Desenvolvimento de landing page e página institucional
                                    </Typography>
                                    <Typography variant="body2">
                                        Página simples de venda de algum produto ou uma página simples sobre você ou sua impresa.
                                    </Typography>
                                    <ul>
                                        <li>Site 24/7 online</li>
                                    </ul>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="300"
                                image="/example.png"
                                alt="green iguana"
                                />
                                <CardContent style={{background: getColor('black'), color: getColor('white')}}>
                                    <Typography variant="h5">
                                        Desenvolvimento de sistemas simplificados
                                    </Typography>
                                    <Typography variant="body2">
                                        Sistema com poucas funcionalidades, como um sistema de estoque simples para armazenamento de produto
                                    </Typography>
                                    <ul>
                                        <li>Site 24/7 online</li>
                                        <li>Suporte</li>
                                    </ul>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="300"
                                image="/example.png"
                                alt="green iguana"
                                />
                                <CardContent style={{background: getColor('black'), color: getColor('white')}}>
                                    <Typography variant="h5">
                                        Desenvolvimento de sistemas complexos
                                    </Typography>
                                    <Typography variant="body2">
                                        Sistema com várias funcionalidades, como um sistema ERP onde possui várias funcionalidades e interligações entre dados.
                                    </Typography>
                                    <ul>
                                        <li>Site 24/7 online</li>
                                        <li>App 24/7 online</li>
                                        <li>Suporte</li>
                                    </ul>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </section>
        </>
    );
}

export default Services;