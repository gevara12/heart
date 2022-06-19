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
    const { breakpoints, gradient } = useTheme();
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
            <Box sx={{marginTop:isMobile? '52px':'272px', background:gradient.main , borderRadius:2.5, padding:isMobile?'52px 24px':'60px 0'}}>
                <Stack direction={isMobile ? 'column':'row-reverse'} alignItems={'center'} justifyContent={'center'}>
                    <Box sx={{flex:'1 1 50%'}}>
                        <Typography variant={isMobile? 'h6':'h3'} sx={{fontWeight:500}}>Всегда под рукой</Typography>
                        <Typography variant={isMobile?'body2':'body1'} sx={{mt:isMobile?1:2.5}}>Поддержка всех функций в PWA приложении.</Typography>
                        <Button variant={'outlined'}
                                onClick={installPWAApp}
                                sx={{
                                    mt:isMobile?2.5:4,
                                    color:'text.primary',
                                    borderColor:'text.primary',
                                    whiteSpace:'nowrap'
                                }}>Установить приложение</Button>
                    </Box>
                    <Box sx={{flex:'1 1 50%', textAlign:'center'}}>
                        <img style={{display: 'inline-block', width:isMobile?160:260, marginTop:isMobile?36:-112}} src={'/images/home/Application/MobileMockup.png'} alt={''}/>
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
}