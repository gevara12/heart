import * as React from "react";
import ruLocale from 'date-fns/locale/ru';

import {Box, Button, Card, CardContent, Stack} from "@mui/material";
import {MobileDateRangePicker, DateRange, LocalizationProvider} from "@mui/lab";

import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { isDateInArray } from "@utils/helpers";

import disabledDates from "@features/PublicApartment/MobilePinnedBlock/disabledDates";
import MobileSuccessDialog from "@features/PublicApartment/MobilePinnedBlock/MobileSuccessDialog";
import generateDateRangeString from "@features/PublicApartment/MobilePinnedBlock/generateDateRangeString";
import {useRouter} from "next/router";


export default function MobilePinnedBlock() {

	const router = useRouter();

	const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
	const [open, setOpen] = React.useState<boolean>(false);
	const [checkInDate, checkOutDate] = value;

	const [openDialog, setOpenDialog] = React.useState(false);

	const handleClickOpen = () => {
		router.push(`/apartment-public/${router.query.id}/request?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`)
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
								<span style={{ color: '#000000'}} onClick={ ()=>setOpen(true) }>{generateDateRangeString(checkInDate, checkOutDate)}</span>
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
							shouldDisableDate={ (date: Date | null) => date && isDateInArray(disabledDates, date) }
							onAccept={ ()=>setOpen(false) }
							onChange={ (newValue) => setValue(newValue) }
							renderInput={ () => undefined }
						/>
					</LocalizationProvider>
					{
						checkInDate && checkOutDate
						? <Button variant="contained" sx={{width: '100%'}} size="large" onClick={handleClickOpen}>Связаться с хозяином</Button>
						: <Button variant="contained" sx={{width: '100%'}} size="large" onClick={()=>setOpen(true)}>Выбрать даты</Button>
					}
				</CardContent>

			</Card>
			<MobileSuccessDialog handleClose={handleClose} openDialog={openDialog}/>
		</>
	);
}
