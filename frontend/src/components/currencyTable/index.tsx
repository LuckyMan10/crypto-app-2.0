import React from 'react';
import { Table } from 'antd';
import style from './style.module.scss';
import { useAppSelector } from 'app/hooks';
import { useHistory } from 'react-router-dom';
import { coinType } from 'features/coinGeckoApi/homePage/types';

const tableColumns = [
  {
    title: 'Logo',
    dataIndex: 'image',
    key: 'image',
    render: (image: string) => <img style={{ maxWidth: 70 }} src={image} />
  },
  {
    title: 'Name',
    dataIndex: 'coin',
    key: 'coin'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: '24h Change',
    dataIndex: 'change',
    key: 'change'
  },
  {
    title: 'Market cap',
    dataIndex: 'cap',
    key: 'cap'
  }
];

const CurrencyTable: React.FC = () => {
  const history = useHistory();
  const { coinsList } = useAppSelector((state) => state.home);
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
        dataSource={coinsList}
        pagination={{
          position: ['bottomCenter'],
          pageSize: 10
        }}
      />
    </article>
  );
};

export { CurrencyTable };
