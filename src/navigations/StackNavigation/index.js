import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from '../DrawerNavigation';
import WebViewContainer from '../../containers/WebViewContainer';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={DrawerNavigation} />
      <Stack.Screen name="WebView" component={WebViewContainer} />
    </Stack.Navigator>
  );
}
