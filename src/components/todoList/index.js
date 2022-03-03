import React, {useState} from 'react';
import uuid from 'react-native-uuid';
import {Text, View, TextInput, Button} from 'react-native';

const TodoList = () => {
  const [todos, setTodos] = useState([{label: 'coco', id: 1}]);
  const [text, setText] = useState('');

  const addToTodoList = () => {
    setTodos([...todos, {label: text, id: uuid.v4()}]);
    setText('');
  };

  const removeFromTodoList = idToRemove => {
    const newArray = todos.filter(todo => todo.id !== idToRemove);
    setTodos(newArray);
  };
  return (
    <View>
      <Text>TODO LIST</Text>
      <TextInput value={text} onChangeText={textValue => setText(textValue)} />
      <Button title="Envoyer" onPress={addToTodoList} />
      {todos.map(todo => (
        <View key={todo.id}>
          <Text>{todo.label}</Text>
          <Button
            title="Supprimer"
            onPress={() => {
              removeFromTodoList(todo.id);
            }}
          />
        </View>
      ))}
    </View>
  );
};

export default TodoList;
