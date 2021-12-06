import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import PrimeTopBar from '../../components/Bars/PrimeTopBar';
import StandingRow from '../../components/Rows/StandingRow';
import TeamStandingRow from '../../components/Rows/TeamStandingRow';

export default function StandingsContainer() {
  const [data, setData] = useState([]);
  const [teamData, setTeamData] = useState([]);

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

  const fetchTeamData = async () => {
    fetch('https://ergast.com/api/f1/current/constructorStandings.json')
      .then(response => response.json())
      .then(responseJson => {
        setTeamData(
          responseJson.MRData.StandingsTable.StandingsLists[0]
            .ConstructorStandings,
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
    fetchTeamData();
  }, []);

  return (
    <View style={styles.container}>
      <PrimeTopBar header="Standings" />
      <FlatList
        style={{marginTop: 12}}
        data={data}
        renderItem={({item}) => <StandingRow data={item} />}
      />
      <View style={styles.line} />
      <FlatList
        style={{paddingBottom: 52, marginBottom: 10}}
        data={teamData}
        renderItem={({item}) => <TeamStandingRow data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22,21,30)',
    justifyContent: 'center',
  },
  line: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: 1,
    borderColor: 'red',
    borderWidth: 2,
  },
});
