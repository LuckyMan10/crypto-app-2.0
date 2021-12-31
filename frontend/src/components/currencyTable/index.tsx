import React from 'react';
import { Table } from 'antd';
import { useAppSelector } from 'app/hooks';
import { useHistory } from 'react-router-dom';
import { coinType } from 'features/coinGeckoApi/homePage/types';
import { useMediaQuery } from 'react-responsive';
import { defaultTableColumns, mobileTableColumns } from './columns';
import { Style } from './style';

const CurrencyTable: React.FC = () => {
  const history = useHistory();
  const { coinsList, isFiltred, filtredCoinsList } = useAppSelector((state) => state.home);
  const isMediumScreen = useMediaQuery({ query: '(max-width: 660px)' });
  const isSmallScreen = useMediaQuery({ query: '(max-width: 400px)' });
  const { isTableLoading } = useAppSelector((state) => state.local);
  const tableClickHandler = (record: coinType) => {
    history.push(`/coin/${record.id}`);
  };
  return (
    <Style isSmallScreen={isSmallScreen}>
      <Table
        onRow={(record) => {
          return {
            onClick: () => {
              tableClickHandler(record);
            }
          };
        }}
        columns={isMediumScreen ? mobileTableColumns : defaultTableColumns}
        dataSource={isFiltred ? filtredCoinsList : coinsList}
        loading={isTableLoading}
        pagination={{
          position: ['bottomCenter'],
          pageSize: 10,
          size: isSmallScreen ? 'small' : 'default'
        }}
      />
    </Style>
  );
};

export { CurrencyTable };
