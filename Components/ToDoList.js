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
//use Component ToDo
import ToDo from './Todo';
// Sử dụng thư viện multi select box
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
// Add useDispatch useSelector
import {useDispatch, useSelector} from 'react-redux';
// Add Action
import {addTodo} from './Redux/actions';
// Add Selector
import {todoRemainingSelector} from './Redux/selector';
import {dataPrioritySelector} from './Redux/selector';
// import library random id
import {v4 as uuidv4}from 'uuid'

// Component TodoList
const ToDoList = () => {
  // Add useState
  const [ValueCheckbox, setValueCheckbox] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState([]);
  const [valueTextInputAdd, setvalueTextInputAdd] = useState(null);
  // function use for SelectBox
  function onChange() {
    return val => setSelectedTeam(val);
  }
  // useDispatch
  const dispatch = useDispatch();
  // Lấy Data todoList từ Reducer
  const todoList = useSelector(todoRemainingSelector);
    // Lấy Data dataPriority từ Reducer
    const dataPriority = useSelector(dataPrioritySelector);
  // Hàm click nút thêm todoList
  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4,
        name: valueTextInputAdd,
        completed: false,
        priority: selectedTeam.item,
      }),
    );
    setvalueTextInputAdd('');
    setSelectedTeam('medium');
  };
  // Function change TextInput Add
function handleTextInputAddChangeText (value){
  setvalueTextInputAdd(value);
};
  return (
    <SafeAreaView>
      <Text style={styles.title}>Filter by Priority</Text>
      <ToDo data={todoList} />
      <View style={styles.warp_add_todo}>
        <View style={styles.wrap_textinput_add}>
          <TextInput style={styles.txp_add} placeholder="Enter job" onChangeText={text=>handleTextInputAddChangeText(text)} value={valueTextInputAdd}/>
        </View>
        <View style={styles.wrap_selectbox}>
          <SelectBox
            options={dataPriority}
            value={selectedTeam}
            key={selectedTeam.id}
            onChange={onChange()}
            hideInputFilter={true}
            containerStyle={styles.container_selectbox}
            optionsLabelStyle={styles.lableOptionStyle}
            selectedItemStyle={styles.selectedItem}
            labelStyle={{display: 'none'}}
          />
        </View>
        <View style={styles.wrap_btnAdd}>
          <TouchableOpacity onPress={handleAddButtonClick}>
            <View style={styles.btn_add}>
              <Text style={styles.txt_add}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginVertical: 10,
  },
  body: {
    flex: 0.8,
  },
  wrap_search: {
    marginHorizontal: 20,
  },
  txp_search: {
    paddingHorizontal: 20,
    borderWidth: 1,
    height: 45,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  icon_search: {
    position: 'absolute',
    top: 15,
    right: 10,
  },
  ItemSelect: {
    backgroundColor: 'red',
  },
  warp_add_todo: {
    marginTop:100,
    flexDirection: 'row',
  },
  wrap_textinput_add: {
    flex: 0.6,
  },
  wrap_selectbox: {
    flex: 0.3,
  },
  wrap_btnAdd: {
    flex: 0.1,
  },
  container_selectbox: {
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'black',
    height: 35,
  },
  lableOptionStyle: {
    paddingHorizontal: 5,
    fontSize: 14,
    color: 'blue',
  },
  selectedItem: {
    fontSize: 14,
    color: 'blue',
  },
  btn_add: {
    height: 35,
    width: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txp_add: {
    paddingHorizontal: 20,
    borderWidth: 1,
    height: 35,
    backgroundColor: '#FFF',
  },
  txt_add: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
