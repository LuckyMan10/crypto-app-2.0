import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import style from './style.module.scss';
import { fetchChartData } from './fetchChartData';
import { ChartDataType } from './types';

const Chart: React.FC = () => {
  const [data, setData] = useState<ChartDataType>([]);
  useEffect(() => {
    fetchChartData().then((chartData) => setData(chartData));
  }, []);

  return (
    <article className={style.chart}>
      <div className={style.chartWrapper}>
        <Line data={data} padding="auto" xField="date" yField="price" />
      </div>
    </article>
  );
};

export { Chart };
