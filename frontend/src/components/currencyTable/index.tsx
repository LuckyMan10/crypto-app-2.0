import React from 'react';
import { Table } from 'antd';
import style from './style.module.scss';

const columns = [
  {
    title: 'Coin',
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
const data = [
  {
    key: '1',
    coin: 'bitcoin',
    price: 50000,
    change: '-1.22%',
    cap: 98989898
  },
  {
    key: '2',
    coin: 'bitcoin',
    price: 50000,
    change: '-1.22%',
    cap: 98989898
  },
  {
    key: '3',
    coin: 'bitcoin',
    price: 50000,
    change: '-1.22%',
    cap: 98989898
  },
  {
    key: '4',
    coin: 'bitcoin',
    price: 50000,
    change: '-1.22%',
    cap: 98989898
  }
];

const tableStyle = {
  width: '95%'
};

const CurrencyTable: React.FC = () => {
  return (
    <article className={style.currencyTable}>
      <Table
        style={tableStyle}
        columns={columns}
        dataSource={data}
        pagination={{
          position: ['bottomCenter']
        }}
      />
    </article>
  );
};

export { CurrencyTable };
