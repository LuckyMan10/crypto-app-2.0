import React from 'react';
import logo from 'assets/images/bitcoin_logo.webp';
import style from './style.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerLogo}>
        <img src={logo} alt="footer-logo" />
        <p>Crypto App ©</p>
      </div>
      <div className={style.about}>
        <p>Author: LuckyMan10</p>
        <p>
          Github: <a href="https://github.com/LuckyMan10">Click me</a>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
