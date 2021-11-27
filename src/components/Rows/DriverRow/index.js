import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function DriverRow({data}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={styles.title}>{data.permanentNumber}</Text>
      </View>
      <Text style={styles.title}>
        {data.givenName} {data.familyName}
      </Text>
      <View />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },
  numberContainer: {
    height: '100%',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 2,
    borderColor: 'red',
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
});
