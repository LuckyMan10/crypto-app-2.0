import React from 'react';
import style from './style.module.scss';
import { setFiltredCoinsList, setSearchValue } from 'features/coinGeckoApi/homePage/index';
import { useDebounce } from 'rooks';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useMediaQuery } from 'react-responsive';
import { Input } from 'antd';

const SearchInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMediumScreen = useMediaQuery({ query: '(max-width: 660px)' });
  const { searchValue } = useAppSelector((state) => state.home);
  const filtredCoinsHandler = (value: string) => dispatch(setFiltredCoinsList(value));
  const setValueDebounced = useDebounce(filtredCoinsHandler, 300);
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
    setValueDebounced(e.target.value);
  };
  const inputStyle = {
    width: isMediumScreen ? '95%' : '400px',
    fontSize: isMediumScreen ? '1rem' : '21px'
  };
  return (
    <article className={style.searchInput}>
      <Input
        placeholder="search for a cryptocurrency..."
        style={inputStyle}
        onChange={inputChangeHandler}
        value={searchValue}
      />
    </article>
  );
};
export { SearchInput };
