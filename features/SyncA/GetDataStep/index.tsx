import React, { useState } from "react";
import {useDispatch} from "react-redux";

import { LoadingButton } from '@mui/lab';

import {Alert, AlertTitle, FormControl, Stack, TextField, Typography} from '@mui/material';

import { getDataFromA } from "@store/syncA/actions";

import UserCodeRow from "@features/SyncA/UserCodeRow";
import ParseInfoList from "@features/SyncA/ParseInfoList";


export default function GetDataStep (){
	const dispatch = useDispatch();

	const [serviceLink, setServiceLink] = useState<string>('');
	const [requestError, setRequestError] = useState<boolean>(false);

	const [loading, setLoading] = useState<boolean>(false);
	const [linkHasError, setLinkHasError] = useState<boolean>(false);
	const [linkError, setLinkError] = useState<null|string>(null);


	const serviceLinkValidate = () => {
		let formIsValid = true;
		setLinkHasError(false);
		setLinkError(null);

		if (serviceLink === ''){
			formIsValid = false;
			setLinkHasError(true);
			setLinkError('Поле не может быть пустым');
			return formIsValid;
		}

		if (serviceLink.indexOf('airbnb.ru/users/show') === -1 && serviceLink.indexOf('airbnb.com/users/show') === -1){
			formIsValid = false;
			setLinkHasError(true);
			setLinkError('Поле должно содержать ссылку вида "https://www.airbnb.com/users/show/999999999"');
			return formIsValid;
		}

		return formIsValid;
	};

	const handleSync = async (e) => {
		e.preventDefault();

		if ( !serviceLinkValidate() ) return false;

		setLoading(true);
		setRequestError(false);

		try {
			// await new Promise(resolve => setTimeout(resolve, 2000));
			await dispatch(getDataFromA(serviceLink));

		} catch (e) {
			setLoading(false);
			setRequestError(true);
			console.error(e);
		}
	};

	return (
		<form onSubmit={handleSync}>

			<Typography variant="h4" sx={{mt:11}}>Перенос данных с сервиса А</Typography>
			<Typography variant="body1" sx={{mt:4}}><b>Мы можем перенести из открытых данных следующую информацию (при ее наличии):</b></Typography>

			<ParseInfoList/>

			<Alert severity="warning" sx={{mt:3, display:'inline-flex'}}>Убедитесь, что у вас есть доступ к редактированию профиля!</Alert>

			<Typography variant="body1" sx={{mt:3}}><b>Вставьте ссылку на ваш профиль, данные будут заполнены автоматически.</b></Typography>

			<FormControl fullWidth sx={{mt:3}}>
				<TextField variant="outlined"
				           placeholder="https://www.airbnb.com/users/show/<;номер аккаунта>"
				           error={linkHasError}
				           helperText={linkError}
				           autoComplete="off"
				           size="small"
				           value={serviceLink}
				           onChange={(e)=>{setServiceLink(e.target.value)}}/>
			</FormControl>

			<Typography variant="body1" sx={{mt:4}}>Мы заботимся о доверии, поэтому нам важно подтвердить, что указанный по ссылке профиль на А действительно ваш.</Typography>

			<UserCodeRow/>

			<Typography variant="body1" sx={{mt:3}}>Зайдите в свой профиль на сервисе А, перейдите в режим редактирования и вставьте код в любое место в тексте раздела Информация (About). Сохраните изменения.</Typography>
			<Typography variant="body1" sx={{mt:3}}>После этого вернитесь сюда и нажмите кнопку ниже “Продолжить”.</Typography>

			{ requestError
				&& (
					<Alert severity="error" sx={{mt:3}}>
						<AlertTitle>Не удалось подтвердить ваш профиль!</AlertTitle>
						<Typography variant="body2">Проверьте, что указали верный код в нужном поле и сохранили изменения в профиле А.</Typography>
					</Alert>
				)
			}

			<Stack direction="row" spacing={2} sx={{mt:4}} justifyContent="stretch">
				<LoadingButton variant="contained" type="submit" loading={loading} disabled={loading} sx={{ px:8}}>Продолжить</LoadingButton>
			</Stack>
		</form>
	);
};

