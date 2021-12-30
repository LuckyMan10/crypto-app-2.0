import React from 'react';
import style from './style.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import bitcoin from 'assets/icons/Bitcoin.png';
import cardano from 'assets/icons/cardano.png';
import eth from 'assets/icons/eth.png';
import solana from 'assets/icons/solana.png';
import usdt from 'assets/icons/usdt.png';
import backgroundImg from 'assets/images/backgroundSlider.jpg';

const Slider: React.FC = () => {
  return (
    <article className={style.Slider}>
      <h1>Crypto App</h1>
      <p>Get all the info regarding your favorite crypto currency</p>
      <div className={style.background}>
        <span></span>
        <img src={backgroundImg} />
      </div>
      <Carousel
        transitionTime={1000}
        interval={6000}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        showIndicators={false}
        autoPlay={true}
        showArrows={false}>
        <div className={style.slide}>
          <img src={solana} />
          <p>solana</p>
        </div>
        <div className={style.slide}>
          <img src={bitcoin} />
          <p>bitcoin</p>
        </div>
        <div className={style.slide}>
          <img src={usdt} />
          <p>usdt</p>
        </div>
        <div className={style.slide}>
          <img src={eth} />
          <p>eth</p>
        </div>
        <div className={style.slide}>
          <img src={cardano} />
          <p>cardano</p>
        </div>
      </Carousel>
    </article>
  );
};

export { Slider };
