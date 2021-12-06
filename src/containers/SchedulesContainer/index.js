import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import PrimeTopBar from '../../components/Bars/PrimeTopBar';
import ScheduleRow from '../../components/Rows/ScheduleRow';

export default function SchedulesContainer() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    fetch('https://ergast.com/api/f1/current.json')
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson.MRData.RaceTable.Races);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
    console.log(JSON.stringify(data));
  }, []);

  return (
    <View style={styles.container}>
      <PrimeTopBar header="Schedules" />
      <FlatList
        style={{marginTop: 20, marginBottom: 30}}
        data={data}
        renderItem={({item}) => <ScheduleRow data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22,21,30)',
  },
});
