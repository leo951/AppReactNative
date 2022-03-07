import * as React from 'react';
import {Text, View, Button} from 'react-native';

function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Connexion</Text>
      <Button
        title="Allez sur la page d'acceuil"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Allez vers les personnages"
        onPress={() => navigation.navigate('Personnages')}
      />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default LoginScreen;
