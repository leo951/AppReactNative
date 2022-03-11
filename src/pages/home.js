import React from 'react';
import {Text, View, Button} from 'react-native';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="To Settings" onPress={() => navigation.push('Settings')} />
      <Button title="To Login" onPress={() => navigation.push('Login')} />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
};

const TextStyled = styled.Text``;

Home.propTypes = {};

export default Home;
