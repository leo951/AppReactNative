import React, {useState} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {Text, View, TextInput, Button} from 'react-native';

import InputForm from '../inputForm/index';
import ButtonForm from '../buttonForm/index';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const navigation = useNavigation();

  const validate = () => {
    console.log(password);

    email.length > 3 ? setErrorEmail(false) : setErrorEmail(true);
    password.length > 7 ? setErrorPassword(false) : setErrorPassword(true);

    navigation.navigate('Characters');
  };

  return (
    <ViewContainer>
      <View>
        <InputForm
          placeholder={'Email'}
          typePassword={false}
          setText={setEmail}
          text={email}
        />
        {errorEmail == true && (
          <EmailErrorTrue>Format d'email incorrect</EmailErrorTrue>
        )}
        <InputForm
          placeholder={'Mot de passe'}
          typePassword={true}
          setText={setPassword}
          text={password}
        />
        {errorPassword == true && (
          <PasswordErrorTrue>
            Format de mot de passe incorrect
          </PasswordErrorTrue>
        )}
      </View>
      <View>
        <ButtonForm email={email} password={password} validate={validate} />
      </View>
    </ViewContainer>
  );
};

const ViewContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmailErrorTrue = styled.Text`
  color: red;
`;
const PasswordErrorTrue = styled.Text`
  color: red;
`;

export default LoginForm;
