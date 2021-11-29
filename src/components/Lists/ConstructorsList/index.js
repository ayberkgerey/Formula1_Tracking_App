import React from 'react';
import {ScrollView} from 'react-native';
import ConstructorRow from '../../Rows/ConstructorRow';

export default function ConstructorsList(props) {
  return (
    <ScrollView style={{marginTop: 80, marginBottom: 30}}>
      {props.data.map(data => {
        return <ConstructorRow data={data} />;
      })}
    </ScrollView>
  );
}
