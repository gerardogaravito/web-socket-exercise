import { JSONPricesType } from 'types/prices.types';

export interface IExchangesContainer {
  exchanges: JSONPricesType;
  selectedExchange: string;
  showQuantity: string;
}
