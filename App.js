import React from 'react';
import {NavigationContainer} from "react-navigation";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Applayout = () => {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
        <StatusBar
          translucent={true}
          barStyle="light-content"/>
    </View>
          
  );
};
export default function App() {
  return (
    <Applayout/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00054',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
