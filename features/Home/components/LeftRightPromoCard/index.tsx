import * as React from "react";
import {useRouter} from "next/router";

import {Box, Button, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";


export default function LeftRightPromoCard({ card, reverse=false }:any) {
    const { breakpoints, gradient } = useTheme();
    const router = useRouter();

    const isSmBreak = useMediaQuery(breakpoints.down('sm'));
    const isLgBreak = useMediaQuery(breakpoints.down('lg'));

    return (
        <Stack direction={isSmBreak?'column':(reverse? 'row-reverse':'row')} spacing={{xs:isLgBreak?2.5:7.5}}>
            <Box sx={{ flex:isSmBreak?'none':'1 1 50%'}}>
                <Typography variant={isLgBreak ? 'h6' :'h4'} sx={{fontWeight:500}} dangerouslySetInnerHTML={{__html:card.title}}/>
                <Typography variant={isLgBreak? 'body2':'body1'} sx={{mt:isLgBreak?1:2.5}}>{card.desc}</Typography>
                <Button variant={'outlined'} size={isLgBreak?'medium':'large'} onClick={()=>router.push(card.link)} sx={{mt:isLgBreak?1.5:4}}>Перенести данные</Button>
            </Box>

            <Box sx={{ display:'flex', flex:isSmBreak?'none':'1 1 50%', height:isLgBreak?288:360, background:gradient.main, borderRadius:2.5 }}>
                <img style={{ display:'block', maxWidth:isLgBreak?220:'none', maxHeight:isLgBreak?288:282, margin:'auto'}} src={card.image} alt={''}/>
            </Box>
        </Stack>
    );
}