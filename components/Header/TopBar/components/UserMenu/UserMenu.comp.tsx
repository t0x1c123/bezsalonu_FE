import { DownOutlined } from '@ant-design/icons';
import React from 'react';

import * as S from './UserMenu.style';

interface IProps {
  username: string;
  avatarUrl: string;
}

export const UserMenu: React.FC<IProps> = (props: IProps) => {
  const { avatarUrl, username } = props;
  return (
    <S.UserMenuContainer>
      <S.User>
        <S.Avatar url={avatarUrl} />
        <S.Nickname>{username}</S.Nickname>
        <DownOutlined />
      </S.User>
    </S.UserMenuContainer>
  );
};
