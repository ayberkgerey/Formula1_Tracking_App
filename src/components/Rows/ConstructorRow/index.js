import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function ConstructorRow({data}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.title}>{data.name}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.title}>{data.nationality}</Text>
      </View>
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
  nameContainer: {
    marginLeft: '8%',
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: 'red',
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
});
