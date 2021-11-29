import React from 'react';
import {ScrollView} from 'react-native';
import CircuitRow from '../../Rows/CircuitRow';

export default function CircuitsList(props) {
  return (
    <ScrollView style={{marginTop: 10, marginBottom: 35}}>
      {props.data.map(data => {
        return <CircuitRow data={data} />;
      })}
    </ScrollView>
  );
}
