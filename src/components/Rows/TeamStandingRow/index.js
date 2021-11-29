import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TeamStandingRow({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={styles.title}>{data.position}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.Constructor.name}</Text>
      </View>
      <View style={styles.pointContainer}>
        <Text style={styles.title}>{data.points}</Text>
      </View>
    </View>
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
  pointContainer: {
    height: '100%',
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: 200,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
});
