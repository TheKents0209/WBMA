import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {View, Button} from 'react-native';
import FormTextInput from './FormTextInput';
import useLoginForm from '../hooks/LoginHooks';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useLogin} from '../hooks/ApiHooks';

const LoginForm = ({navigation}) => {
  const {inputs, handleInputChange} = useLoginForm();
  const {setIsLoggedIn} = useContext(MainContext);
  const {login} = useLogin();

  const doLogin = async () => {
    const serverResponse = await useLogin(inputs);
    if (serverResponse) {
      Alert.alert(serverResponse.message);

    } else {
      Alert.alert('login failed');
    }
};

const {inputs, handleInputChange} = useLoginForm();

  return (
    <View>
      <FormTextInput
        autoCapitalize="none"
        placeholder="username"
        onChangeText={(txt) => handleInputChange('username', txt)}
      />
      <FormTextInput
        autoCapitalize="none"
        placeholder="password"
        onChangeText={(txt) => handleInputChange('password', txt)}
        secureTextEntry={true}
      />

      <Button title="Login!" onPress={doLogin} />
    </View>
  );
};

LoginForm.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginForm;
