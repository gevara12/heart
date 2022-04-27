import * as React from 'react';

import { SwitchGroup } from '@features/CreateApartment/components/SwitchGroup';

export const AdditionalRules = () => {
  const rules = [
    { name: 'allowedSmoke', label: 'Можно курить', isChecked: false },
    { name: 'allowedAnimals', label: 'Можно с питомцами', isChecked: false },
    { name: 'allowedParties', label: 'Разрешены вечеринки', isChecked: false },
    { name: 'allowedChildren', label: 'Можно с детьми', isChecked: false },
  ];

  return <SwitchGroup qualitiesArr={rules} category="additionalRules" isSwitcher />;
};
