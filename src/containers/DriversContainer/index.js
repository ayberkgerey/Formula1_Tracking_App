import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PrimeTopBar from '../../components/Bars/PrimeTopBar';
import DriverRow from '../../components/Rows/DriverRow';
import DriversList from '../../components/Lists/DriversList';

export default function DriversContainer() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    fetch('https://ergast.com/api/f1/2021/drivers.json')
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson.MRData.DriverTable.Drivers);
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
      <PrimeTopBar header="Drivers" />
      <DriversList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22,21,30)',
  },
});
