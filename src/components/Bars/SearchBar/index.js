import React from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.title}
          type={'number'}
          placeholder={'Enter a year'}
          placeholderTextColor={'gray'}
          keyboardType={'numeric'}
        />
      </View>
      <TouchableOpacity>
        <Octicons name="search" color={'white'} size={25} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 20,
  },
  inputContainer: {
    paddingLeft: 20,
    justifyContent: 'center',
    height: 40,
    width: '80%',
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
});
