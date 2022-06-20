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
    const isSmBreak = useMediaQuery(breakpoints.down('sm'));
    const isMdBreak = useMediaQuery(breakpoints.down('md'));
    const isLgBreak = useMediaQuery(breakpoints.down('lg'));

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
            <Box sx={{marginTop:isLgBreak?'52px':'272px', background:gradient.main , borderRadius:2.5, padding:isLgBreak?'52px 24px':'60px 0'}}>
                <Stack direction={isLgBreak?'column':'row-reverse'} alignItems={'center'} justifyContent={'center'}>
                    <Box sx={{flex:'1 1 50%'}}>
                        <Typography variant={isSmBreak?'h6':(isLgBreak?'h4':'h3')} sx={{fontWeight:500}}>Всегда под рукой</Typography>
                        <Typography variant={isLgBreak?'body2':'body1'} sx={{mt:isMdBreak?1:2.5}}>Поддержка всех функций в PWA приложении.</Typography>
                        <Button variant={'outlined'}
                                onClick={installPWAApp}
                                sx={{
                                    mt:isLgBreak?2.5:4,
                                    color:'text.primary',
                                    borderColor:'text.primary',
                                    whiteSpace:'nowrap'
                                }}>Установить приложение</Button>
                    </Box>
                    <Box sx={{ flex:'1 1 50%',textAlign:'center', marginTop:isLgBreak?'36px':'-112px' }}>
                        <Box sx={{ position:'relative',display: 'inline-block'}}>
                            <img style={{ position:'absolute', width:isLgBreak?138:170, left:isLgBreak?141:200, top:isLgBreak?46:84, filter:'drop-shadow(0px 4px 24px rgba(46, 60, 80, 0.08))' }} src={'/images/home/Application/Menu.png'} alt={''}/>
                            <img style={{ position:'absolute', width:isLgBreak?138:190, right:isLgBreak?141:170, top:isLgBreak?223:377, filter:'drop-shadow(0px 4px 24px rgba(46, 60, 80, 0.08))' }} src={'/images/home/Application/Price.png'} alt={''}/>
                            <img style={{ width:isLgBreak?160:260}} src={'/images/home/Application/MobileMockup.png'} alt={''}/>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
}