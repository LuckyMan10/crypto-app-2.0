import React, { useEffect } from 'react';
import { Chart } from 'components/chart';
import { ChartButtons } from 'components/chartButtons';
import { CurrencyCard } from 'components/currencyCard';
import { CurrencyDescription } from 'components/currencyDescription';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { useParams } from 'react-router-dom';
import style from './style.module.scss';
import { getOneCoinData, getChartData } from 'features/coinGeckoApi/coinPage/thunks';
import { Spin } from 'antd';

const Coin: React.FC = () => {
  const dispatch = useAppDispatch();
  const emptyPageSize = window.innerHeight - (110 + 100);
  const spinStyle = {
    height: emptyPageSize,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const {
    isOneCoinLoading,
    isOneCoinError,
    oneCoinData,
    defaultCurrency,
    isChartDataLoading,
    isChartDataError,
    chartData
  } = useAppSelector((state) => state.coin);
  const { id } = useParams() as {
    id: string;
  };
  useEffect(() => {
    dispatch(getOneCoinData(id));
    dispatch(getChartData({ currency: defaultCurrency, id, days: 365 }));
  }, []);
  return (
    <main className={style.coin}>
      {!isOneCoinLoading && !isOneCoinError && !isChartDataLoading && !isChartDataError ? (
        <>
          <Chart chartData={chartData} />
          <ChartButtons />
          <div className={style.wrapper}>
            <div className={style.coinMain}>
              <CurrencyCard {...oneCoinData[0]} />
              <CurrencyDescription {...oneCoinData[0]} />
            </div>
          </div>
        </>
      ) : (
        <Spin size="large" style={spinStyle} />
      )}
    </main>
  );
};

export { Coin };
