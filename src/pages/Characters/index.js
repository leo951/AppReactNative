import * as React from 'react';
import {Text, View, Button} from 'react-native';

function CharactersScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Personnages</Text>
      <Button
        title="Allez sur la page d'accueil"
        onPress={() => navigation.push('Home')}
      />
      <Button
        title="Se connecter"
        onPress={() => navigation.navigate('Connexion')}
      />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default CharactersScreen;
