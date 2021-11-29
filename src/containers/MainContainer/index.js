import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import PrimeTopBar from '../../components/Bars/PrimeTopBar';
import NewsCard from '../../components/Cards/NewsCard';
import LiveCard from '../../components/Cards/LiveCard';
import VoteCard from '../../components/Cards/VoteCard';

export default function MainContainer() {
  return (
    <View style={styles.container}>
      <PrimeTopBar header="Home" />
      <ScrollView>
        <View style={styles.cardContainer}>
          <NewsCard />
          <LiveCard />
          <VoteCard />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22,21,30)',
  },
  cardContainer: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
});
