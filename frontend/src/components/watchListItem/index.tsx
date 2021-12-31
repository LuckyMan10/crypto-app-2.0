import React, { useEffect } from 'react';
import { CurrencyCard } from 'components/currencyCard';
import { getWatchList, updateOneChart } from 'features/userApi/thunks';
import { setLoadingChart, setDays } from 'features/userApi/index';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Line } from '@ant-design/charts';
import { Button, Divider } from 'antd';
import { Spin } from 'antd';
import { oneCoinType } from 'features/coinGeckoApi/coinPage/types';
import { removeWatchedCoin } from 'features/userApi/thunks';
import { Style } from './style';

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
    <Style emptyPageSize={emptyPageSize} key={`watch-list_${index}`}>
      <Divider plain>{coin.name}</Divider>
      <div className="oneCoin">
        <div className="oneCoinWrapper">
          <div className="cardWrapper">
            <CurrencyCard {...coin} />
            <Button onClick={removeCoinHandler} danger type="primary">
              <p>Remove coin</p>
            </Button>
          </div>
          <div className="chartWrapper">
            {!chartsLoading[coin.id] ? (
              <Line data={charts[coin.id]} padding="auto" xField="date" yField="price" />
            ) : (
              <Spin size="large" />
            )}
          </div>
        </div>
        <div className="buttons">
          <div onClick={chartButtonsClickHandler} className="buttonsWrapper">
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
    </Style>
  );
};

export { WatchListItem };
