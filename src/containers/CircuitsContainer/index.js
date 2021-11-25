import React from 'react';
import {View, StyleSheet} from 'react-native';
import PrimeTopBar from '../../components/PrimeTopBar';

export default function CircuitsContainer() {
  return (
    <View style={styles.container}>
      <PrimeTopBar header="Circuits" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22,21,30)',
  },
});
