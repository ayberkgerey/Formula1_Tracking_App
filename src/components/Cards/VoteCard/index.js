import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function VoteCard() {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Linking.openURL('https://www.formula1.com/en/vote.html')}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/kimi.jpg')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardText}>Vote For Driver Of The Day</Text>
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
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    borderTopRightRadius: 15,
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
