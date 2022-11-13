import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {LoginViewModel} from './models';

type Props = {
  loginViewModel: LoginViewModel;
};

const LoginView: React.FC<Props> = ({loginViewModel}) => {
  const {email, password, setEmail, setPassword, isLoading, onSubmit} =
    loginViewModel;
  console.log({email, password});

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>E-mail</Text>
        <TextInput
          placeholder="email@fleye..."
          value={email}
          onChangeText={setEmail}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="********"
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" disabled={isLoading} onPress={onSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
