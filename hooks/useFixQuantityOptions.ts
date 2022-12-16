import { JSONPricesType } from 'types/prices.types';
import { selectorOptionsType } from 'types/selector.types';

const useFixQuantityOptions = (exchanges: JSONPricesType) => {
  const options: selectorOptionsType = [];

  Object.keys(exchanges).forEach((_, index) => {
    options.push({
      value: String(index + 1),
      label: String(index + 1),
    });
  });

  return { options };
};

export default useFixQuantityOptions;
