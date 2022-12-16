import { Dispatch, SetStateAction } from 'react';
import { JSONPricesType } from 'types/prices.types';

export interface ISelectExchange {
  exchanges: JSONPricesType;
  setSelectedExchange: Dispatch<SetStateAction<string>>;
  setShowQuantity: Dispatch<SetStateAction<string>>;
}
