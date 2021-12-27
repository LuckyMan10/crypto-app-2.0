import React from 'react';
import { Line } from '@ant-design/charts';
import style from './style.module.scss';
import { ChartDataType } from './types';

const Chart: React.FC<ChartDataType> = ({ chartData }) => {
  return (
    <article className={style.chart}>
      {
        <div className={style.chartWrapper}>
          <Line data={chartData} padding="auto" xField="date" yField="price" />
        </div>
      }
    </article>
  );
};

export { Chart };
