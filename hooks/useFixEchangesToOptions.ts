import { JSONPricesType } from 'types/prices.types';
import { selectorOptionsType } from 'types/selector.types';

const useFixExchangesToOptions = (exchanges: JSONPricesType) => {
  const options: selectorOptionsType = [];

  Object.keys(exchanges).forEach((exchange) => {
    options.push({
      value: exchange,
      label: exchange,
    });
  });

  return { options };
};

export default useFixExchangesToOptions;
