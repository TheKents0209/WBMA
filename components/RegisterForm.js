import React from 'react';
import PropTypes from 'prop-types';
import {Alert, View} from 'react-native';
import useSignUpForm from '../hooks/RegisterHooks';
import {Button, Input} from 'react-native-elements';
import {useUser} from '../hooks/ApiHooks';

const RegisterForm = ({navigation}) => {
  const {inputs, handleInputChange, handleOnEndEditing, checkUsername} = useSignUpForm();
  const {register} = useUser();

  const doRegister = async () => {
    try {
      const registerInfo = await register(inputs);
      if (registerInfo) {
        Alert.alert(registerInfo.message);
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  return (
    <View>
      <Input
        autoCapitalize="none"
        placeholder="username"
        onChangeText={(txt) => handleInputChange('username', txt)}
        onEndEditing={(evt) => {
          checkUsername(evt.nativeEvent.text);
          handleOnEndEditing('username', evt.nativeEvent.text);
      }
      errorMessage={errors.username}
      />
      <Input
        autoCapitalize="none"
        placeholder="password"
        onChangeText={(txt) => handleInputChange('password', txt)}
        secureTextEntry={true}
        onEndEditing={(evt) => {
          handleOnEndEditing('password', evt.nativeEvent.text);
      }
      errorMessage={errors.password}
      />
      <Input
        autoCapitalize="none"
        placeholder="confirm password"
        onChangeText={(txt) => handleInputChange('confirmPassword', txt)}
        secureTextEntry={true}
        onEndEditing={(evt) => {
          handleOnEndEditing('confirmPassword', evt.nativeEvent.text);
      }
      errorMessage={errors.confirmPassword}
      />
      <Input
        autoCapitalize="none"
        placeholder="email"
        onChangeText={(txt) => handleInputChange('email', txt)}
        onEndEditing={(evt) => {
          handleOnEndEditing('email', evt.nativeEvent.text);
      }
      errorMessage={errors.email}
      />
      <Input
        autoCapitalize="none"
        placeholder="full name"
        onChangeText={(txt) => handleInputChange('full_name', txt)}
        onEndEditing={(evt) => {
          handleOnEndEditing('full_name', evt.nativeEvent.text);
      }
      errorMessage={errors.full_name}
      />
      <Button title="Register!" onPress={doRegister} disabled={errors.username || errors.password || errors.email}/>
    </View>
  );
};

RegisterForm.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RegisterForm;
