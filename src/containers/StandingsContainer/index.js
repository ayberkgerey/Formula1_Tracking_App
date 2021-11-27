import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PrimeTopBar from '../../components/Bars/PrimeTopBar';
import StandingRow from '../../components/Rows/StandingRow';
import StandingsList from '../../components/Lists/StandingsList';

export default function StandingsContainer() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    fetch('https://ergast.com/api/f1/current/driverStandings.json')
      .then(response => response.json())
      .then(responseJson => {
        setData(
          responseJson.MRData.StandingsTable.StandingsLists[0].DriverStandings,
        );
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
      <PrimeTopBar header="Standings" />
      <StandingsList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22,21,30)',
  },
});
