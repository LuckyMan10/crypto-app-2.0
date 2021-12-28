import React from 'react';

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

export { tableColumns };
