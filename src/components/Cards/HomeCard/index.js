import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function HomeCard(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Linking.openURL(props.link)}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.imagePath} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 15,
  },
  imageContainer: {
    borderTopRightRadius: 15,
    padding: 1,
    width: '100%',
    height: 200,
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
