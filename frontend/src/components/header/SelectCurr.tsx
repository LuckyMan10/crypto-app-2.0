import React from 'react';
import { Select } from 'antd';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { setCurrency } from 'features/coinGeckoApi/homePage';
import { setDefaultCurrency } from 'features/coinGeckoApi/coinPage';

const SelectCurr: React.FC = () => {
  const dispatch = useAppDispatch();
  const { defaultCurrency } = useAppSelector((state) => state.home);
  const { Option } = Select;
  const { currencyData } = useAppSelector((state) => state.local);
  function onChange(currency: string) {
    dispatch(setCurrency(currency));
    dispatch(setDefaultCurrency(currency));
  }
  return (
    <Select
      style={{ width: 100 }}
      showSearch
      placeholder="Select a currency"
      optionFilterProp="children"
      onChange={onChange}
      defaultValue={defaultCurrency}
      filterOption={(input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }>
      {currencyData.map((el) => {
        return (
          <Option key={el.name} value={el.symbol}>
            {el.symbol}
          </Option>
        );
      })}
    </Select>
  );
};

export { SelectCurr };
