import React from 'react';
import {ScrollView} from 'react-native';
import ScheduleRow from '../../Rows/ScheduleRow';

export default function SchedulesList(props) {
  return (
    <ScrollView style={{marginTop: 10, marginBottom: 35}}>
      {props.data.map(data => {
        return <ScheduleRow data={data} />;
      })}
    </ScrollView>
  );
}
