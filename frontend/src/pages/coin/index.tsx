import React, { useEffect } from 'react';
import { Chart } from 'components/chart';
import { ChartButtons } from 'components/chartButtons';
import { CurrencyCard } from 'components/currencyCard';
import { CurrencyDescription } from 'components/currencyDescription';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { useHistory, useParams } from 'react-router-dom';
import { getOneCoinData, getChartData } from 'features/coinGeckoApi/coinPage/thunks';
import { Spin } from 'antd';
import { Button } from 'antd';
import { RouteNames } from 'routes/enum';
import { AddToWatch } from 'components/addToWatchButton';
import { Style } from './style';

const Coin: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { emptyPageSize } = useAppSelector((state) => state.local);
  const { isAuth, isAuthError } = useAppSelector((state) => state.auth);
  const {
    isOneCoinLoading,
    isOneCoinError,
    oneCoinData,
    defaultCurrency,
    isChartDataLoading,
    isChartDataError,
    chartData,
    days
  } = useAppSelector((state) => state.coin);
  const { id } = useParams() as {
    id: string;
  };
  useEffect(() => {
    dispatch(getOneCoinData(id));
    dispatch(getChartData({ currency: defaultCurrency, id, days }));
  }, [days]);
  const toHomeHandler = () => {
    history.push(RouteNames.HOME);
    window.scrollTo(0, 0);
  };
  return (
    <Style emptyPageSize={emptyPageSize}>
      {!isOneCoinLoading && !isOneCoinError && !isChartDataLoading && !isChartDataError ? (
        <>
          <Chart chartData={chartData} />
          <ChartButtons />
          <div className="wrapper">
            <div className="coinMain">
              <CurrencyCard {...oneCoinData[0]} />
              <CurrencyDescription {...oneCoinData[0]} />
            </div>
          </div>
          <div className="toHomeWrapper">
            <Button size="large" onClick={toHomeHandler}>
              To home
            </Button>
          </div>
          {isAuth && !isAuthError && <AddToWatch />}
        </>
      ) : (
        <Spin size="large" />
      )}
    </Style>
  );
};

export { Coin };
