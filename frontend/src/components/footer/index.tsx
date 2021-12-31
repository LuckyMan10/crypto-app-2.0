import React from 'react';
import logo from 'assets/images/bitcoin_logo.webp';
import { Style } from './style';

const Footer: React.FC = () => {
  return (
    <Style>
      <div className="footerLogo">
        <img src={logo} alt="footer-logo" />
        <p>Crypto App ©</p>
      </div>
      <div className="about">
        <p>Author: LuckyMan10</p>
        <p>
          Github: <a href="https://github.com/LuckyMan10">Click me</a>
        </p>
      </div>
    </Style>
  );
};

export { Footer };
