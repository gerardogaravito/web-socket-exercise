import React, { FC } from 'react';
import styles from './exchangesContainer.module.scss';
import { ExchangeItem } from 'components';
import { IExchangesContainer } from './exchangesContainer.types';

const ExchangesContainer: FC<IExchangesContainer> = ({
  exchanges,
  selectedExchange,
  showQuantity,
}) => {
  const render = () => {
    if (selectedExchange == '' && Number(showQuantity) == 0) {
      return Object.entries(exchanges).map((item) => (
        <ExchangeItem key={item[0]} item={item} />
      ));
    } else if (Number(showQuantity) !== 0) {
      return Object.entries(exchanges)
        .slice(0, Number(showQuantity))
        .map((item) => <ExchangeItem key={item[0]} item={item} />);
    } else {
      return (
        <ExchangeItem
          //@ts-ignore
          item={Object.entries(exchanges).find(
            (item) => item[0] == selectedExchange
          )}
        />
      );
    }
  };

  return (
    <>
      <div className={styles.exchangesContainer}>
        <p className={styles.exchangesContainer__ask}>Ask:</p>
        <p className={styles.exchangesContainer__bid}>Bid:</p>
      </div>

      {render()}
    </>
  );
};

export default ExchangesContainer;
