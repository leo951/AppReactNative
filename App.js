import React from 'react';
import {View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Counter from './src/components/counter/index';
import Header from './src/components/header/index';
import TodoList from './src/components/todoList/index';
import Trombinoscope from './src/components/trombinoscope';

import Routes from './src/config/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
