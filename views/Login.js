import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUser} from '../hooks/ApiHooks';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import {Text, Card, Button} from 'react-native-elements';

const Login = ({navigation}) => {
  const {setIsLoggedIn, setUser} = useContext(MainContext);
  const {checkToken} = useUser();
  const [registerFormToggle, setRegisterFormToggle] = useState(false);

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
      <ImageBackground
        source={require('../assets/splash.png')}
        style={styles.image}
      >
        {registerFormToggle ? (
          <Card>
            <Card.Divider />
            <Card.Title h4>Register</Card.Title>
            <RegisterForm navigation={navigation} />

            <Button
              title="Log in instead"
              style={{paddingTop: 50}}
              onPress={() => {
                setRegisterFormToggle(!registerFormToggle);
              }}
            ></Button>
          </Card>
        ) : (
          <Card>
            <Card.Title h4>Login</Card.Title>
            <LoginForm navigation={navigation} />
            <Button
              title="No account yet?"
              style={{paddingTop: 50}}
              onPress={() => {
                setRegisterFormToggle(!registerFormToggle);
              }}
            ></Button>
          </Card>
        )}
      </ImageBackground>
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
