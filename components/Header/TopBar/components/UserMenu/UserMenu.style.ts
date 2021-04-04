import styled from 'styled-components';

interface IAvatarProps {
  url: string;
}

export const Avatar = styled.div<IAvatarProps>`
  background-image: url(${(props) => props.url});
  height: 40px;
  width: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(62, 62, 62, 0.05), 0 3px 6px rgba(87, 86, 86, 0.24);
  transition: all 200ms;
`;

export const Nickname = styled.div`
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 500;
`;

export const UserMenuContainer = styled.div`
  padding: 20px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 200ms;
  &:hover {
    background-color: white;    
    ${Avatar} {
      box-shadow: none;
    }
  }
`;
