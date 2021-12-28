import React from 'react';
import { LoginForm } from './form';
import { loginData } from '../types';
import { login } from 'features/authApi/thunks';
import { useAppDispatch } from 'app/hooks';
import { setAuthModalVisible, setAuthLoading } from 'features/local/localSlice';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const onFinish = (values: loginData) => {
    dispatch(setAuthLoading(true));
    const dataCopy = { ...values };
    delete dataCopy.remember;
    dispatch(login(dataCopy)).then((data) => {
      dispatch(setAuthModalVisible(false));
      console.log(data);
      dispatch(setAuthLoading(false));
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <article>
      <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
    </article>
  );
};

export { Login };
