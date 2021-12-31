import React from 'react';
import logo from 'assets/images/bitcoin_logo.webp';
import { useHistory } from 'react-router-dom';
import { RouteNames } from 'routes/enum';

const Logo: React.FC = () => {
  const history = useHistory();

  const logoClickHandler = () => {
    history.push(RouteNames.HOME);
  };

  return (
    <article onClick={logoClickHandler} className="logo">
      <img src={logo} alt="crypto-symbol" />
      <h1>Crypto App</h1>
    </article>
  );
};

export { Logo };
