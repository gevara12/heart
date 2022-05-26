import * as React from "react";
import {Box} from "@mui/material";


export default function PromoCard({card}:any) {
    return (
        <Box sx={{background: '#FAFAFA', borderRadius: '20px', p: 3, height: '100%'}}>
            <Box sx={{ display:'flex', background:card.bg, borderRadius:'20px', overflow:'hidden', height:'300px' }}>
                <img style={{display: 'block', width:'264px', margin:'auto' }} src={card.image} alt={''}/>
            </Box>
            <Box sx={{ fontWeight: 500, fontSize: '24px', lineHeight: '32px', marginTop: '20px'}}>{card.title}</Box>
        </Box>
    );
}