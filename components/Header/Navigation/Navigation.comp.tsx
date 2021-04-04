import { Layout, Menu, Popover } from 'antd';
import Router from 'next/router';
import React from 'react';

const { Header } = Layout;

export const Navigation: React.FC = () => {
  const getPlaystationMenuContent = () => {
    return (
      <div className="genre-list">
        <h2>Playstation 4</h2>
        <ul>
          <li>Akční</li>
          <li>Dobrodružné</li>
          <li>RPG</li>
          <li>Simulace</li>
          <li>Adventury</li>
          <li>Sportovní</li>
          <li>Strategické</li>
          <li>Dětské/Rodinné</li>
          <li>Závodní</li>
        </ul>
      </div>
    );
  };

  const getXboxMenuContent = () => {
    return (
      <div className="genre-list">
        <h2>Xbox ONE</h2>
        <ul>
          <li>Akční</li>
          <li>Dobrodružné</li>
          <li>RPG</li>
          <li>Simulace</li>
          <li>Adventury</li>
          <li>Sportovní</li>
          <li>Strategické</li>
          <li>Dětské/Rodinné</li>
          <li>Závodní</li>
        </ul>
      </div>
    );
  };

  return (
    <Header style={{ backgroundColor: '#2a2a31', height: 40 }} className="mainNav">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '40px', backgroundColor: '#2a2a31', textAlign: 'center' }}
      >
        <Menu.Item key="1" onClick={() => Router.push('/')}>
          Domů
        </Menu.Item>

        <Menu.Item key="3" onClick={() => Router.push('/Game/GameList/GameListContainer', '/games')}>
          <Popover
            overlayClassName="menuPopover playStation"
            placement="bottomLeft"
            content={getPlaystationMenuContent()}
            style={{ transform: 'translateY(-13px)', marginLeft: -19 }}
          >
            <div style={{ lineHeight: '40px' }}>Playstation 4</div>
          </Popover>
        </Menu.Item>

        <Menu.Item key="4">
          {' '}
          <Popover
            placement="bottomLeft"
            overlayClassName="menuPopover xbox"
            content={getXboxMenuContent()}
            style={{ transform: 'translateY(-13px)', marginLeft: -19 }}
          >
            <div style={{ lineHeight: '40px' }}>Xbox ONE</div>
          </Popover>
        </Menu.Item>
        <Menu.Item
          key="5"
          onClick={() => Router.push('/Kosik/KosikContainer', '/kosik').then(() => window.scrollTo(0, 0))}
        >
          Jak to funguje?
        </Menu.Item>
      </Menu>
    </Header>
  );
};
