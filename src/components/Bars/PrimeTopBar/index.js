import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/core';

export default function PrimeTopBar(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.topContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Octicons
          name="three-bars"
          style={{marginTop: 4}}
          color={'red'}
          size={30}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.topBarTitle}>{props.header}</Text>
      </View>
      <View style={{width: 30}} />
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 40,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  topBarTitle: {
    fontWeight: '900',
    fontSize: 20,
    marginTop: 8,
    color: 'red',
  },
});
