import * as React from "react";
import {useSelector} from "react-redux";

import {Box, Button, Container, useMediaQuery, useTheme} from "@mui/material";
import {getCurrentUser} from "@store/auth/selectors";


export default function HomeHero() {
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));
    const currentUser = useSelector(getCurrentUser);

    return (
        <Container maxWidth='lg'>
            <Box sx={{textAlign:'center', padding:isMobile? '52px 0':'194px 0 255px'}}>
                <Box sx={isMobile?{fontWeight: '500', fontSize: '24px',lineHeight: '32px', maxWidth:'288px', margin:'0 auto'}:{fontWeight: '500', fontSize: '60px',lineHeight: '72px', letterSpacing: '-0.5px', maxWidth:'864px', margin:'0 auto'}}>Размещайте объявления с <span style={{color:"#00A699"}}>подтвержденным рейтингом</span> и без комиссии</Box>
                {currentUser
                    ? <Button variant={'contained'} sx={{mt:4}}>Сдать жилье</Button>
                    : <Button variant={'contained'} sx={{mt:4}}>Зарегистрироваться</Button>}
            </Box>
        </Container>
    )
}