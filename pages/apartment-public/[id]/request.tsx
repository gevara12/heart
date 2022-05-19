import React, {useRef, useState} from 'react';

import {
    Container,
    Typography,
    Stack,
    Button,
    Box,
    Avatar, Grid, Divider, Tooltip,
} from '@mui/material';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import {grey} from "@mui/material/colors";

import Image from "next/image";
import { useTheme } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import TelegramIcon from '@mui/icons-material/Telegram';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SocialRoundBox from '@components/SocialRoundBox';
import {useRouter} from "next/router";

import {format} from "date-fns";
import ruLocale from "date-fns/locale/ru";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentApartment} from "@store/apartments/selectors";
import {fetchApartmentById} from "@store/apartments/actions";
import {getUser} from "@store/users/selectors";
import {fetchUser} from "@store/users/actions";
import {getCurrentUser} from "@store/auth/selectors";


const socials = [
    { name: 'Telegram', SocialIcon: TelegramIcon, color: '#33BEF0', bgColor:'#33BEF033', active: true },
    { name: 'Whatsapp', SocialIcon: WhatsAppIcon, color: '#40C351', bgColor:'#40C35114' },
    { name: 'Viber', SocialIcon: WhatsAppIcon, color: '#912FBD', bgColor:'#912FBD14' },
    { name: 'Email', SocialIcon: MailOutlineIcon },
    { name: 'Звонок', SocialIcon: CallIcon },
];
export default function ApartmentRequest() {
    const { breakpoints } = useTheme();
    const router = useRouter();
    const dispatch = useDispatch();
    const textInput = useRef(null);

    const isMobile = useMediaQuery(breakpoints.down('md'));

    const currentUser = useSelector(getCurrentUser);
    const { currentApartment } = useSelector(getCurrentApartment);
    const apartOwner = useSelector(getUser);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const { id, checkInDate, checkOutDate } = router.query;


    const copy = () => {
        if (!navigator.clipboard) return;
        if (!textInput.current){
             return;
        } else {
            navigator.clipboard.writeText(textInput?.current?.innerText);
            setOpen(true);
            setTimeout(setOpen.bind(null, false), 1000);
        }
    };

    React.useEffect(() => {
        if (checkInDate && checkOutDate && currentUser){
            setMessage(
                `Добрый день! Нашел вашу квартиру на heartapart.ru <br/>
                Объявление: https://www.heartapart.ru/apartment-public/${id} <br/>
                Хочу забронировать с ${format(new Date(checkInDate), 'd.MM.yyyy', { locale: ruLocale })} по ${format(new Date(checkOutDate), 'd.MM.yyyy', { locale: ruLocale })}, на 2 взрослых, без детей, без животных. <br/>
                Подскажите, какие дальнейшие шаги? <br/>
                Гость: https://www.heartapart.ru/user/${currentUser.id}`
            );
        }
    }, [checkInDate, checkOutDate, currentUser]);

    React.useEffect(() => {
        id && dispatch(fetchApartmentById(id));
    }, [dispatch, id]);

    React.useEffect(() => {
        currentApartment.ownerId && dispatch(fetchUser(currentApartment.ownerId));
    }, [dispatch, currentApartment.ownerId]);

    return (
        <Layout isHero={true}>
            <SEO/>
            <section>
                {Object.keys(currentApartment.publicInfo).length !== 0 && <Container maxWidth="lg">
                    <Button sx={{mt:6}} onClick={()=>router.push(`/apartment-public/${id}`)}><ArrowBackIcon sx={{mr:1}}/><div>Вернуться к объявлению</div></Button>
                    <Box sx={{overflow:'hidden', textAlign:isMobile ? 'center':'left', mt:isMobile ? 4:11, mb:14}}>
                        <Grid container columnSpacing={4}>
                            <Grid item xs={12} md={2}>
                                {isMobile && <Typography variant="h5" component="div">Отправьте запрос {apartOwner?.name}</Typography>}
                                <Avatar sx={{ bgcolor:grey[100], width: 88, height: 88, ml:'auto',mr:isMobile ? 'auto' : 'unset', mt:isMobile ? 2.5 : 0}}>
                                    {apartOwner?.avatar && <Image src={apartOwner?.avatar} alt="avatar" layout="fill" unoptimized/>}
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                {!isMobile && <Typography variant="h5" component="div">Отправьте запрос Ивану</Typography>}

                                {isMobile
                                    ? (
                                        <Box sx={{background: 'rgba(0, 166, 153, 0.12)', borderRadius: '4px', padding: '16px 28px', textAlign: 'center', mt:1.5}}>
                                            <Box>{currentApartment?.publicInfo?.name?.value}</Box>
                                            <Box>{currentApartment?.publicInfo?.amount?.value} ₽/ночь</Box>
                                            <Stack direction={'row'} justifyContent={'center'}>
                                                <Typography variant="body2" component="div">до 2 гостей</Typography>
                                                <Typography variant="body2" component="div">1 спальня</Typography>
                                                <Typography variant="body2" component="div">1 двуспальная кровать</Typography>
                                            </Stack>
                                        </Box>
                                    ) : (
                                        <Box>
                                            <Box>{currentApartment?.publicInfo?.name?.value}</Box>
                                            <Box>{currentApartment?.publicInfo?.amount?.value} ₽/ночь</Box>
                                            <Stack direction={'row'}>
                                                <Typography variant="body2" component="div">до 2 гостей</Typography>
                                                <Typography variant="body2" component="div">1 спальня</Typography>
                                                <Typography variant="body2" component="div">1 двуспальная кровать</Typography>
                                            </Stack>
                                        </Box>
                                    )
                                }
                                { !isMobile && <Divider sx={{mt:1.5, mb:4}} />}
                                { isMobile
                                    ? (
                                        <Typography variant="body1" component="div" sx={{mt:4}}>
                                            Рекомендуемый шаблон для начала общения
                                        </Typography>
                                    ) : (
                                        <Typography variant="body1" component="div" sx={{}}>
                                            Чтобы хозяин смог быстрее рассмотреть ваш запрос, воспользуйтесь приведенным
                                            шаблоном. Скопируйте текст и вставьте в сообщение в выбранном месседжере. Вы также
                                            можете задать вопросы по жилью, которые не указаны в объявлении, написать пару слов
                                            о себе и цели поездки.
                                        </Typography>
                                    )
                                }
                                {Object.keys(router?.query).length !== 0 && <Box sx={{
                                    background: 'rgba(0, 0, 0, 0.04)',
                                    padding: '17px 12px',
                                    border: '1px solid rgba(0, 0, 0, 0.23)',
                                    borderRadius: '4px',
                                    textAlign: 'left',
                                    mt:2.5,
                                }} ref={textInput} dangerouslySetInnerHTML={{__html:message}}/>}
                                {navigator.clipboard && (
                                    <Tooltip
                                        PopperProps={{ disablePortal: true }}
                                        open={open}
                                        title="Скопировано"
                                        placement={isMobile ? 'top' : 'right'}
                                        disableHoverListener
                                    >
                                        <Button variant={'contained'} sx={{mt:(isMobile ? 1.5 : 2.5) }} onClick={copy} fullWidth={isMobile}>Скопировать текст</Button>
                                    </Tooltip>
                                )}


                                <Typography variant="h5" component="div" sx={{mt: 6.5}}>Выберите способ связи</Typography>
                                <Stack direction='row' sx={{
                                    padding: '18px 22px',
                                    background: 'rgba(0, 166, 153, 0.12)',
                                    borderRadius: '4px',
                                    mt:isMobile ? 2.5 : 4,
                                    textAlign: 'left'
                                }}>
                                    <SocialRoundBox social={socials.filter((social)=>social.active)[0]} showTitle={false}/>
                                    <Box sx={{ml:2.5}}>
                                        <Typography variant="body1" component="div">{socials.filter((social)=>social.active)[0].name}</Typography>
                                        <Typography variant="body2" component="div">Хозяин указал этот способ связи как предпочтительный</Typography>
                                    </Box>
                                </Stack>
                                <Stack direction={'row'} spacing={2} sx={{mt:isMobile ? 2.5 : 4}}>
                                    {socials.map((social, i)=>
                                        !social.active && (
                                            <SocialRoundBox social={social} showTitle={true} key={i}/>
                                        )
                                    )}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>}
            </section>
        </Layout>
    );
}
