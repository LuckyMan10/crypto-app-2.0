import React from 'react';
import { Card } from 'antd';
import { Description } from './description';
import { Style } from './style';

type cardType = {
  rank: number;
  name: string;
  image: string;
  currPrice: number;
  marketCap: number;
};

const CurrencyCard: React.FC<cardType> = ({ rank, name, image, currPrice, marketCap }) => {
  return (
    <Style>
      <Card>
        <div className="cardWrapper">
          <img src={image} alt="coin" />
          <h3>{name}</h3>
          <Description rank={rank} currPrice={currPrice} marketCap={marketCap} />
        </div>
      </Card>
    </Style>
  );
};

export { CurrencyCard };
