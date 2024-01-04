import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeTab from './HomeTab';
import HomeScreen from '../../home/screens/HomeScreen';
import ProfileScreen from '../../profile/screens/ProfileScreen';
import NumberDetailsScreen from '../../home/screens/NumberDetailsScreen';

const Tab = createBottomTabNavigator();

/* =============================================================================
<TabNavigation />
============================================================================= */
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={renderItem}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="NumberDetails" component={NumberDetailsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const renderItem = props => <HomeTab {...props} />;
/* Export
============================================================================= */
export default TabNavigation;
