import React from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { addWatchedCoin } from 'features/userApi/thunks';
import spinCoin from 'assets/gif/spin_coin.gif';
import style from './style.module.scss';
import { addNewCoin } from 'features/userApi/types';

const AddToWatch: React.FC = () => {
  const dispatch = useAppDispatch();
  const { oneCoinData, defaultCurrency } = useAppSelector((state) => state.coin);
  const addToWatchHandler = () => {
    const data: addNewCoin = {
      newCoinData: {
        coinId: oneCoinData[0].id,
        name: oneCoinData[0].name
      },
      days: 365,
      currency: defaultCurrency
    };
    dispatch(addWatchedCoin(data)).then((data) => {
      console.log('data: ', data);
    });
  };

  return (
    <div className={style.addToWatchWrapper}>
      <button onClick={addToWatchHandler}>
        <img src={spinCoin} alt="spin-coin" />
        <h2>Add to watch list</h2>
      </button>
    </div>
  );
};

export { AddToWatch };
