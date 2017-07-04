import React from 'react';
import styled from 'styled-components';
import Logout from '../../components/icons/Logout';

const Wrapper = styled.div `
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px;
  padding: 20px;
  @media (min-width: 1000px) {
    padding: 20px calc((100vw - 960px)/2)
  }
  box-sizing: border-box;
  background: #c33c3c;
  align-items: center;
`;

const Title = styled.h3 `
  font-family: ErasITC ;
  font-weight: 900;
  font-size: 30px;
  line-height: 100%;
  margin: 0;
  color: #FFF;
`;

const IconWrapper = styled.div `
  display: flex;
  width: 30px;
  height: 30px;
  padding: 2px 0;
  box-sizing: border-box;
`;



function onLogoutClick() {
  localStorage.removeItem('Authorization');
  location.reload();
}

function Header({ logoutIcon }) {
  if ( !localStorage.getItem('Authorization')) {
    logoutIcon = {
      display: 'none'
    }
  }
  return (
    <Wrapper>
      <Title>GoCrush</Title>
      <IconWrapper style={logoutIcon}>
        <Logout onClick={()=>{onLogoutClick()}}/>
      </IconWrapper>
    </Wrapper>
  );
};

export default Header;
