import React from 'react';
import {ScrollView} from 'react-native';
import ChampionRow from '../../Rows/ChampionRow';

export default function ChampionsList(props) {
  return (
    <ScrollView style={{marginTop: 30, marginBottom: 30}}>
      {props.data.map(data => {
        return <ChampionRow data={data} />;
      })}
    </ScrollView>
  );
}
