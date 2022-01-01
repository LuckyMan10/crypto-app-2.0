import React from 'react';
import { Style } from './style';
import { useAppSelector } from 'app/hooks';
import spin_coin from 'assets/gif/spin_coin.gif';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { RouteNames } from 'routes/enum';

const EmptyWatchList: React.FC = () => {
  const history = useHistory();
  const { emptyPageSize } = useAppSelector((state) => state.local);
  const toHomeHandler = () => {
    history.push(RouteNames.HOME);
  };
  return (
    <Style emptyPageSize={emptyPageSize}>
      <img src={spin_coin} alt="spin coin" />
      <h1>Watch list is empty</h1>
      <Button onClick={toHomeHandler}>Go to home</Button>
    </Style>
  );
};

export { EmptyWatchList };
