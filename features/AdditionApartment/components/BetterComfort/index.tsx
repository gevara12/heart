import * as React from 'react';

import { SwitchGroup } from '../SwitchGroup';

export const BetterComfort = ({ betterComfort }) => {
  const qualitiesArr = {
    workZone: { label: 'Рабочая зона', isChecked: false },
    swimmingPool: { label: 'Бассейн', isChecked: false },
    jacuzzi: { label: 'Джакузи', isChecked: false },
    backYard: { label: 'Внутренний двор', isChecked: false },
    beach: { label: 'Пляж', isChecked: false },
    bbqZone: { label: 'Зона барбекю', isChecked: false },
    fitnessZone: { label: 'Фитнес зона', isChecked: false },
    fireplace: { label: 'Камин', isChecked: false },
  };

  return (
    <SwitchGroup
      qualities={betterComfort}
      qualitiesArr={qualitiesArr}
      title="Повышенный комфорт"
      category="betterComfort"
    />
  );
};
