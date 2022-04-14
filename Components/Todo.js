import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
// import image tick
import Tick from '../plugin/assets/tick.png';
// Add useDispatch
import {useDispatch} from 'react-redux';
// Add Action
import {changeCompleted} from './Redux/actions';

export default function ToDo({data}) {
  const dispatch = useDispatch();
  // RenderItem for FlatList
  const _renderItem = ({item}) => {
    function handleChangeCompletedClick(id) {
      dispatch(changeCompleted(id));
    }
    return (
      <View style={styles.container} key={item.id}>
        <TouchableOpacity onPress={() => handleChangeCompletedClick(item.id)}>
          <View style={styles.wrap_item}>
            <View style={styles.checkbox}>
              {item.completed && item.completed === true ? (
                <Image styles={styles.img_check} source={Tick} />
              ) : null}
            </View>
            <Text
              style={
                item.completed && item.completed === true
                  ? styles.item_name_true
                  : styles.item_name_false
              }>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={
            item.priority === 'High'
              ? styles.txt_priority_high
              : item.priority === 'Medium'
              ? styles.txt_priority_medium
              : styles.txt_priority_low
          }>
          {item.priority}
        </Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={data} renderItem={_renderItem} keyExtractor={data.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrap_item: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  checkbox: {
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 22,
    width: 22,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: '#FFF',
  },
  item_name_false: {
    fontSize: 14,
    fontWeight: '800',
  },
  item_name_true: {
    fontSize: 14,
    fontWeight: '800',
    textDecorationLine: 'line-through',
  },
  txt_priority_high: {
    fontSize: 14,
    height: 25,
    color: 'red',
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: 'pink',
  },
  txt_priority_medium: {
    fontSize: 14,
    height: 25,
    color: '#000080',
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: '#00FFFF',
  },
  txt_priority_low: {
    fontSize: 14,
    height: 25,
    color: '#FFF',
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: 'grey',
  },
});
