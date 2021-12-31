import React, { useState } from 'react';
import { Modal } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setAuthModalVisible } from 'features/local/localSlice';
import { Button } from 'antd';
import { Login } from 'components/forms/login';
import { Registration } from 'components/forms/registration';
import { Spin } from 'antd';
import { modal } from './enum';
import { Style } from './style';

const AuthModal: React.FC = () => {
  const [authVariant, setAuthVariant] = useState<string>(modal.LOGIN);
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
    <Style>
      <Modal
        title="login, registration"
        visible={isAuthModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}>
        <Spin size="large" spinning={isAuthLoading}>
          <div onClick={buttonsHandler} className="variant-buttons">
            <Button disabled={authVariant === modal.LOGIN} id={modal.LOGIN}>
              <p id={modal.LOGIN}>Login</p>
            </Button>
            <Button disabled={authVariant === modal.REGISTRATION} id={modal.REGISTRATION}>
              <p id={modal.REGISTRATION}>Registration</p>
            </Button>
          </div>
          {authVariant === modal.LOGIN ? <Login /> : <Registration />}
        </Spin>
      </Modal>
    </Style>
  );
};

export { AuthModal };
