import { usePrevious } from 'hooks';
import React, { FC, useEffect, useState } from 'react';
import styles from '../exchangeItem.module.scss';
import { IPriceElement } from './priceElement.types';

const PriceElement: FC<IPriceElement> = ({ price }) => {
  const prevPrice = usePrevious(price);
  const [priceStatus, setPriceStatus] = useState<'' | 'down' | 'up'>('');

  useEffect(() => {
    if (prevPrice && price && prevPrice < price) {
      setPriceStatus('up');
    } else if (prevPrice && price && prevPrice > price) {
      setPriceStatus('down');
    }
  }, [price]);

  return (
    <p
      className={
        priceStatus === 'up'
          ? styles.exchange__price__up
          : styles.exchange__price__down
      }
    >
      {price}
    </p>
  );
};

export default PriceElement;
