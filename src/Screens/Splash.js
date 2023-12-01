import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import COLORS from '../Components/Colors';
import CONSTANTS from '../Components/Constants';
const Splash = () => {
  return (
    <View style={styles.Container}>
      <StatusBar
        barStyle={'default'}
        backgroundColor={'transparent'}
        translucent
      />
      <Text style={styles.ztext}>{CONSTANTS.Zomato}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.SPLASH_COLOR,
  },
  ztext: {
    color: COLORS.WHITE,
    fontFamily: 'BonaNova-Bold',
    fontSize: 35,
  },
});
export default Splash;
