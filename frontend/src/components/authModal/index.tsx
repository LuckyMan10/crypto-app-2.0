import React, { useState } from 'react';
import { Modal } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setAuthModalVisible } from 'features/local/localSlice';
import { Button } from 'antd';
import style from './style.module.scss';
import { Login } from 'components/forms/login';
import { Registration } from 'components/forms/registration';
import { Spin } from 'antd';

const AuthModal: React.FC = () => {
  const [authVariant, setAuthVariant] = useState<string>('login');
  const dispatch = useAppDispatch();
  const { isAuthModalVisible, isAuthLoading } = useAppSelector((state) => state.local);
  const handleOk = () => {
    dispatch(setAuthModalVisible(false));
  };
  const handleCancel = () => {
    dispatch(setAuthModalVisible(false));
  };
  const buttonsHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = (e.target as HTMLElement).id;
    if (id) {
      setAuthVariant(id);
    }
  };

  return (
    <article>
      <Modal
        title="login, registration"
        visible={isAuthModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}>
        <Spin size="large" spinning={isAuthLoading}>
          <div onClick={buttonsHandler} className={style.logReg_buttons}>
            <Button disabled={authVariant === 'login'} id="login">
              <p id="login">Login</p>
            </Button>
            <Button disabled={authVariant === 'reg'} id="reg">
              <p id="reg">Registration</p>
            </Button>
          </div>
          {authVariant === 'login' ? <Login /> : <Registration />}
        </Spin>
      </Modal>
    </article>
  );
};

export { AuthModal };
