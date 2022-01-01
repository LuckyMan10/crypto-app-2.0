import React from 'react';
import { LoginForm } from './form';
import { loginData, errorsType } from '../types';
import { login } from 'features/authApi/thunks';
import { useAppDispatch } from 'app/hooks';
import { setAuthModalVisible, setAuthLoading } from 'features/local/localSlice';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const onFinish = (values: loginData) => {
    dispatch(setAuthLoading(true));
    const dataCopy = { ...values };
    delete dataCopy.remember;
    dispatch(login(dataCopy)).then(() => {
      dispatch(setAuthModalVisible(false));
      dispatch(setAuthLoading(false));
    });
  };

  const onFinishFailed = (errorInfo: errorsType) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <article>
      <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
    </article>
  );
};

export { Login };
