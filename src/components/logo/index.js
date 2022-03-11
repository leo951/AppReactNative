import React from 'react';
import styled from 'styled-components';
import {View, Image} from 'react-native';

import {LogoImg} from '../style/index';

const Logo = () => {
  return (
    <>
      <LogoImg source={require('../../../assets/logo/marvel-logo-34283.png')} />
    </>
  );
};

// const LogoImg = styled.Image`
//   width: 30px;
//   height: 30px;
// `;

export default Logo;