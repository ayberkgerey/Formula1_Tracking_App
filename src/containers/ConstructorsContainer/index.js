import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PrimeTopBar from '../../components/Bars/PrimeTopBar';
import ConstructorsList from '../../components/Lists/ConstructorsList';

export default function ConstructorsContainer() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    fetch('https://ergast.com/api/f1/2021/constructors.json')
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson.MRData.ConstructorTable.Constructors);
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
      <PrimeTopBar header="Constructors" />
      <ConstructorsList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22,21,30)',
  },
});
