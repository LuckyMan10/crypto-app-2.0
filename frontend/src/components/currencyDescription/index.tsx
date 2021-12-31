import React from 'react';
import { Card, Typography } from 'antd';
import { Style } from './style';

type CurrencyDescription = {
  title: string;
  description: string;
};

const CurrencyDescription: React.FC<CurrencyDescription> = ({ title, description }) => {
  const { Title } = Typography;
  const customTitle = <Title level={3}>{title}</Title>;
  return (
    <Style>
      <Card title={customTitle}>
        <p>{description}</p>
      </Card>
    </Style>
  );
};

export { CurrencyDescription };
