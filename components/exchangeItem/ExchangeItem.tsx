import React, { FC } from 'react';
import styles from './exchangeItem.module.scss';
import PriceElement from './priceElement/PriceElement';

import { IExchangeItem } from './exchangeItem.types';

const ExchangeItem: FC<IExchangeItem> = ({ item }) => {
  return (
    <div className={styles.exchange}>
      <p>{item[0]}</p>
      <PriceElement price={item[1].ask} />
      <PriceElement price={item[1].bid} />
    </div>
  );
};

export default ExchangeItem;
