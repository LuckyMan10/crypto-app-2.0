import React, { useEffect } from 'react';
import { Slider } from 'components/slider';
import { MainTitle } from 'components/mainTitle';
import { SearchInput } from 'components/search';
import { CurrencyTable } from 'components/currencyTable';
import { getCoinsList } from 'features/coinGeckoApi/homePage/thunks';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setTableLoading } from 'features/local/localSlice';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { defaultCurrency } = useAppSelector((state) => state.home);
  useEffect(() => {
    dispatch(setTableLoading(true));
    dispatch(getCoinsList(defaultCurrency)).then(() => {
      dispatch(setTableLoading(false));
    });
  }, [defaultCurrency]);

  return (
    <main>
      <Slider />
      <MainTitle />
      <SearchInput />
      <CurrencyTable />
    </main>
  );
};

export { Home };
