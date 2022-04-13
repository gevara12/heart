import * as React from "react";
import Link from "next/link";
import { format } from 'date-fns'

import {Box, Button, Card, CardContent, Stack, TextField} from "@mui/material";
import {MobileDateRangePicker} from "@mui/lab";
import {DateRange} from "@mui/lab/DateRangePicker/RangeTypes";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ruLocale from 'date-fns/locale/ru';


// TODO: try to use built-in renderInput?
const generateDateRangeString = (firstDate,lastDate) => {
	if ( firstDate?.getMonth() === lastDate?.getMonth() ){
		return `${format(firstDate, 'dd')}-${format(lastDate, 'dd MMM', { locale: ruLocale })}`;
	} else {
		return `${format(firstDate, 'dd MMM', { locale: ruLocale })}-${format(lastDate, 'dd MMM', { locale: ruLocale })}`;
	}
};
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

export interface DialogTitleProps {
	id: string;
	children?: React.ReactNode;
	onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};
const disabledDates = [
	new Date('Thu Apr 21 2022 00:00:00 GMT+0300 (Москва, стандартное время)'),
	new Date('Fri Apr 22 2022 00:00:00 GMT+0300 (Москва, стандартное время)'),
	new Date('Sat Apr 23 2022 00:00:00 GMT+0300 (Москва, стандартное время)'),
	new Date('Thu Apr 28 2022 00:00:00 GMT+0300 (Москва, стандартное время)'),
];
function isDateInArray(dateString) {
	let dateExists = false;
	let date = new Date(dateString);
	disabledDates.forEach(function(arrayDateString) {
		let arrayDate = new Date(arrayDateString);
		if(date.getTime() === arrayDate.getTime()){
			dateExists = true;
		}
	});
	return dateExists;
}
function checkDisabled(date: Date | null) {
	return date ? isDateInArray(date)  : undefined;
}

export default function MobilePinnedBlock() {
	const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
	const [open, setOpen] = React.useState<boolean>(false);
	const [checkInDate, checkOutDate] = value;

	const [openDialog, setOpenDialog] = React.useState(false);

	const handleClickOpen = () => {
		setOpenDialog(true);
	};
	const handleClose = () => {
		setOpenDialog(false);
	};

	return (
		<>
			<Card sx={{ position:'fixed', left:0, bottom:0, width:'100%', zIndex:1, boxShadow: 3 }}>
				<CardContent>
					<Stack direction={'row'} justifyContent={'center'} sx={{mb:2}}>
						<div>2147 ₽/ночь</div>
						{ checkInDate && checkOutDate &&
							<Box sx={{ml:2}}>
								<Link href='#' passHref><a style={{ color: '#000000'}}>{generateDateRangeString(checkInDate,checkOutDate)}</a></Link>
							</Box>
						}
					</Stack>
					<LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
						<MobileDateRangePicker
							toolbarTitle={'Выберите даты'}
							disablePast
							startText="Прибытие"
							endText="Выезд"
							value={value}
							open={open}
							shouldDisableDate={checkDisabled}
							onAccept={()=>setOpen(false)}
							onChange={(newValue) => setValue(newValue)}
							renderInput={(startProps, endProps) => (
								<div style={{display:'none'}}>
									<TextField {...startProps} />
									<Box sx={{ mx: 2 }}>-</Box>
									<TextField {...endProps} />
								</div>
							)}
						/>
					</LocalizationProvider>
					{
						checkInDate && checkOutDate
						? <Button variant="contained" sx={{width: '100%'}} size="large" onClick={handleClickOpen}>Связаться с хозяином</Button>
						: <Button variant="contained" sx={{width: '100%'}} size="large" onClick={()=>setOpen(true)}>Выбрать даты</Button>
					}
				</CardContent>

			</Card>
			<BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openDialog}>
				<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>Спасибо за использование нашего сервиса!</BootstrapDialogTitle>
				<DialogContent dividers>
					<Typography gutterBottom>Хозяин жилья свяжется с вами в ближайшее время!</Typography>
					<Typography gutterBottom>А пока вы ждете - посмотрите на котика :З</Typography>
					<img style={{width:"100%"}} src="http://desktopwallpapers.org.ua/pic/201210/1920x1200/desktopwallpapers.org.ua-20397.jpg"/>
				</DialogContent>
			</BootstrapDialog>
		</>
	);
}
