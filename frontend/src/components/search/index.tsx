import React from 'react';
import { setFiltredCoinsList, setSearchValue } from 'features/coinGeckoApi/homePage/index';
import { useDebounce } from 'rooks';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useMediaQuery } from 'react-responsive';
import { Input } from 'antd';
import { Style } from './style';

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
  return (
    <Style isMediumScreen={isMediumScreen}>
      <Input
        placeholder="search for a cryptocurrency..."
        onChange={inputChangeHandler}
        value={searchValue}
      />
    </Style>
  );
};
export { SearchInput };
