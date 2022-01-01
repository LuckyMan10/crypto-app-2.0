import React, { useEffect } from 'react';
import { getWatchList } from 'features/userApi/thunks';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { WatchListItem } from 'components/watchListItem/index';
import { Spin } from 'antd';
import { Style } from './style';
import { EmptyWatchList } from 'components/emptyWatchList/index';

const WatchList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isWatchListLoading, isWatchListError, watchList, defaultCurrency } = useAppSelector(
    (state) => state.user
  );
  const { emptyPageSize } = useAppSelector((state) => state.local);
  useEffect(() => {
    dispatch(getWatchList({ currency: defaultCurrency, days: 365 }));
  }, []);
  return (
    <Style emptyPageSize={emptyPageSize}>
      <div className="pageWrapper">
        {!isWatchListLoading && !isWatchListError ? (
          watchList.map((el, index) => {
            const coinData = { coin: el, index };
            return (
              <div key={`watchList_item_${index}`}>
                <WatchListItem {...coinData} />
              </div>
            );
          })
        ) : (
          <Spin size="large" />
        )}
        {!watchList.length && !isWatchListLoading && <EmptyWatchList />}
      </div>
    </Style>
  );
};
export { WatchList };
