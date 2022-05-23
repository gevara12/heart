import * as React from 'react';

import { SwitchGroup } from '../SwitchGroup';

export const Services = ({ service }) => {
  const services = {
    luggage_drop: { label: 'Можно оставить багаж', isChecked: false },
    self_checkin: { label: 'Самостоятельное заселение', isChecked: false },
    host_checkin: { label: 'Хозяин встретит вас лично', isChecked: false },
    safe: { label: 'Мини-сейф', isChecked: false },
    camera: { label: 'Камеры видеонаблюдения в жилье', isChecked: false },
  };

  return <SwitchGroup qualities={service} qualitiesArr={services} title="Услуги" category="services" />;
};
