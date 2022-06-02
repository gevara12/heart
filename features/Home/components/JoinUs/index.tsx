import * as React from "react";
import {Box, Button, Container, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useRouter} from "next/router";
import Link from "next/link";


export default function JoinUs() {
    const { breakpoints } = useTheme();
    const router = useRouter();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <Container maxWidth='lg'>
            <Box sx={{overflow:'hidden',marginTop:isMobile? '52px':'104px', background: 'linear-gradient(90deg, #F3E7E9 0%, #E3EEFF 99%, #E3EEFF 100%)', borderRadius: '20px', padding:isMobile?'52px 24px':'60px 24px'}}>
                <Stack direction={isMobile ? 'column':'row'} alignItems={isMobile?'flex-start':'center'} justifyContent={'center'}>
                    <Box sx={{flex:'1 1 50%'}}>

                            <Typography variant={isMobile? 'h6':'h4'} sx={{fontWeight:500}}>Узнавайте о новых релизах в числе первых <img style={{display:isMobile?'none':'inline',verticalAlign: 'middle'}} src={'/images/home/8_Telegram.png'} alt={''}/></Typography>

                        <Typography variant={isMobile?'body2':'body1'} sx={{mt:isMobile?'8px' :'20px'}}>Вы можете внести свой вклад в рождение нового сервиса. Присоединяйтесь к нашей фокус-группе в Telegram.</Typography>
                        <Stack direction={'row'} alignItems={'center'} sx={{mt:isMobile?'20px':'32px'}}>
                            <Link href={'https://vk.com'} passHref>
                                <Button variant={'outlined'} target="_blank" rel="noopener noreferrer" sx={{color:'black', borderColor:'black', whiteSpace:'nowrap'}}>Вступить в группу</Button>
                            </Link>
                            <img style={{display:isMobile?'block':'none'}} src={'/images/home/8_Telegram.png'} alt={''}/>
                        </Stack>
                    </Box>
                    <Box sx={{flex:'1 1 50%', textAlign:'center', position:'relative'}}>
                        <img style={{display:isMobile?'none':'block', position:'absolute', left: '12px', top: '14px'}} src={'/images/home/8_Magic_Wand.png'} alt={''}/>
                        <img style={{display: 'inline-block', width:isMobile?'160px':'260px', marginTop:isMobile?'40px':'0', marginBottom:isMobile?'0':'-152px'}} src={'/images/home/MokupSocial.png'} alt={''}/>
                    </Box>
                </Stack>
            </Box>
        </Container>
    )
}