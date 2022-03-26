import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { ApartItem, TApartItemProps } from '@features/host/ApartItem';

import styles from './Apartments.module.css';

import { getApartmentsList } from '@store/apartments/selectors';
import { fetchApartments } from '@store/apartments/actions';

export const Apartments = (): React.ReactElement => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  const apartments = useSelector(getApartmentsList);

  return (
    <div className={styles.list}>
      {apartments.map((apart) => (
        <ApartItem apart={apart} key={uuidv4()} />
      ))}
    </div>
  );
};
