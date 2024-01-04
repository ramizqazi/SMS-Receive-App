import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigation from './homeTab/TabNavigation';
import * as Colors from '../config/colors';

const Stack = createNativeStackNavigator();

/* =============================================================================
<AppNavigation />
============================================================================= */
const AppNavigation = () => {
  return (
    <NavigationContainer theme={THEME}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="HomeTab" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const THEME = {
  dark: false,
  colors: {
    primary: Colors.primary,
    background: Colors.white,
    text: Colors.black,
    border: Colors.outline,
    notification: Colors.accent,
  },
};

export default AppNavigation;
