import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function LiveCard(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        Linking.openURL('https://tv.vodafone.com.tr/canli-tv-izle/ssport-2/120')
      }>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/liveCardPic.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardText}>Watch Live</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width: '93%',
    backgroundColor: 'black',
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  imageContainer: {
    padding: 1,
    width: '100%',
    height: 200,
    borderTopRightRadius: 15,
  },
  image: {
    borderTopRightRadius: 15,

    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  textContainer: {
    height: 30,
    justifyContent: 'center',
  },
  cardText: {
    paddingLeft: 8,
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
});
