import React from 'react';
import { Slider } from 'components/slider';
import { MainTitle } from 'components/mainTitle';
import { SearchInput } from 'components/search';
import { CurrencyTable } from 'components/currencyTable';

const Home: React.FC = () => {
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
