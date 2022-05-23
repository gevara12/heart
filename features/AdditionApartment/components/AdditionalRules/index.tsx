import * as React from 'react';

import { SwitchGroup } from '@features/AdditionApartment/components/SwitchGroup';

export const AdditionalRules = ({ additionalRules }) => {
  const rules = {
    allowedSmoke: { label: 'Можно курить', isChecked: false },
    allowedAnimals: { label: 'Можно с питомцами', isChecked: false },
    allowedParties: { label: 'Разрешены вечеринки', isChecked: false },
    allowedChildren: { label: 'Можно с детьми', isChecked: false },
  };

  return <SwitchGroup qualities={additionalRules} qualitiesArr={rules} category="additionalRules" isSwitcher />;
};
