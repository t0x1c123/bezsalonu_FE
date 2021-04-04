import { Button, Row } from 'antd';
import styled from 'styled-components';

import { colors } from '../../../theme/colors';

export const HeaderContainer = styled.div`
  height: auto;
  background-color: ${colors.panelColor};
`;

export const LoginButton = styled(Button)`
  border-radius: 5px;
  background: #56ccf2;
  background: -webkit-linear-gradient(to left, #2f80ed, #56ccf2);
  background: linear-gradient(to left, #2f80ed, #56ccf2);
  box-shadow: 0px 5px 15px 0px #40a9ff4f;
  color: white;
  border: none;
  font-weight: 500;
  &:hover,
  &:active,
  &:focus {
    background: #56ccf2;
    background: -webkit-linear-gradient(to left, #2f80ed, #56ccf2);
    background: linear-gradient(to left, #2f80ed, #56ccf2);
    color: white;
  }
  transition: all 200ms;
`;

export const SteamButton = styled(Button)`
  overflow: hidden;
  border-radius: 5px;
  background: #1b2838;
  background: -webkit-linear-gradient(to left, #091932, #1480b1);
  background: linear-gradient(to left, #091932, #1480b1);
  box-shadow: 0px 5px 15px 0px rgba(51, 61, 72, 0.6);
  color: white;
  border: none;
  font-weight: 500;
  width: 100%;
  &:hover,
  &:active,
  &:focus {
    background: #091932;
    background: -webkit-linear-gradient(to left, #091932, #1480b1);
    background: linear-gradient(to left, #091932, #1480b1);
    color: white;
  }
  transition: all 200ms;
  img {
    width: 100px;
    position: absolute;
    top: -27px;
    right: -5px;
  }
`;

export const FacebookButton = styled(Button)`
  overflow: hidden;
  margin-top: 20px;
  border-radius: 5px;
  background: #4267b2;
  background: -webkit-linear-gradient(to left, #4267b2, #1f4ca0);
  background: linear-gradient(to left, #4267b2, #1f4ca0);
  box-shadow: 0px 5px 15px 0px rgba(51, 61, 72, 0.6);
  color: white;
  border: none;
  font-weight: 500;
  width: 100%;
  &:hover,
  &:active,
  &:focus {
    background: #4267b2;
    background: -webkit-linear-gradient(to left, #4267b2, #1f4ca0);
    background: linear-gradient(to left, #4267b2, #1f4ca0);
    color: white;
  }
  transition: all 200ms;
  img {
    width: 68px;
    position: absolute;
    top: -8px;
    right: 13px;
  }
`;

export const GoogleButton = styled(Button)`
  overflow: hidden;
  margin-top: 20px;
  border-radius: 5px;
  background: #1b2838;
  background: -webkit-linear-gradient(to left, #ffffff, #f2f2f2);
  background: linear-gradient(to left, #ffffff, #f2f2f2);
  box-shadow: 0px 5px 15px 0px rgba(51, 61, 72, 0.6);
  color: black;
  border: none;
  font-weight: 500;
  width: 100%;
  &:hover,
  &:active,
  &:focus {
    background: #ffffff;
    background: -webkit-linear-gradient(to left, #ffffff, #f2f2f2);
    background: linear-gradient(to left, #ffffff, #f2f2f2);
    color: black;
  }
  transition: all 200ms;
  img {
    width: 100px;
    position: absolute;
    top: -25px;
    right: 0px;
  }
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 6rem;
`;

export const StyledRow = styled(Row)``;

export const LoginModalContainer = styled.div`
  .ant-modal-content {
    border-radius: 10px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 90px;
  padding-left: 1.1rem;
`;

export const Logo = styled.img`
  height: 60%;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-right: 20px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  background-color: rgba(123, 125, 128, 0.36);
  border-radius: 5px;
  color: white;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;

  .ant-menu {
    background-color: transparent;
    border-bottom: none;
    font-size: 1rem;
    height: 100%;

    .ant-menu-item-selected {
      font-weight: bold;
      color: white !important;
    }

    .ant-menu-item {
      padding-top: 1.5rem;
      height: 100%;
      color: rgb(140, 140, 140);
    }

    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected {
      color: ${colors.mainBlue};
      border-bottom: 3px solid ${colors.mainBlue};
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  background-color: rgba(123, 125, 128, 0.36);
  border-radius: 5px;
  color: white;
`;
