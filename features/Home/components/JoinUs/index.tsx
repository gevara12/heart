import * as React from "react";
import Link from "next/link";

import {Box, Button, Container, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";


export default function JoinUs() {
    const { breakpoints } = useTheme();
    const isSmBreak = useMediaQuery(breakpoints.down('sm'));
    const isMdBreak = useMediaQuery(breakpoints.down('md'));

    const telegramLink = 'https://t.me/%20XsyLZklmE1VkOWQ6';

    return (
        <Container fixed>
            <Box sx={{
                overflow:'hidden',
                marginTop:isMdBreak? 6.5:13,
                background: 'linear-gradient(90deg, #F3E7E9 0%, #E3EEFF 99%, #E3EEFF 100%)',
                borderRadius: 2.5,
                padding:isSmBreak?'52px 24px':(isMdBreak?'80px 24px':'74px 24px')
            }}>
                <Stack direction={isSmBreak ? 'column':'row'} alignItems={isMdBreak?'flex-start':'center'} justifyContent={'center'}>
                    <Box sx={{flex:'1 1 50%'}}>
                        <Typography variant={isMdBreak? 'h6':'h4'} sx={{fontWeight:500}}>Узнавайте о новых релизах в числе первых <img style={{display:isMdBreak?'none':'inline',verticalAlign: 'middle', width:50}} src={'/images/home/JoinUs/Telegram.png'} alt={''}/></Typography>
                        <Typography variant={isMdBreak?'body2':'body1'} sx={{mt:isMdBreak?1 :2.5}}>Вы можете внести свой вклад в рождение нового сервиса. Присоединяйтесь к нашей фокус-группе в Telegram.</Typography>
                        <Stack direction={'row'} alignItems={'center'} sx={{mt:isMdBreak?2.5:4}} spacing={1}>
                            <Link href={telegramLink} passHref>
                                <Button variant={'outlined'} size={isMdBreak?'medium':'large'} target="_blank" rel="noopener noreferrer" sx={{color:'black', borderColor:'black', whiteSpace:'nowrap'}}>Вступить в группу</Button>
                            </Link>
                            <img style={{display:isMdBreak?'block':'none', width:50}} src={'/images/home/JoinUs/Telegram.png'} alt={''}/>
                        </Stack>
                    </Box>
                    <Box sx={{flex:'1 1 50%', textAlign:'center', position:'relative'}}>
                        <img style={{display:isMdBreak?'none':'block', position:'absolute', left:12, top:14}} src={'/images/home/JoinUs/Magic_Wand.png'} alt={''}/>
                        <img style={{display: 'inline-block', width:isSmBreak?160:(isMdBreak?170:260), marginTop:isSmBreak?40:0, marginBottom:isSmBreak?-170:(isMdBreak?-152:-152)}} src={'/images/home/JoinUs/MokupSocial.png'} alt={''}/>
                    </Box>
                </Stack>
            </Box>
        </Container>
    )
}