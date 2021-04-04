import React, { Component } from 'react';
import styled from 'styled-components';
import ak from './ak.png';

interface Props {
  item: any
}

export class WeaponGridItem extends Component<Props> {
  render() {
    const { item } = this.props;

    return (
      <WeaponItem {...this.props} className={`${item.rarity}`}>
        <WeaponImg/>
        <PriceDiv>
          <PriceText>${item.price}</PriceText><DiscountText>-{item.discount}%</DiscountText>
        </PriceDiv>
        <NameText>{item.name}</NameText>
        <WearText>{item.wear}</WearText>
      </WeaponItem>
  );
  }
}

const WeaponImg = styled.div`
  margin-top: 40px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  width: 200px;
  height: 100px;
  background-position: center;
  background-size: 100%;
  background-image: url(${ak});
`;

const WeaponItem = styled.div`
  width: 250px;
  height: 320px;
  margin-top: 10px;
  margin-left: 7px;
  margin-right: 7px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: #EFF3FF;
  .rare {
    background-color: #EFF3FF;
  }
  .epic {
    background-color: #F8F1FF;
  }
  .legendery {
    background-color: red;
  }
  transition: all 0.15s ease-in;
  :hover, :active {
    transform: scale(1.025);
    box-shadow: 0 0 10px #534FFF;
    transition: all 0.15s ease-in;
  }
  :before, :after{
content: '';
position: absolute;
left: -2px;
top: -2px;
background: linear-gradient(45deg, blue, purple, teal, blue, purple);
background-size: 400%;
width: calc(100% + 4px);
height: calc(100% + 4px);
z-index: -1;
animation: steam 20s linear infinite;
border-radius: 5px;
  }  
  
  @keyframes steam {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
   }
   :after {
   background: #EFF3FF;
    filter: blur(5px);
    }
`;

const PriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceText = styled.p`
  margin-left: 20px;
  margin-bottom: 10px;
  font-family: Calibri;
  font-weight: bold;
  font-size: 30px;
  color: #534FFF;
`;

const DiscountText = styled.p`
  margin-right: 20px;
  float: right;
  font-family: Calibri;
  font-weight: bold;
  font-size: 18px;
  color: white;
  background-color: #47B5D8;
`;

const NameText = styled.p`
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 0px;
  font-size: 15px;
  color: #303956;
`;

const WearText = styled.p`
  margin-left: 20px;
  font-size: 15px;
  color: #898989;
`;
