import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, Platform} from 'react-native';
import PropTypes from 'prop-types';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUser} from '../hooks/ApiHooks';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import {Text} from 'react-native-elements';

const Login = ({navigation}) => {
  const {setIsLoggedIn, setUser} = useContext(MainContext);
  const {checkToken} = useUser();

  const getToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('logIn asyncstorage token:', userToken);
    if (userToken) {
      const userInfo = await checkToken(userToken);
      try {
        if (userInfo.user_id) {
          setUser(userInfo);
          setIsLoggedIn(true);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text h3 style={{fontWeight: 'bold', textAlign: 'center'}}>Login</Text>

      <LoginForm navigation={navigation} />
      <Text h3 style={{fontWeight: 'bold', textAlign: 'center'}}>Register</Text>
      <RegisterForm navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
