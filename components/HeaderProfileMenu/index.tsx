import * as React from 'react';
import Link from 'next/link';

import {
    Divider,
    Menu,
    Typography,
    MenuItem,
} from '@mui/material';

import {LogIn} from '@components/LogIn';


export function HeaderProfileMenu({anchorElUser, handleCloseUserMenu}: any) {

    return (
        <Menu
            sx={{mt: '45px'}}
            anchorEl={anchorElUser}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >
            <MenuItem component='div'>
                <Link href='/profile'>
                    <Typography sx={{mr: 4}} variant='body1' component='span'>
                        Профиль
                    </Typography>
                </Link>
            </MenuItem>
            <MenuItem component="div">
                <Link href="/profile/edit">
                    <Typography sx={{mr: 4}} variant="body1" component="span">
                        Настройки аккаунта
                    </Typography>
                </Link>
            </MenuItem>
            <MenuItem component="div">
                <Link href="/host/sync-a">
                    <Typography sx={{mr: 4}} variant="body1" component="span">
                        Перенос данных
                    </Typography>
                </Link>
            </MenuItem>
            <MenuItem component="div" disabled>
                <Typography sx={{mr: 4}} variant="body1" component="span">
                    Сдать жилье (скоро)
                </Typography>
            </MenuItem>
            <MenuItem component="div" disabled>
                <Typography sx={{mr: 4}} variant="body1" component="span">
                    Мои объявления (скоро)
                </Typography>
            </MenuItem>

            <Divider/>

            <LogIn/>

        </Menu>
    );
}
