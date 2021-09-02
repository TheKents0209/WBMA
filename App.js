import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import List from './components/List';
import {Settings} from 'react-native-feather';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('./assets/kitten.jpg')}
          resizeMode="cover"
          style={styles.ImageBackground}
          imageStyle={{borderBottomRightRadius: 70}}
        >
          <Text style={styles.kitten_slogan}>Homeless kitten</Text>
          <View style={styles.settings_container}>
            <Settings width={450} color="white" />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.main}>
        <List style={styles.list} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#484a49',
  },
  header: {
    flexBasis: 300,
    borderRadius: 6,
    margin: 5,
    justifyContent: 'center',
  },
  list: {},
  ImageBackground: {
    width: '99%',
    height: '99%',
    borderRadius: 6,
    justifyContent: 'center',
    borderBottomRightRadius: 50,
  },
  kitten_slogan: {
    position: 'relative',
    top: 110,
    borderBottomRightRadius: 50,
    marginRight: 50,
    paddingRight: 20,
    paddingLeft: 20,
    color: 'white',
    fontSize: 28,
    lineHeight: 54,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: '#2769fd',
  },
  settings_container: {
    alignSelf: 'flex-end',
    left: 200,
    bottom: 150,
  },
  main: {
    flex: 1,
  },
});

export default App;
