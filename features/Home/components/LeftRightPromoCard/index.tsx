import * as React from "react";
import {Box, Button, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";


export default function LeftRightPromoCard({ card, reverse=false }:any) {
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <Stack direction={isMobile?'column':'row'} sx={{}} spacing={{xs:isMobile?2.5:'60px'}}>
            { (isMobile || !reverse) ? (
                <Box sx={{flex:'1 1 50%',}}>
                    <Typography variant={isMobile ? 'h6' :'h4'} dangerouslySetInnerHTML={{__html:card.title}}/>
                    <Typography variant={isMobile? 'body2':'body1'} sx={{mt:isMobile?1:2.5}}>{card.desc}</Typography>
                    <Button variant={'outlined'} sx={{mt:isMobile?1.5:4}}>Перенести данные</Button>
                </Box>
            ):(
                <Box sx={{flex:'1 1 50%', background: 'linear-gradient(246.96deg, #E3EEFF 0%, #F3E7E9 100%)', borderRadius: '20px'}}>
                    <img style={{display: 'block', height:isMobile?'288px':'360px', margin:'auto'}} src={card.image} alt={''}/>
                </Box>
            )}
            {(!isMobile && reverse) ? (
                <Box sx={{flex:'1 1 50%',}}>
                    <Typography variant={isMobile ? 'h6' :'h4'} dangerouslySetInnerHTML={{__html:card.title}}/>
                    <Typography variant={isMobile ? 'body2':'body1'} sx={{mt:isMobile?1:2.5}}>{card.desc}</Typography>
                    <Button variant={'outlined'} sx={{mt:isMobile?1.5:4}}>Перенести данные</Button>
                </Box>
            ):(
                <Box sx={{flex:'1 1 50%', background: 'linear-gradient(246.96deg, #E3EEFF 0%, #F3E7E9 100%)', borderRadius: '20px'}}>
                    <img style={{display: 'block', height: isMobile ?'288px':'360px', margin:'auto'}} src={card.image} alt={''}/>
                </Box>
            )}
        </Stack>
    );
}