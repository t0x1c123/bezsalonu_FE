import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input } from 'antd';
import axios from 'axios';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Space } from '../../components/Space/Space';

export const LoginForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios({
      withCredentials: true,
      method: 'post',
      url: 'http://localhost:8000/auth/local',
      data,
    });
    if (response.status === 200) {
      window.location.reload();
    } else {
      alert('Chyba more');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {watch('email')}
        {JSON.stringify(errors)}
        <div className="input-group">
          <label className="label">E-mail</label>
          <Controller
            render={({ field }) => <Input {...field} placeholder={'Zadejte váš e-mail'} size="large" />}
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true }}
          />
          <label className="label">Heslo</label>
          <Controller
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder={'Minimálně 6 znaků'}
                size="large"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            )}
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: true }}
          />
          <Space size="5" />
          <Button type="primary" htmlType="submit" style={{ width: '100%' }} size="large">
            Přihlásit
          </Button>
        </div>
      </form>
    </>
  );
};
