import * as React from 'react';
import { SwitchGroup } from '../SwitchGroup';

export const qualitiesObj = {
  wiFi: { label: 'Wi-Fi', isChecked: false },
  kitchen: { label: 'Кухня', isChecked: false },
  refrigerator: { label: 'Холодильник', isChecked: false },
  dishes: { label: 'Посуда', isChecked: false },
  microwave: { label: 'Микроволновка', isChecked: false },
  stove: { label: 'Плита', isChecked: false },
  oven: { label: 'Духовка', isChecked: false },
  dishwasher: { label: 'Посудомоечная машина', isChecked: false },
  kettle: { label: 'Чайник', isChecked: false },
  coffeeMaker: { label: 'Кофеварка', isChecked: false },
  coffee: { label: 'Кофе', isChecked: false },
  washingMachine: { label: 'Стиральная машина', isChecked: false },
  dryer: { label: 'Сушильная машина', isChecked: false },
  bathTub: { label: 'Ванна', isChecked: false },
  hairDryer: { label: 'Фен', isChecked: false },
  toiletries: { label: 'Предметы первой необходимости', isChecked: false },
  soap: { label: 'Средства для душа', isChecked: false },
  conditioner: { label: 'Кондиционер', isChecked: false },
  blankets: { label: 'Постельное белье', isChecked: false },
  iron: { label: 'Утюг', isChecked: false },
  wardrobe: { label: 'Шкаф для одежды', isChecked: false },
  heating: { label: 'Отопление', isChecked: false },
  parking: { label: 'Бесплатная парковка', isChecked: false },
  tv: { label: 'Телевизор', isChecked: false },
};

export const Qualities = ({ qualities }) => {
  return <SwitchGroup qualities={qualities} qualitiesArr={qualitiesObj} title="Стандратные" />;
};
