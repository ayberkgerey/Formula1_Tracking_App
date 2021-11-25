import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Title, Caption, Drawer} from 'react-native-paper';

export default function DrawerContent(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: '100%',
                }}>
                <Image
                  source={require('../../../assets/f1.png')}
                  style={{
                    width: '100%',
                    height: 60,
                  }}
                />
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              label="Drivers"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('Drivers');
              }}
            />
            <DrawerItem
              label="Standings"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('Standings');
              }}
            />
            <DrawerItem
              label="Constructors"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('Constructors');
              }}
            />
            <DrawerItem
              label="Results"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('Results');
              }}
            />
            <DrawerItem
              label="Circuits"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('Circuits');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    padding: 20,
    height: 100,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
  title: {
    color: 'white',
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  drawerSection: {
    marginTop: 15,
  },
});
