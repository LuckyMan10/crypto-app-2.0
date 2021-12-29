import React, { useEffect } from 'react';
import style from './style.module.scss';
import { CurrencyCard } from 'components/currencyCard';
import { getWatchList, updateOneChart } from 'features/userApi/thunks';
import { setLoadingChart, setDays } from 'features/userApi/index';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Line } from '@ant-design/charts';
import { Button } from 'antd';
import { Spin } from 'antd';
import { oneCoinType } from 'features/coinGeckoApi/coinPage/types';

const spinStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const WatchListItem: React.FC<{ coin: oneCoinType; index: number }> = ({ coin, index }) => {
  const dispatch = useAppDispatch();
  const { defaultCurrency, charts, chartsLoading, days } = useAppSelector((state) => state.user);
  const { buttonsData } = useAppSelector((state) => state.local);
  useEffect(() => {
    dispatch(getWatchList({ currency: defaultCurrency, days: 365 }));
  }, []);
  const chartButtonsClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = (e.target as HTMLElement).id;
    const days = Number((e.target as HTMLElement).dataset.days);
    if (id && days) {
      dispatch(setLoadingChart(id));
      dispatch(updateOneChart({ currency: defaultCurrency, id, days })).then(() => {
        dispatch(setDays({ id, days }));
      });
    }
  };
  return (
    <div className={style.watchList} key={`watch-list_${index}`}>
      <div className={style.oneCoin}>
        <div className={style.oneCoinWrapper}>
          <div className={style.cardWrapper}>
            <CurrencyCard {...coin} />
          </div>
          <div className={style.chartWrapper}>
            {!chartsLoading[coin.id] ? (
              <Line data={charts[coin.id]} padding="auto" xField="date" yField="price" />
            ) : (
              <Spin size="large" style={spinStyle} />
            )}
          </div>
        </div>
        <div className={style.buttons}>
          <div onClick={chartButtonsClickHandler} className={style.buttonsWrapper}>
            {buttonsData.map((button, index) => {
              return (
                <Button
                  id={coin.id}
                  disabled={days[coin.id] === button.days}
                  data-days={button.days}
                  key={`${coin.id}_${index}`}
                  size="large"
                  type="default">
                  <p id={coin.id} data-days={button.days} data-button={button.id}>
                    {button.text}
                  </p>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { WatchListItem };
