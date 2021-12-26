import React from 'react';
import { Input } from 'antd';
import style from './style.module.scss';

const inputStyle = {
  width: '400px'
};

const SearchInput: React.FC = () => {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  return (
    <article className={style.searchInput}>
      <Search
        placeholder="Search for a crypto currency..."
        onSearch={onSearch}
        size="large"
        style={inputStyle}
      />
    </article>
  );
};

export { SearchInput };
