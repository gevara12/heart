import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

import {getCurrentUser} from '@store/auth/selectors';
import {fetchCurrentUser} from '@store/auth/actions';

import {Avatar, Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography} from '@mui/material';
import {grey} from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from '@features/Profile/components/AddAvatar/AddAvatar.module.css';
import StarIcon from "@mui/icons-material/Star";
import BoltIcon from "@mui/icons-material/Bolt";

import { fetchUser } from '@store/users/actions';
import { getUser } from '@store/users/selectors';


type TProfileProps = {};

export const Profile = ({}: TProfileProps): React.ReactElement => {
	const dispatch = useDispatch();
	const data = useSelector(getCurrentUser);
	const user = useSelector(getUser);

	React.useEffect(() => {
		// dispatch(fetchCurrentUser());
		if (data) dispatch(fetchUser(data.id))
	}, [dispatch, data]);

	const currentYear = new Date().getFullYear();
	const fakeName = data?.email.substring(0, data?.email.indexOf('@'));

	return (
		<>
			{data && (
				<Box sx={{mt: 10.5, mb: 16}}>
					<Grid container spacing={{xs: 2, sm: 4}}>
						<Grid item xs={12} md={4} lg={3}>
							<Avatar sx={{mb: 4, bgcolor: grey[100], maxWidth: 190, width: '100%', height: 190}} variant="square">
								{data?.avatar ? (
									<div className={styles.imageContainer}>
										<Image className={styles.image} src={data?.avatar} alt="avatar" layout="fill"/>
									</div>
								) : (
									<AccountCircleIcon sx={{width: 190, height: 190, color: '#707070'}}/>
								)}
							</Avatar>

							<Box sx={{mb: 2.5}}>
								<Stack direction={'row'} alignItems={'center'} spacing={0.5}>
									<BoltIcon fontSize={'small'} sx={{color: 'secondary.main'}}/>
									<Typography variant="body1">
										<Link href={`#`} passHref><Typography component='a'
										                                      sx={{color: 'primary.main'}}>{12} отзывов</Typography></Link> от
										гостей
									</Typography>
								</Stack>

								<Stack direction={'row'} alignItems={'center'} spacing={0.5}>
									<BoltIcon fontSize={'small'} sx={{color: 'secondary.main'}}/>
									<Typography variant="body1">
										<Link href={`#`} passHref><Typography component='a'
										                                      sx={{color: 'primary.main'}}>{12} отзывов</Typography></Link> от
										хозяев
									</Typography>
								</Stack>
							</Box>

							{data.refWhatsapp && (
								<>
									<Typography
										component="a"
										href={data.refWhatsapp}
										target="_blank"
										rel="noopener noreferrer nofollow"
										sx={{display: 'flex', color: 'text.primary', textDecoration: 'none', mb: 1}}
									>
										<WhatsAppIcon sx={{mr: 1}}/> <span>WhatsApp</span>
									</Typography>
								</>
							)}

							{data.refTelegram && (
								<>
									<Typography
										component="a"
										href={`https://${data.refTelegram}`}
										target="_blank"
										rel="noopener noreferrer nofollow"
										sx={{display: 'flex', color: 'text.primary', textDecoration: 'none', mb: 1}}
									>
										<TelegramIcon sx={{mr: 1}}/> <span>Telegram</span>
									</Typography>
								</>
							)}
							<Link href="profile/edit">
								<Button variant="outlined">Редактировать профиль</Button>
							</Link>
						</Grid>
						<Grid item xs={12} lg={1} sx={{display: {xs: 'none', lg: 'block'}}}/>
						<Grid item xs={12} md={8}>
							<Typography variant="h6" sx={{mb: 1}}>
								{data.name ?? fakeName ?? data.name}
								{data.surname}
							</Typography>
							<Typography variant="body1" color="text.secondary" sx={{mb: 1.5}}>
								{data.gender}
								{data.dateOfBirth && `, ${currentYear - data.dateOfBirth && data.dateOfBirth.substr(6, 4)}`}
							</Typography>
							<Typography variant="body1" color="text.secondary" sx={{mb: 4}}>
                На HeartApart с {data?.dateOfRegistration}
							</Typography>

							{data.description ||
							(data.city && (
								<>
									<Typography variant="h5" sx={{mb: 3}}>
										Обо мне
									</Typography>
									<Typography variant="body1" sx={{mb: 4}}>
										{data.description}
									</Typography>

									{data.city && (
										<Stack direction="row">
											<LocationOnIcon/>
											{data.city}
										</Stack>
									)}
								</>
							))}
							<Box>
								<Typography variant="h5" sx={{mt: 4, mb: 2.5}}>Объявления</Typography>
								<Grid container spacing={3}>
									{user && user.apartments.map(({publicInfo, externalRating}, i) =>
										<Grid item xs={12} md={6} key={i}>
											<Card>
												<CardMedia component="img" height="140"
												           image={publicInfo.images[0].imageUrl}
												           alt={''}/>
												<CardContent>
													<Typography variant="h5">{publicInfo.name}</Typography>
													<Stack direction="row" alignItems="center" sx={{mb: 0.5}}>
														<Stack direction="row" alignItems="center" sx={{mr: 1}}>
															<StarIcon fontSize="small" sx={{color: 'secondary.main'}}/><Typography
															variant="body1">{externalRating.overallRating}</Typography>
														</Stack>
														<Link href={`${externalRating.reference}/reviews`} passHref>
															<Typography component="a" sx={{color: 'primary.main'}} target="_blank" rel="nofollow"
															            variant="body1">{externalRating.overallCount} отзывов</Typography>
														</Link>
													</Stack>
													<Typography variant="body2">Das 2-Zimmer-Apartment verfügt über eine Küche, Waschmaschine, TV,
														Wannenbad mit Dusche und ist für Selbstversorger mit allem ausgestattet. Handtücher und
														Bettwäsche werden selbstverständlich von mir zur Verfügung gestellt.</Typography>
												</CardContent>
											</Card>
										</Grid>
									)}
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Box>
			)}
		</>
	);
};
