import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PrimeTopBar from '../../components/PrimeTopBar';

export default function DriversContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    fetch('https://ergast.com/api/f1/2021/drivers.json')
      .then(response => response.json())
      .then(responseJson => {
        setLoading(false);
        setData(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
    console.log('Data : ' + JSON.stringify(data));
    console.log('Loading : ' + loading);
  }, []);

  return (
    <View style={styles.container}>
      <PrimeTopBar header="Drivers" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22,21,30)',
  },
});
