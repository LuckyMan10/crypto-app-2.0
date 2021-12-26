import React from 'react';
import { Select } from 'antd';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './style.module.scss';
import { Logo } from './logo';

const Header: React.FC = () => {
  const { Option } = Select;
  function onChange(val: string) {
    console.log(`selected ${val}`);
  }

  function onSearch(val: string) {
    console.log('search:', val);
  }
  return (
    <header className={style.header}>
      <Logo />
      <div className={style.buttons}>
        <div className={style.selectWrapper}>
          <Select
            showSearch
            placeholder="Select a currency"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }>
            <Option value="USD">USD</Option>
            <Option value="RUB">RUB</Option>
            <Option value="EUR">EUR</Option>
          </Select>
        </div>
        <div className={style.authBtnWrapper}>
          <Button type="primary" icon={<UserOutlined />}>
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
