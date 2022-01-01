import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import backgroundImg from 'assets/images/backgroundSlider.jpg';
import { Style } from './style';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { getTrendingCoins } from 'features/coinGeckoApi/homePage/thunks';

const Slider: React.FC = () => {
  const { trendingCoins, isTrendingCoinsLoading, isTrendingCoinsError, defaultCurrency } =
    useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTrendingCoins(defaultCurrency));
  }, []);
  return (
    <Style>
      <h1>Crypto App</h1>
      <p>Get all the info regarding your favorite crypto currency</p>
      <div className="background">
        <span></span>
        <img src={backgroundImg} />
      </div>
      {!isTrendingCoinsError && !isTrendingCoinsLoading && (
        <Carousel
          transitionTime={1000}
          interval={6000}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          showIndicators={false}
          autoPlay={true}
          showArrows={false}>
          {trendingCoins.map((coin, index) => {
            return (
              <div key={`slide_key_${index}`} className="slide">
                <img src={coin.image} />
                <p>{coin.name}</p>
              </div>
            );
          })}
        </Carousel>
      )}
    </Style>
  );
};

export { Slider };
