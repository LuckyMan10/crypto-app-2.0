import React from 'react';
import style from './style.module.scss';
import { Card } from 'antd';
import { Description } from './description';

const cardStyle = {
  maxWidth: 340
};

type cardType = {
  rank: number;
  name: string;
  image: string;
  currPrice: number;
  marketCap: number;
};

const CurrencyCard: React.FC<cardType> = ({ rank, name, image, currPrice, marketCap }) => {
  return (
    <article className={style.currencyCard}>
      <Card style={cardStyle}>
        <div className={style.cardWrapper}>
          <img src={image} alt="coin" />
          <h3>{name}</h3>
          <Description rank={rank} currPrice={currPrice} marketCap={marketCap} />
        </div>
      </Card>
    </article>
  );
};

export { CurrencyCard };
