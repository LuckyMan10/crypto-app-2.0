import React from 'react';
import style from './style.module.scss';

type Description = {
  rank: number;
  currPrice: number;
  marketCap: number;
};

const Description: React.FC<Description> = ({ rank, currPrice, marketCap }) => {
  return (
    <div className={style.cardDescription}>
      <p>Rank: {rank}</p>
      <p>Current Price: {currPrice}</p>
      <p>Market Cap: {marketCap}</p>
    </div>
  );
};

export { Description };
