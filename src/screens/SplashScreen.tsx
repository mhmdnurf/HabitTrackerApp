import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SplashScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text>Splash Screen</Text>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
