import React, { useEffect } from 'react';
import { getWatchList } from 'features/userApi/thunks';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import style from './style.module.scss';
import { WatchListItem } from 'components/watchListItem/index';

const WatchList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isWatchListLoading, isWatchListError, watchList, defaultCurrency } = useAppSelector(
    (state) => state.user
  );
  useEffect(() => {
    dispatch(getWatchList({ currency: defaultCurrency, days: 365 }));
  }, []);
  return (
    <main className={style.watchListPage}>
      <div className={style.pageWrapper}>
        {!isWatchListLoading &&
          !isWatchListError &&
          watchList.map((el, index) => {
            const coinData = { coin: el, index };
            return (
              <div key={`watchList_item_${index}`}>
                <WatchListItem {...coinData} />
              </div>
            );
          })}
      </div>
    </main>
  );
};
export { WatchList };
