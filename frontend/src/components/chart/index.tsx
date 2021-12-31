import React from 'react';
import { Line } from '@ant-design/charts';
import { Style } from './style';
import { ChartDataType } from './types';

const Chart: React.FC<ChartDataType> = ({ chartData }) => {
  return (
    <Style>
      {
        <div className="chartWrapper">
          <Line data={chartData} padding="auto" xField="date" yField="price" />
        </div>
      }
    </Style>
  );
};

export { Chart };
