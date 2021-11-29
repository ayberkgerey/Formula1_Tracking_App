import React from 'react';
import {View, StyleSheet} from 'react-native';
import BackTopBar from '../../components/Bars/BackTopBar';
import WebView from 'react-native-webview';

export default function WebViewContainer() {
  return (
    <View style={styles.container}>
      <BackTopBar />
      <WebView source={{uri: 'https://infinite.red'}} style={{marginTop: 20}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22,21,30)',
  },
});
