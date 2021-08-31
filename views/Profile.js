import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {MainContext} from '../contexts/MainContext';

const Profile = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useContext(MainContext);
  console.log('profile', isLoggedIn);
  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    props.navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Button title={'Logout'} onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Profile.propTypes = {
  navigaton: PropTypes.object,
};

export default Profile;
