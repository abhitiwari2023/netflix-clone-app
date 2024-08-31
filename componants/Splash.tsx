import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

const Splash = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigation.navigate('main');
      }, 2000);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{uri: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png'}}
        style={[styles.logo, { opacity: fadeAnim }]}
        resizeMode="contain"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default Splash;
