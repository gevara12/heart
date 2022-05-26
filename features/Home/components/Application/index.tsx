import * as React from "react";
import {Box, Button, Container, Stack, Typography} from "@mui/material";

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
        <Container maxWidth='lg'>
            <Box sx={{marginTop:'272px', background: 'linear-gradient(90deg, #F3E7E9 0%, #E3EEFF 99%, #E3EEFF 100%)', borderRadius: '20px', padding:'60px 0'}}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    <Box sx={{flex:'1 1 50%', textAlign:'center'}}>
                        <img style={{display: 'inline-block', width:'260px', marginTop:'-112px'}} src={'/images/home/MobileProfile1.png'} alt={''}/>
                    </Box>
                    <Box sx={{flex:'1 1 50%'}}>
                        <Typography variant={'h3'}>Всегда под рукой</Typography>
                        <Typography variant={'body1'} sx={{mt:'20px'}}>Поддержка всех функций в PWA приложении.</Typography>
                        <Button variant={'outlined'} onClick={installPWAApp} sx={{mt:'32px', color:'black', borderColor:'black'}}>Установить приложение</Button>
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
}