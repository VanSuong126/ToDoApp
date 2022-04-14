import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
// import Components
import ToDoList from './ToDoList';
import Filter from './Filter';
import Search from './Search';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>TODO APP With Redux</Text>
      </View>
      <View style={styles.body}>
      <Search/>
      <Filter/>
      <ToDoList/>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:20,
  },
  header: {
    flex: 0.1,
  },
  header_title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  body: {
    flex: 0.8,
  },
});
