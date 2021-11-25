import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PrimeTopBar from '../../components/PrimeTopBar';

export default function ConstructorsContainer() {
  return (
    <View style={styles.container}>
      <PrimeTopBar header="Constructors" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22,21,30)',
  },
});
