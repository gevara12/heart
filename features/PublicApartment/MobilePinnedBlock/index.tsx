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

export default function MobilePinnedBlock() {
	const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
	const [open, setOpen] = React.useState<boolean>(false);
	const [checkInDate, checkOutDate] = value;

	return (
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
						startText="Mobile start"
						value={value}
						open={open}
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
					? <Button variant="contained" sx={{width: '100%'}} size="large" onClick={()=>alert('send form')}>Связаться с хозяином</Button>
					: <Button variant="contained" sx={{width: '100%'}} size="large" onClick={()=>setOpen(true)}>Выбрать даты</Button>
				}
			</CardContent>
		</Card>
	);
}
