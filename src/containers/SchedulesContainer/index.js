import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import PrimeTopBar from '../../components/Bars/PrimeTopBar';
import SchedulesList from '../../components/Lists/SchedulesList';

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
      <SchedulesList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22,21,30)',
  },
});
