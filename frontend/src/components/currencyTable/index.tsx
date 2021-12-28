import React from 'react';
import { Table } from 'antd';
import style from './style.module.scss';
import { useAppSelector } from 'app/hooks';
import { useHistory } from 'react-router-dom';
import { coinType } from 'features/coinGeckoApi/homePage/types';
import { tableColumns } from './columns';

const CurrencyTable: React.FC = () => {
  const history = useHistory();
  const { coinsList, isFiltred, filtredCoinsList } = useAppSelector((state) => state.home);
  const { isTableLoading } = useAppSelector((state) => state.local);
  const tableClickHandler = (record: coinType) => {
    history.push(`/coin/${record.id}`);
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
        columns={tableColumns}
        dataSource={isFiltred ? filtredCoinsList : coinsList}
        loading={isTableLoading}
        pagination={{
          position: ['bottomCenter'],
          pageSize: 10
        }}
      />
    </article>
  );
};

export { CurrencyTable };
