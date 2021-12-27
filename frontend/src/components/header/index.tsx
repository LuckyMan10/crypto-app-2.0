import React from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './style.module.scss';
import { Logo } from './logo';
import { AuthModal } from 'components/authModal';
import { useAppDispatch } from 'app/hooks';
import { setAuthModalVisible } from 'features/local/localSlice';
import { SelectCurr } from './SelectCurr';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  function loginButtonHandler() {
    dispatch(setAuthModalVisible(true));
  }
  return (
    <header className={style.header}>
      <Logo />
      <div className={style.buttons}>
        <div className={style.selectWrapper}>
          <SelectCurr />
        </div>
        <div className={style.authBtnWrapper}>
          <Button onClick={loginButtonHandler} type="primary" icon={<UserOutlined />}>
            Login
          </Button>
        </div>
      </div>
      <div className={style.authModalWrapper}>
        <AuthModal />
      </div>
    </header>
  );
};

export { Header };
