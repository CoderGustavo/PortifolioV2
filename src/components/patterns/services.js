import Grid from '@mui/material/Unstable_Grid2';
import Link from '@/components/infra/link';
import styled from 'styled-components';
import Image from 'next/image'

import { H1, Text } from '@/components/design_system/typography'

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
            <Grid container spacing={4} component={CatMainStyled}>
                <Grid xs={12}>
                    <H1 align="center" weight="500" transform="uppercase" size="32pt" >Serviços</H1>
                </Grid>
                <Grid xs={4}>
                    <Link href='/' className='' >
                        <Image src='/example.png' alt="categoria-um" fill blurDataURL='/example.png' placeholder="blur" />
                    </Link>
                </Grid>
                <Grid xs={4}>
                    <Link href='/' className=''>
                        <Image src='/example.png' alt="categoria-dois" fill blurDataURL='/example.png' placeholder="blur" />
                    </Link>
                </Grid>
                <Grid xs={4}>
                    <Link href='/' className=''>
                        <Image src='/example.png' alt="categoria-dois" fill blurDataURL='/example.png' placeholder="blur" />
                    </Link>
                </Grid>
            </Grid>
        </>
    );
}

export default Services;