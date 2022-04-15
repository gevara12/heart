import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { AddAvatar } from '@features/Profile/components/AddAvatar';
import { PersonalInfo } from '@features/Profile/components/PersonalInfo';
import { Contacts } from '@features/Profile/components/Contacts';

type TProfileEditProps = {};

const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <AddAvatar />;
    case 1:
      return <PersonalInfo />;
    case 2:
      return <Contacts />;
    default:
      return <div>default</div>;
  }
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const ProfileEdit = ({}: TProfileEditProps): React.ReactElement => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Редактирование данных
      </Typography>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="profile tabs"
            variant="scrollable"
            scrollButtons="false"
          >
            <Tab label="Аватар" {...a11yProps(0)} />
            <Tab label="Личная информация" {...a11yProps(1)} />
            <Tab label="Контакты и уведомления" {...a11yProps(2)} />
            <Tab label="Вход и безопасность" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <Box sx={{ py: 4 }}>{getStepContent(tabValue)}</Box>
      </Box>
    </div>
  );
};
