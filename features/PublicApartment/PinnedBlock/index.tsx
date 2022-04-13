import * as React from "react";
import { Button, Card, CardContent, Stack } from "@mui/material";
import {MinMaxDateRangePicker} from "@components/MinMaxDateRangePicker";
import {DateRange} from "@mui/lab";
import {GuestPopover} from "@components/GuestPopover";
import RatingIconsPanel from "@components/RatingIconsPanel";



export default function PinnedBlock() {
	const [dates, setDates] = React.useState<DateRange<Date>>([null, null]);
	return (
		<Card sx={{ position:'sticky', top:20 }}>
			<CardContent>
				<Stack direction={'row'} justifyContent={'space-between'} sx={{mb:2}}>
					<div>2147 ₽/ночь</div>
					<Stack direction={{ xs: 'column', md:'row' }} alignItems={{xs:'start',md:'center'}} spacing={{ xs: 0, md:3 }}>
						<RatingIconsPanel/>
					</Stack>
				</Stack>
				<Stack direction={{ xs: 'column' }} spacing={2}>
					<MinMaxDateRangePicker dates={dates} setDates={setDates}  />
					<GuestPopover />
				</Stack>
				<Button variant="contained" sx={{width: '100%', mt:2}} size="large">Связаться с хозяином</Button>
				<Stack direction={'row'} justifyContent={'space-between'} sx={{mt:2}}>
					<div>Всего за 6 ночей</div>
					<div>12 808 ₽</div>
				</Stack>
			</CardContent>
		</Card>
	);
}
