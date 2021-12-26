import React from 'react';
import { Card, Typography } from 'antd';
import style from './style.module.scss';

type CurrencyDescription = {
  title: string;
  description: string;
};

const CurrencyDescription: React.FC<CurrencyDescription> = ({ title, description }) => {
  const { Title } = Typography;
  const customTitle = <Title level={3}>{title}</Title>;
  return (
    <article className={style.currencyDescription}>
      <Card title={customTitle}>
        <p>{description}</p>
      </Card>
    </article>
  );
};

export { CurrencyDescription };
