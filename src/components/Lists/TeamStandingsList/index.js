import React from 'react';
import {ScrollView} from 'react-native';
import TeamStandingRow from '../../Rows/TeamStandingRow';

export default function TeamStandingsList(props) {
  return (
    <ScrollView style={{height: 410, marginTop: 10, marginBottom: 60}}>
      {props.data.map(data => {
        return <TeamStandingRow data={data} />;
      })}
    </ScrollView>
  );
}
