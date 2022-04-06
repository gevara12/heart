import * as React from "react";
import Link from "next/link";

import {Box, Button, Card, CardContent, Stack} from "@mui/material";


export default function MobilePinnedBlock() {
	return (
		<Card sx={{ position:'fixed', left:0, bottom:0, width:'100%', zIndex:1, boxShadow: 3 }}>
			<CardContent>
				<Stack direction={'row'} justifyContent={'center'} sx={{mb:2}}>
					<div>2147 ₽/ночь</div>
					<Box sx={{ml:2}}>
						<Link href='#' passHref><a style={{ color: '#000000'}}>18-30 апр.</a></Link>
					</Box>
				</Stack>
				<Button variant="contained" sx={{width: '100%'}} size="large">Связаться с хозяином</Button>
			</CardContent>
		</Card>
	);
}
