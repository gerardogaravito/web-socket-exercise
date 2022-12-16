import React, { FC, useMemo } from 'react';
import Select from 'react-select';
import styles from './selectExchange.module.scss';
import { useFixExchangesToOptions } from 'hooks';
import { ISelectExchange } from './SelectExchange.types';

const SelectExchange: FC<ISelectExchange> = ({
  exchanges,
  setSelectedExchange,
  setShowQuantity,
}) => {
  const { options } = useMemo(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    () => useFixExchangesToOptions(exchanges),
    [exchanges]
  );

  const handleShowAll = () => {
    setSelectedExchange('');
    setShowQuantity('');
  };

  return (
    <div className={styles.selectFields}>
      <Select
        className={styles.selectFields__exchangeSelector}
        options={options}
        onChange={(e) => {
          if (e) setSelectedExchange(e.value);
        }}
      />
      <button onClick={handleShowAll}>Mostrar todos</button>
    </div>
  );
};

export default SelectExchange;
