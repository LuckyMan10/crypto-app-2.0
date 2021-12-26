import React from 'react';
import { Chart } from 'components/chart';
import { ChartButtons } from 'components/chartButtons';
import { CurrencyCard } from 'components/currencyCard';
import { CurrencyDescription } from 'components/currencyDescription';
import style from './style.module.scss';
import bitcoin from 'assets/icons/Bitcoin.png';

const cardData = {
  rank: 1,
  name: 'Bitcoin',
  image: bitcoin,
  currPrice: 50161,
  marketCap: 948610056207,
  title: 'Description of the cryptocurrency',
  description:
    'Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority'
};

const Coin: React.FC = () => {
  return (
    <main className={style.coin}>
      <Chart />
      <ChartButtons />
      <div className={style.wrapper}>
        <div className={style.coinMain}>
          <CurrencyCard {...cardData} />
          <CurrencyDescription {...cardData} />
        </div>
      </div>
    </main>
  );
};

export { Coin };
