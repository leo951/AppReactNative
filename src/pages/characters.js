import * as React from 'react';
import {Text, View, Button} from 'react-native';

function CharactersScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Personnages</Text>
      <Button title="Go Home" onPress={() => navigation.push('Home')} />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default CharactersScreen;
