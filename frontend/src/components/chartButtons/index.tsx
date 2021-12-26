import React from 'react';
import { Button } from 'antd';
import style from './style.module.scss';

const ChartButtons: React.FC = () => {
  const buttonsData = [
    {
      id: 'button_1',
      text: '24 HOURS',
      days: 1
    },
    {
      id: 'button_2',
      text: '30 DAYS',
      days: 30
    },
    {
      id: 'button_3',
      text: '3 MONTHS',
      days: 90
    },
    {
      id: 'button_4',
      text: '1 YEAR',
      days: 365
    }
  ];

  return (
    <article className={style.chartButtons}>
      <div className={style.buttonsWrapper}>
        {buttonsData.map((el) => {
          return (
            <Button key={el.id} size="large" type="default">
              {el.text}
            </Button>
          );
        })}
      </div>
    </article>
  );
};

export { ChartButtons };
