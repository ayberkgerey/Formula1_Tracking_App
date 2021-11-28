import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function ScheduleRow({data}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={styles.title}>{data.round}</Text>
      </View>
      <View style={styles.inlineContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data.date}</Text>
          <Text style={styles.title}>{data.time}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data.Circuit.Location.country}</Text>
          <Text style={styles.title}>{data.Circuit.Location.locality}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },
  inlineContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 17,
  },
});
