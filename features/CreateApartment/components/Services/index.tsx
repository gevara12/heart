import * as React from 'react';

import { SwitchGroup } from '../SwitchGroup';

export const Services = () => {
  const services = [
    { name: 'luggage_drop', label: 'Можно оставить багаж', isChecked: false },
    { name: 'self_checkin', label: 'Самостоятельное заселение', isChecked: false },
    { name: 'host_checkin', label: 'Хозяин встретит вас лично', isChecked: false },
    { name: 'safe', label: 'Мини-сейф', isChecked: false },
    { name: 'camera', label: 'Камеры видеонаблюдения в жилье', isChecked: false },
  ];

  return <SwitchGroup qualitiesArr={services} title="Услуги" category="services" />;
};
