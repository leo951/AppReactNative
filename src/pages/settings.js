import React from 'react';
import {Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Settings = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Personnages</Text>
      <Button
        title="Allez sur la page d'accueil"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Se connecter"
        onPress={() => navigation.navigate('Connexion')}
      />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
};

const TextStyled = styled.Text``;

Settings.propTypes = {};

export default Settings;
