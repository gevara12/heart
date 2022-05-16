import React from 'react';

import { Grid } from '@mui/material';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const labels = {
  wiFi: 'Wi-fi',
  conditioner: 'Кондиционер',
  iron:'Утюг',
  kitchen:'Кухня',
  refrigerator:'Холодильник',
  dishes:'Посуда',
  microwave:'Микроволновка',
  stove:'Плита',
  oven:'Духовка',
  dishwasher:'Посудомоечная машина',
  kettle:'Чайник',
  coffeeMaker:'Кофеварка',
  coffee:'Кофе',
  washingMachine:'Стиральная машина',
  dryer:'Сушильная машина',
  bathTub:'Ванна',
  hairDryer:'Фен',
  toiletries:'Предметы первой необходимости',
  soap:'Средства для душа',
  blankets:'Постельное белье',
  wardrobe:'Шкаф для одежды',
  heating:'Отопление',
  parking:'Бесплатная парковка',
  tv:'Телевизор',
};

export default function OptionsGrid({ options }: any) {
  console.log(options);

  return (
    <Grid container spacing={{ xs: 1 }}>
      {Object.keys(options).map((key, i) => (
        <Grid item xs={12} md={5} key={i}>
          <div style={{ display: 'flex' }}>
            <CheckCircleOutlineIcon sx={{ color: 'green', mr: 1 }} />
            {labels[key] || 'null'}
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
