import * as React from 'react';
import { SwitchGroup } from '../SwitchGroup';

export const Qualities = () => {
  const qualitiesArr = [
    {
      name: 'wiFi',
      label: 'Wi-Fi',
      isChecked: false,
    },
    {
      name: 'kitchen',
      label: 'Кухня',
      isChecked: false,
    },
    {
      name: 'washingMachine',
      label: 'Стиральная машина',
      isChecked: false,
    },
    {
      name: 'conditioner',
      label: 'Кондиционер',
      isChecked: false,
    },
    {
      name: 'parking',
      label: 'Бесплатная парковка на территории',
      isChecked: false,
    },
    {
      name: 'tv',
      label: 'Телевизор',
      isChecked: false,
    },
  ];

  return <SwitchGroup qualitiesArr={qualitiesArr} title='Стандратные' />;
};
