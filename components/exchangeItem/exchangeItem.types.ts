import { ReactNode } from 'react';

export interface IExchangeItem {
  item: [
    string,
    {
      [x: string]: ReactNode;
    }
  ];
}
