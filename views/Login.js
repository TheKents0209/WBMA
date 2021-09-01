import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';
import { useEffect } from 'react';
import {logInApi} from '../hooks/ApiHooks';
import { baseUrl } from '../utils/variables';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = ({navigation}) => {
  // props is needed for navigation
  const [isLoggedIn, setIsLoggedIn] = useContext(MainContext);
  console.log('ili', isLoggedIn);
  const logIn = async () => {
    const tokenFromApi = logInApi();
    await AsyncStorage.setItem('userToken', tokenFromApi);
    setIsLoggedIn(true);
    console.log("logged in: " + setIsLoggedIn);
  };

  const getToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('token', userToken);
    try {
      const fetchOptions = {
        headers: {
          'x-access-token': userToken,
        },
      };
      const response = await fetch(baseUrl + 'users/user', fetchOptions);
      if (response.status == 200) {
        console.log('success result');
        setIsLoggedIn(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getToken();
    if (isLoggedIn) {
      navigation.navigate('Home');
    }
   }, []);

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <LoginForm navigation={navigation} />
      <RegisterForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
