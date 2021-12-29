import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import 'global.css';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { AppRouter } from 'routes';
import { useAppDispatch } from 'app/hooks';
import { setEmptyPageSize } from 'features/local/localSlice';
import { refresh } from 'features/authApi/thunks';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setEmptyPageSize(window.innerHeight));
    dispatch(refresh());
  }, []);

  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
