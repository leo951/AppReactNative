import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Characters from '../../pages/characters';
import HomeStack from './homeStack';

const BottomTab = createBottomTabNavigator();

const Routes = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="HomeStack" component={HomeStack} />
      <BottomTab.Screen name="Characters" component={Characters} />
    </BottomTab.Navigator>
  );
};

export default Routes;
