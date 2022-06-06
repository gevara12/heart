import * as React from "react";
import {useSelector} from "react-redux";

import {Container, Box, useMediaQuery, useTheme, Button, Typography, Stack} from '@mui/material';
import {LoginWall} from "@features/LoginWall";
import {getCurrentUser} from "@store/auth/selectors";


export default function AuthBlock() {
    const { breakpoints } = useTheme();
    const isTablet = useMediaQuery(breakpoints.down('md'));
    const currentUser = useSelector(getCurrentUser);

    return (
        <Container maxWidth="lg">
            { currentUser ? (
                <Box sx={{ mt:isTablet?10.5:27.5, mb:isTablet?10:27.5 }}>
                    <Typography variant={isTablet? 'h6':'h3'} sx={{mb:isTablet?4:6.5, textAlign:'center'}}>Рады новым встречам</Typography>
                    <Stack direction={'column'} sx={{maxWidth:'360px', mx:'auto'}}>
                        <Button variant={'contained'} size={isTablet?'medium':'large'} onClick={()=>{}}>Перенести объявления</Button>
                        <Typography variant={isTablet? 'body2':'body1'} sx={{my:isTablet?1.5:2.5, textAlign:'center'}}>или</Typography>
                        <Button variant={'outlined'} size={isTablet?'medium':'large'} onClick={()=>{}}>Опубликовать вручную</Button>
                    </Stack>
                </Box>
            ) : (
                <LoginWall />
            )}
        </Container>
    );
};