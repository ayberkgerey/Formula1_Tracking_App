import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function StandingRow({data}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={styles.title}>{data.position}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.Driver.code}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.points}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },
  numberContainer: {
    height: '100%',
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 2,
    borderColor: 'red',
  },
  textContainer: {
    width: 100,
    alignItems: 'flex-end',
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
});
