import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../pages/home';
import Settings from '../../pages/settings';
import Login from '../../pages/login';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default HomeStack;
