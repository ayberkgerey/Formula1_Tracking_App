import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  MainContainer,
  CircuitsContainer,
  ConstructorsContainer,
  DriversContainer,
  ResultsContainer,
  StandingsContainer,
  SchedulesContainer,
  ChampionsContainer,
} from '../../containers';
import DrawerContent from '../contents/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
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
        <Drawer.Screen name="Champions" component={ChampionsContainer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
