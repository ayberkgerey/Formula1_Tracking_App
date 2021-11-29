import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import PrimeTopBar from '../../components/Bars/PrimeTopBar';
import CircuitsList from '../../components/Lists/CircuitsList';

export default function CircuitsContainer() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    fetch('https://ergast.com/api/f1/2021/circuits.json')
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson.MRData.CircuitTable.Circuits);
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
      <PrimeTopBar header="Circuits" />
      <CircuitsList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22,21,30)',
  },
});
