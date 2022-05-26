import * as React from "react";
import {Box, Typography} from "@mui/material";


export default function PromoBigCard({card}:any) {
    return (
        <Box sx={{ background:'#FAFAFA', borderRadius:'20px', p:3 }}>
            <Box sx={{ background:'linear-gradient(71.72deg, #F3E7E9 0%, #E3EEFF 99%)', borderRadius:'20px', overflow:'hidden', height:'300px' }}>
                <img style={{ display:'block', width:'366px', margin:'36px auto' }} src={card.image} alt={''}/>
            </Box>
            <Typography variant={'h4'} sx={{fontWeight: 500, mt:2.5}}>{card.title}</Typography>
            <Typography variant={'body1'} sx={{mt:2.5}}>{card.desc}</Typography>
        </Box>
    );
}