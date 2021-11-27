import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PrimeTopBar from '../../components/Bars/PrimeTopBar';

export default function ChampionsContainer() {
  return (
    <View style={styles.container}>
      <PrimeTopBar header="Champions" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22,21,30)',
  },
});
