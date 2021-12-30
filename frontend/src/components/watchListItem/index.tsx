import React, { useEffect } from 'react';
import style from './style.module.scss';
import { CurrencyCard } from 'components/currencyCard';
import { getWatchList, updateOneChart } from 'features/userApi/thunks';
import { setLoadingChart, setDays } from 'features/userApi/index';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Line } from '@ant-design/charts';
import { Button, Divider } from 'antd';
import { Spin } from 'antd';
import { oneCoinType } from 'features/coinGeckoApi/coinPage/types';
import { removeWatchedCoin } from 'features/userApi/thunks';

const spinStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const dividerStyle = {
  color: 'white',
  fontSize: 25,
  borderColor: 'white'
};

const WatchListItem: React.FC<{ coin: oneCoinType; index: number }> = ({ coin, index }) => {
  const dispatch = useAppDispatch();
  const { defaultCurrency, charts, chartsLoading, days } = useAppSelector((state) => state.user);
  const { buttonsData, emptyPageSize } = useAppSelector((state) => state.local);
  useEffect(() => {
    dispatch(getWatchList({ currency: defaultCurrency, days: 365 }));
  }, [defaultCurrency]);
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
  const removeCoinHandler = () => {
    dispatch(removeWatchedCoin(coin.id));
  };
  return (
    <div
      style={{ minHeight: emptyPageSize }}
      className={style.watchList}
      key={`watch-list_${index}`}>
      <Divider style={dividerStyle} plain>
        {coin.name}
      </Divider>
      <div className={style.oneCoin}>
        <div className={style.oneCoinWrapper}>
          <div className={style.cardWrapper}>
            <CurrencyCard {...coin} />
            <Button onClick={removeCoinHandler} danger type="primary">
              <p>Remove coin</p>
            </Button>
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
