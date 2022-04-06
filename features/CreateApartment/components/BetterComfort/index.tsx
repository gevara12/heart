import * as React from 'react';

import { SwitchGroup } from '../SwitchGroup';

export const BetterComfort = () => {
  const qualitiesArr = [
    {
      name: 'workZone',
      label: 'Рабочая зона',
      isChecked: false,
    },
    {
      name: 'swimmingPool',
      label: 'Бассейн',
      isChecked: false,
    },
    {
      name: 'jacuzzi',
      label: 'Джакузи',
      isChecked: false,
    },
    {
      name: 'backYard',
      label: 'Внутренний двор',
      isChecked: false,
    },
    {
      name: 'bbqZone',
      label: 'Зона барбекю',
      isChecked: false,
    },
    {
      name: 'fitnessZone',
      label: 'Фитнес зона',
      isChecked: false,
    },
  ];

  return (
    <SwitchGroup
      qualitiesArr={qualitiesArr}
      title='Повышенный комфорт'
      payloadField='betterComfort'
    />
  );
};
