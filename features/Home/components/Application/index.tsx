import * as React from "react";
import {Box, Button, Container, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";


interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
        outcome: "accepted" | "dismissed";
        platform: string;
    }>;
    prompt(): Promise<void>;
}

declare global {
    interface WindowEventMap {
        beforeinstallprompt: BeforeInstallPromptEvent;
    }
}

export default function Application() {
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    let deferredPrompt:BeforeInstallPromptEvent|null = null;

    React.useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            deferredPrompt = e;
        });
    });

    const installPWAApp = async ()=>{

        if (deferredPrompt !== null) {
            await deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                deferredPrompt = null;
            }
        }
    };
    return (
        <Container fixed>
            <Box sx={{marginTop:isMobile? '52px':'272px', background: 'linear-gradient(90deg, #F3E7E9 0%, #E3EEFF 99%, #E3EEFF 100%)', borderRadius: '20px', padding:isMobile?'52px 24px':'60px 0'}}>
                <Stack direction={isMobile ? 'column':'row-reverse'} alignItems={'center'} justifyContent={'center'}>
                    <Box sx={{flex:'1 1 50%'}}>
                        <Typography variant={isMobile? 'h6':'h3'} sx={{fontWeight:500}}>Всегда под рукой</Typography>
                        <Typography variant={isMobile?'body2':'body1'} sx={{mt:isMobile?'8px' :'20px'}}>Поддержка всех функций в PWA приложении.</Typography>
                        <Button variant={'outlined'} onClick={installPWAApp} sx={{mt:isMobile?'20px':'32px', color:'black', borderColor:'black', whiteSpace:'nowrap'}}>Установить приложение</Button>
                    </Box>
                    <Box sx={{flex:'1 1 50%', textAlign:'center'}}>
                        <img style={{display: 'inline-block', width:isMobile?'160px':'260px', marginTop:isMobile?'36px':'-112px'}} src={'/images/home/Application/MobileMockup.png'} alt={''}/>
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
}