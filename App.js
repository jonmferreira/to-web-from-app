
import { StyleSheet} from 'react-native';
import React from 'react';
import {
    StatusBar
} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {AuthProvider} from "./src/contexts/auth";
import Routes from "./src/routes";
import {colors} from "./src/assets/styles/colors";


const Applayout = () => {

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
        <StatusBar   backgroundColor={colors.transparent} translucent={true}  barStyle="light-content" />
      </AuthProvider>
    </NavigationContainer>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
