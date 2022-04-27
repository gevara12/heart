import * as React from 'react';
import { SwitchGroup } from '../SwitchGroup';

export const Qualities = () => {
  const qualitiesArr = [
    { name: 'wiFi', label: 'Wi-Fi', isChecked: false },
    { name: 'kitchen', label: 'Кухня', isChecked: false },
    { name: 'refrigerator', label: 'Холодильник', isChecked: false },
    { name: 'dishes', label: 'Посуда', isChecked: false },
    { name: 'microwave', label: 'Микроволновка', isChecked: false },
    { name: 'stove', label: 'Плита', isChecked: false },
    { name: 'oven', label: 'Духовка', isChecked: false },
    { name: 'dishwasher', label: 'Посудомоечная машина', isChecked: false },
    { name: 'kettle', label: 'Чайник', isChecked: false },
    { name: 'coffeeMaker', label: 'Кофеварка', isChecked: false },
    { name: 'coffee', label: 'Кофе', isChecked: false },
    { name: 'washingMachine', label: 'Стиральная машина', isChecked: false },
    { name: 'dryer', label: 'Сушильная машина', isChecked: false },
    { name: 'bathTub', label: 'Ванна', isChecked: false },
    { name: 'hairDryer', label: 'Фен', isChecked: false },
    { name: 'toiletries', label: 'Предметы первой необходимости', isChecked: false },
    { name: 'soap', label: 'Средства для душа', isChecked: false },
    { name: 'conditioner', label: 'Кондиционер', isChecked: false },
    { name: 'blankets', label: 'Постельное белье', isChecked: false },
    { name: 'iron', label: 'Утюг', isChecked: false },
    { name: 'wardrobe', label: 'Шкаф для одежды', isChecked: false },
    { name: 'heating', label: 'Отопление', isChecked: false },
    { name: 'parking', label: 'Бесплатная парковка', isChecked: false },
    { name: 'tv', label: 'Телевизор', isChecked: false },
  ];

  return <SwitchGroup qualitiesArr={qualitiesArr} title="Стандратные" />;
};
