import React from 'react';
import 'antd/dist/antd.css';
import 'global.css';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { AppRouter } from 'routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
