import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },
});

const Trombinoscope = () => {
  const [characters, setCharacters] = useState([]);
  const baseUrl = 'https://hp-api.herokuapp.com/api/characters';

  useEffect(() => {
    axios
      .get(`${baseUrl}`)
      .then(function (response) {
        setCharacters(response.data);
      })
      .catch(function (error) {
        console.log('Je suis error = ', error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={({item}) => (
          <View>
            <Image
              // eslint-disable-next-line react-native/no-inline-styles
              style={{height: 200, width: 200}}
              source={{uri: `https:${item.image.split(':')[1]}`}}
            />
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Trombinoscope;
