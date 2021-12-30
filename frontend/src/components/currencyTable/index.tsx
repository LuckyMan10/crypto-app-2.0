import React from 'react';
import { Table } from 'antd';
import style from './style.module.scss';
import { useAppSelector } from 'app/hooks';
import { useHistory } from 'react-router-dom';
import { coinType } from 'features/coinGeckoApi/homePage/types';
import { useMediaQuery } from 'react-responsive';
import { defaultTableColumns, mobileTableColumns } from './columns';

const CurrencyTable: React.FC = () => {
  const history = useHistory();
  const { coinsList, isFiltred, filtredCoinsList } = useAppSelector((state) => state.home);
  const isMediumScreen = useMediaQuery({ query: '(max-width: 660px)' });
  const isSmallScreen = useMediaQuery({ query: '(max-width: 400px)' });
  const { isTableLoading } = useAppSelector((state) => state.local);
  const tableClickHandler = (record: coinType) => {
    history.push(`/coin/${record.id}`);
  };
  const paginationStyle = {
    background: isSmallScreen ? 'white' : 'transparent',
    padding: 10,
    fontSize: isSmallScreen ? 25 : '100%',
    borderRadius: 5
  };
  return (
    <article className={style.currencyTable}>
      <Table
        onRow={(record) => {
          return {
            onClick: () => {
              tableClickHandler(record);
            }
          };
        }}
        style={{ width: '95%' }}
        columns={isMediumScreen ? mobileTableColumns : defaultTableColumns}
        dataSource={isFiltred ? filtredCoinsList : coinsList}
        loading={isTableLoading}
        pagination={{
          position: ['bottomCenter'],
          pageSize: 10,
          size: isSmallScreen ? 'small' : 'default',
          style: paginationStyle
        }}
      />
    </article>
  );
};

export { CurrencyTable };
