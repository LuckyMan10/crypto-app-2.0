import React, { useEffect } from 'react';
import { Slider } from 'components/slider';
import { MainTitle } from 'components/mainTitle';
import { SearchInput } from 'components/search';
import { CurrencyTable } from 'components/currencyTable';
import { getCoinsList } from 'features/coinGeckoApi/homePage/thunks';
import { useAppDispatch, useAppSelector } from 'app/hooks';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { defaultCurrency } = useAppSelector((state) => state.home);
  useEffect(() => {
    dispatch(getCoinsList(defaultCurrency));
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
