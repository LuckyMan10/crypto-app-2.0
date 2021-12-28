import React from 'react';
import { RegForm } from './form';
import { regData, errorsType } from '../types';
import { registration } from 'features/authApi/thunks';
import { useAppDispatch } from 'app/hooks';
import { setAuthModalVisible, setAuthLoading } from 'features/local/localSlice';

const Registration: React.FC = () => {
  const dispatch = useAppDispatch();
  const onFinish = (values: regData) => {
    dispatch(setAuthLoading(true));
    const dataCopy = { ...values };
    delete dataCopy.confirm;
    delete dataCopy.remember;
    dispatch(registration(dataCopy)).then((data) => {
      console.log('data: ', data);
      dispatch(setAuthModalVisible(false));
      dispatch(setAuthLoading(false));
    });
  };

  const onFinishFailed = (errorInfo: errorsType) => {
    console.log('Failed:', errorInfo);
  };
  return <RegForm onFinish={onFinish} onFinishFailed={onFinishFailed} />;
};

export { Registration };
