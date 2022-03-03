import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Button, Image, StyleSheet} from 'react-native';
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
      {characters.map(c => (
        <View key={c.name}>
          <Text>{c.name}</Text>
          <Image
            style={styles.img}
            source={{uri: 'https://hp-api.herokuapp.com/images/harry.jpg'}}
          />
        </View>
      ))}
    </View>
  );
};

export default Trombinoscope;
