import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import PrimeTopBar from '../../components/Bars/PrimeTopBar';
import HomeCard from '../../components/Cards/HomeCard';

export default function MainContainer() {
  return (
    <View style={styles.container}>
      <PrimeTopBar header="Home" />
      <ScrollView>
        <View style={styles.cardContainer}>
          <HomeCard
            title={'Formula News'}
            link={'https://www.formula1.com/en/latest/all.html'}
            imagePath={require('../../assets/newsCardPic.jpg')}
          />
          <HomeCard
            title={'Watch Live'}
            link={'https://tv.vodafone.com.tr/canli-tv-izle/ssport-2/120'}
            imagePath={require('../../assets/liveCardPic.png')}
          />
          <HomeCard
            title={'Vote For Driver Of The Day'}
            link={'https://www.formula1.com/en/vote.html'}
            imagePath={require('../../assets/kimi.jpg')}
          />
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
    width: '93%',
    marginBottom: 20,
    alignSelf: 'center',
  },
});
