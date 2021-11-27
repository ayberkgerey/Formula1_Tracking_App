import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function CircuitRow({data}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.circuitName}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.Location.country}</Text>
        <Text style={styles.title}>{data.Location.locality}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 17,
  },
});
