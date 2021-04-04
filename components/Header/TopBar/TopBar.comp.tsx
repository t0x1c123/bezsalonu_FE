import { LoginOutlined } from '@ant-design/icons';
import { Col, Menu, Modal, Typography } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import Title from 'antd/lib/typography/Title';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { MenuInfo } from 'rc-menu/lib/interface';
import React, { useState } from 'react';
import Spinner from 'react-spinner-material';

import { useCurrentUserQuery } from '../../../generated/graphql';
import { Space } from '../../Space/Space';

import { UserMenu } from './components/UserMenu/UserMenu.comp';
import facebookLogo from './facebook.png';
import googleLogo from './google.png';
import * as S from './Topbar.style';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const TopBar: React.FC = () => {
  const { loading, data } = useCurrentUserQuery();
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState('home');
  const router = useRouter();
  const username = data?.currentUser?.strategyInfo?.personaname ?? '';
  const avatarUrl = data?.currentUser?.strategyInfo?.avatarmedium ?? '';

  const renderUserMenu = () => {
    if (!data?.currentUser) {
      return (
        <S.LoginButtonContainer>
          <motion.div whileTap={{ scale: 0.8 }}>
            <S.LoginButton size="large" onClick={() => setLoginVisible(true)}>
              <LoginOutlined /> Přihlásit
            </S.LoginButton>
          </motion.div>
          <Space size="5" />
          <motion.div whileTap={{ scale: 0.8 }}>
            <S.LoginButton size="large" onClick={() => setRegisterVisible(true)}>
              <LoginOutlined /> Registrovat
            </S.LoginButton>
          </motion.div>
        </S.LoginButtonContainer>
      );
    }

    return <UserMenu avatarUrl={avatarUrl} username={username} />;
  };

  const logInByGoogle = () => {
    setIsVisible(false);
    setTimeout(() => {
      window.location.replace('http://localhost:8000/auth/google');
    }, 1000);
  };

  const logInByFacebook = () => {
    setIsVisible(false);
    setTimeout(() => {
      window.location.replace('http://localhost:8000/auth/facebook');
    }, 1000);
  };

  const renderLoginModal = () => {
    return (
      <Modal
        visible={loginVisible}
        onCancel={() => setLoginVisible(!isVisible)}
        footer={null}
        centered
        closable={isVisible}
      >
        <button onClick={() => setIsVisible(!isVisible)}>dasd</button>
        <AnimatePresence initial={false} exitBeforeEnter>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ type: 'spring', opacity: 1 }}
              exit={{ opacity: 0 }}
              key="buttons"
            >
              <S.LoginModalContainer>
                <h1>Sign in</h1>
                <motion.div whileTap={{ scale: 0.95 }} onClick={logInByGoogle}>
                  <S.GoogleButton size="large">
                    <img src={googleLogo} alt="google" />
                    GOOGLE
                  </S.GoogleButton>
                </motion.div>
                <motion.div whileTap={{ scale: 0.95 }} onClick={logInByFacebook}>
                  <S.FacebookButton size="large">
                    <img src={facebookLogo} alt="facebook" />
                    FACEBOOK
                  </S.FacebookButton>
                </motion.div>
              </S.LoginModalContainer>
            </motion.div>
          )}
          {!isVisible && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, height: 0 }}
              animate={{ type: 'spring', opacity: 1, height: 200 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <S.LoadingContainer>
                <Spinner radius={40} color="#2f80ed" stroke={3} visible />
              </S.LoadingContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    );
  };

  const renderRegisterModal = () => {
    return (
      <Modal
        visible={registerVisible}
        onCancel={() => setRegisterVisible(!registerVisible)}
        footer={null}
        centered
        closable={isVisible}
      >
        <Space size="4" />
        <Title level={2} style={{ textAlign: 'center' }}>
          Registrace
        </Title>
        <Space size="3" />
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={() => null}
          onFinishFailed={() => null}
          layout={'vertical'}
        >
          <Form.Item label="Jméno" name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Příjmení" name="surname" validateStatus="error" help="Chyba chyba" required>
            <Input />
          </Form.Item>
          <Form.Item label="E-mail" name="email" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Telefonní číslo"
            name="phoneNumber"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Heslo" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Heslo znovu"
            name="passwordAgain"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Souhlasím s podmínkami</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Registrovat
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  const onMenuItemClick = (menuKey: MenuInfo) => {
    setSelectedMenuItem(menuKey.key as string);
  };

  return (
    <S.HeaderContainer>
      <S.StyledRow>
        <Col span={5}>
          <S.LogoContainer>
            <S.Logo src="/images/csgoMateLogo.png" />
          </S.LogoContainer>
        </Col>
        <Col span={15}>
          <S.MenuContainer>
            <Menu onClick={onMenuItemClick} selectedKeys={[selectedMenuItem]} mode="horizontal">
              <Menu.Item key="home" onClick={() => router.push('/')}>
                Domů
              </Menu.Item>
              <Menu.Item key="categories" onClick={() => router.push('/categories')}>
                Kategorie
              </Menu.Item>
              <Menu.Item key="trades">Ceník</Menu.Item>
              <Menu.Item key="about">O nás</Menu.Item>
            </Menu>
          </S.MenuContainer>
        </Col>
        <Col span={4}>{renderUserMenu()}</Col>
      </S.StyledRow>
      {renderLoginModal()}
      {renderRegisterModal()}
    </S.HeaderContainer>
  );
};
