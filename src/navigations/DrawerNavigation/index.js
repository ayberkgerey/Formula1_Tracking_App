import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  MainContainer,
  CircuitsContainer,
  ConstructorsContainer,
  DriversContainer,
  StandingsContainer,
  SchedulesContainer,
} from '../../containers';
import DrawerContent from '../contents/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainContainer} />
      <Drawer.Screen name="Drivers" component={DriversContainer} />
      <Drawer.Screen name="Schedules" component={SchedulesContainer} />
      <Drawer.Screen name="Standings" component={StandingsContainer} />
      <Drawer.Screen name="Constructors" component={ConstructorsContainer} />
      <Drawer.Screen name="Circuits" component={CircuitsContainer} />
    </Drawer.Navigator>
  );
}
