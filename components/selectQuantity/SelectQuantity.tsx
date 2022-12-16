import React, { FC } from 'react';
import styles from './selectQuantity.module.scss';
import Select from 'react-select';
import { useFixQuantityOptions } from 'hooks';
import { ISelectQuantity } from './selectQuantity.types';

const SelectQuantity: FC<ISelectQuantity> = ({
  exchanges,
  setShowQuantity,
}) => {
  const { options } = useFixQuantityOptions(exchanges);

  return (
    <>
      <div className={styles.weight}>
        <p>Cantidad de elementos a ver:</p>
        <Select
          className={styles.weight__input}
          options={options}
          onChange={(e) => {
            if (e) setShowQuantity(e.value);
          }}
        />
      </div>
    </>
  );
};

export default SelectQuantity;
