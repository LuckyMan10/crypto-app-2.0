import React from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './style.module.scss';
import { Logo } from './logo';
import { AuthModal } from 'components/authModal';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setAuthModalVisible } from 'features/local/localSlice';
import { useMediaQuery } from 'react-responsive';
import { SelectCurr } from './SelectCurr';
import { UserMenu } from './Menu';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, isAuthError, user } = useAppSelector((state) => state.auth);
  const isMediumScreen = useMediaQuery({ query: '(max-width: 660px)' });
  function loginButtonHandler() {
    dispatch(setAuthModalVisible(true));
  }
  return (
    <header className={style.header}>
      <Logo />
      <div className={style.buttons}>
        <div className={style.selectWrapper}>{!isMediumScreen && <SelectCurr />}</div>
        <div className={style.authBtnWrapper}>
          {isAuth && !isAuthError ? (
            <UserMenu {...user} />
          ) : (
            <div className={style.notAuthBtnWrapper}>
              <Button onClick={loginButtonHandler} type="primary" icon={<UserOutlined />}>
                Login
              </Button>
              {isMediumScreen && <SelectCurr />}
            </div>
          )}
        </div>
      </div>
      <div className={style.authModalWrapper}>
        <AuthModal />
      </div>
    </header>
  );
};

export { Header };
