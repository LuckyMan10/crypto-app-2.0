import React from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Logo } from './logo';
import { AuthModal } from 'components/authModal';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setAuthModalVisible } from 'features/local/localSlice';
import { useMediaQuery } from 'react-responsive';
import { SelectCurr } from './SelectCurr';
import { UserMenu } from './Menu';
import { Style } from './style';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, isAuthError, user } = useAppSelector((state) => state.auth);
  const isMediumScreen = useMediaQuery({ query: '(max-width: 660px)' });
  function loginButtonHandler() {
    dispatch(setAuthModalVisible(true));
  }
  return (
    <Style>
      <Logo />
      <div className="buttons">
        <div className="selectWrapper">{!isMediumScreen && <SelectCurr />}</div>
        <div className="authBtnWrapper">
          {isAuth && !isAuthError ? (
            <UserMenu {...user} />
          ) : (
            <div className="notAuthBtnWrapper">
              <Button onClick={loginButtonHandler} type="primary" icon={<UserOutlined />}>
                Login
              </Button>
              {isMediumScreen && <SelectCurr />}
            </div>
          )}
        </div>
      </div>
      <div className="authModalWrapper">
        <AuthModal />
      </div>
    </Style>
  );
};

export { Header };
