import React from 'react';
import { Button } from 'antd';
import style from './style.module.scss';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { setDays } from 'features/coinGeckoApi/coinPage/index';

const ChartButtons: React.FC = () => {
  const dispatch = useAppDispatch();
  const { days } = useAppSelector((state) => state.coin);
  const { buttonsData } = useAppSelector((state) => state.local);
  const chartButtonsClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = (e.target as HTMLElement).id;
    if (id) {
      const [button] = buttonsData.filter((el) => el.id === id);
      dispatch(setDays(button.days));
    }
  };

  return (
    <article className={style.chartButtons}>
      <div onClick={chartButtonsClickHandler} className={style.buttonsWrapper}>
        {buttonsData.map((el) => {
          return (
            <Button id={el.id} key={el.id} size="large" disabled={days === el.days} type="default">
              <p id={el.id}>{el.text}</p>
            </Button>
          );
        })}
      </div>
    </article>
  );
};

export { ChartButtons };
