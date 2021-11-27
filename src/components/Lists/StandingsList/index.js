import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import StandingRow from '../../Rows/StandingRow';

export default function StandingsList(props) {
  return (
    <ScrollView style={{marginTop: 10, marginBottom: 35}}>
      {props.data.map(data => {
        return <StandingRow data={data} />;
      })}
    </ScrollView>
  );
}
