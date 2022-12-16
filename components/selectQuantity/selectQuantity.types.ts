import { Dispatch, SetStateAction } from 'react';
import { JSONPricesType } from 'types/prices.types';

export interface ISelectQuantity {
  exchanges: JSONPricesType;
  setShowQuantity: Dispatch<SetStateAction<string>>;
}
