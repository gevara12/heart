import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
// import {parse} from "date-fns";

import {getCurrentUser} from '@store/auth/selectors';
import { fetchUser } from '@store/users/actions';
import { getUser } from '@store/users/selectors';
import {fetchCurrentUser} from '@store/auth/actions';

import {grey} from '@mui/material/colors';

import {Avatar, Box, Button, Chip, Grid, Stack, Typography} from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BoltIcon from "@mui/icons-material/Bolt";
import TagFacesIcon from '@mui/icons-material/TagFaces';

import ApartmentCard from '@features/Profile/components/ApartmentCard';

import styles from '@features/Profile/components/AddAvatar/AddAvatar.module.css';


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

	// console.log(parse(data?.dateOfBirth, 'dd.MM.yyyy', new Date()));

	return (
		<>
			{data && (
				<Box sx={{mt: 10.5, mb: 16}}>
					<Grid container spacing={{xs: 2, sm: 4}}>
						<Grid item xs={12} md={4} lg={3}>
							<Stack justifyContent={'center'} alignItems={'center'}>
								<Avatar sx={{ bgcolor: grey[100], width: 192, height: 190}}>
									{data?.avatar ? (
										<div className={styles.imageContainer}>
											<Image className={styles.image} src={data?.avatar} alt="avatar" layout="fill"/>
										</div>
									) : (
										<AccountCircleIcon sx={{width: 190, height: 190, color: '#707070'}}/>
									)}
								</Avatar>

								{user?.abbIsSuperHost && <Chip icon={<TagFacesIcon />} label="Топ-сервис" color="secondary" sx={{mt:4}} />}
							</Stack>
							<Box sx={{mb: 4, mt:4}}>

								{ user?.refAbb && user?.externalRatingsGuest.filter(item=>item.service === "AIRBNB").map((rating, i )=>
									<Stack direction={'row'} alignItems={'center'} spacing={0.5} key={i}>
										<BoltIcon fontSize={'small'} sx={{color: 'secondary.main'}}/>
										<Typography variant="body1">
											<Link href={`${user?.refAbb}#user-profile-review-tabs`} passHref>
												<Typography component='a' sx={{color: 'primary.main'}}
												            target="_blank"
												            rel="noopener noreferrer nofollow">{rating.overallCount} отзывов</Typography></Link> от
											хозяев
										</Typography>
									</Stack>
								)}
								{ user?.refAbb && user?.abbReviews && (
									<Stack direction={'row'} alignItems={'center'} spacing={0.5}>
										<BoltIcon fontSize={'small'} sx={{color: 'secondary.main'}}/>
										<Typography variant="body1">
											<Link href={`${user?.refAbb}#user-profile-review-tabs`} passHref>
												<Typography component='a' sx={{color: 'primary.main'}}>{data.abbReviews} отзывов</Typography></Link> от
											гостей
										</Typography>
									</Stack>
								)}

							</Box>

							{data.refWhatsapp && (
								<>
									<Typography
										component="a"
                    href={`https://${data.refWhatsapp}`}
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
								<Button variant="outlined" size='large' fullWidth>Редактировать профиль</Button>
							</Link>
						</Grid>
						<Grid item xs={12} lg={1} sx={{display: {xs: 'none', lg: 'block'}}}/>
						<Grid item xs={12} md={8}>
							<Typography variant="h3" sx={{mb: 1}}>
								{data.name ?? fakeName ?? data.name} {data.surname}
							</Typography>
							<Typography variant="body1" color="text.secondary" sx={{mb: 1.5}}>
								{data.gender}

								{data.dateOfBirth && `, ${currentYear - data.dateOfBirth.substr(6, 4)}`}
							</Typography>
							<Typography variant="body1" color="text.secondary" sx={{mb: 4}}>
                На HeartApart с {data?.dateOfRegistration}
							</Typography>

							{data.description && (
									<>
										<Typography variant="h5" sx={{mb: 2.5}}>
											Обо мне
										</Typography>
										<Typography variant="body1" sx={{mb: 4}}>
											{data.description}
										</Typography>
									</>
							)}
							{data.city && (
								<Stack direction="row">
									<LocationOnIcon/>
									{data.city}
								</Stack>
							)}
							{user?.apartments.length !== 0
								&& (
								<Box>
									<Typography variant="h5" sx={{mt: 4, mb: 2.5}}>Объявления</Typography>
									<Grid container spacing={3}>
										{user?.apartments.map((apartment, i) =>
											<Grid item xs={12} md={6} key={i}>
												<ApartmentCard apartment={apartment}/>
											</Grid>
										)}
									</Grid>
								</Box>
								)
							}
						</Grid>
					</Grid>
				</Box>
			)}
		</>
	);
};
