import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import PrimeTopBar from '../../components/Bars/PrimeTopBar';
import CircuitRow from '../../components/Rows/CircuitRow';

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
      <FlatList
        style={{marginTop: 10, marginBottom: 40}}
        data={data}
        renderItem={({item}) => <CircuitRow data={item} />}
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
