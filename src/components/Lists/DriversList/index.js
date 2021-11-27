import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import DriverRow from '../../Rows/DriverRow';

export default function DriversList(props) {
  return (
    <ScrollView style={{marginTop: 30, marginBottom: 30}}>
      {props.data.map(data => {
        return <DriverRow data={data} />;
      })}
    </ScrollView>
  );
}
