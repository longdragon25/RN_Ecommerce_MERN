import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import TodoList from './Components/TodoList';

export default function App() {
  return (
    <View style={styles.container}>
      <TodoList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
