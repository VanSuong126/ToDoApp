import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

// import image icon Search
import IconSearch from '../assets/images/looking.png';
// import RadioButton
import RadioButton from '../plugin/RadioButton';
// import library SelectBox
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
// import hooks useSelector
import {useSelector} from 'react-redux';
// Add Selector
import {dataPrioritySelector} from './Redux/selector';
// Add Action
import {filterCheckChange, ProritySelectChange} from './Redux/actions';
//import useDispatch
import {useDispatch} from 'react-redux';

  // Data RadioButon
  const DataRadioButon = [
    {value: 'All', title: 'All'},
    {value: 'Completed', title: 'Completed'},
    {value: 'Todo', title: 'ToDo'},
  ];

const Filter = () => {
  // useState
  const [valueRadioButon, setValueRadioButton] = useState('All');
  const [selectedTeams, setSelectedTeams] = useState([]);

  // useDispatch
  const dispatch = useDispatch();
  // function Change Multi SelectBox
  const temp = (i)=> {
    setSelectedTeams(xorBy(selectedTeams, [i], 'id'));
  }
  function onMultiChange() {
    return item => temp(item);
  }

  // Lấy Data dataPriority từ Reducer
  const dataPriority = useSelector(dataPrioritySelector);
  // Function OnSelect Radio Button
  const OnSelectRadioButton=(value)=> {
    setValueRadioButton(value);
  }
  // useEffect  dispatch action when hooks change
  useEffect(()=>{
    dispatch(filterCheckChange(valueRadioButon));
  },[valueRadioButon])
  useEffect(()=>{
    dispatch(ProritySelectChange(selectedTeams.map(x=>x.item)))
  },[selectedTeams])
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Filter by Status</Text>
        <RadioButton
          data={DataRadioButon}
          onSelect={value => OnSelectRadioButton(value)}
        />
      </View>
      <View>
        <Text style={styles.title}>Filter by Priority</Text>
        <SelectBox
          label="Select multiple"
          options={dataPriority}
          selectedValues={selectedTeams}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          hideInputFilter={true}
          isMulti
          toggleIconColor={'red'}
          multiOptionContainerStyle={{backgroundColor: 'violet'}}
          optionContainerStyle={{backgroundColor: 'yellow'}}
        />
      </View>
    </SafeAreaView>
  );
};
export default Filter;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginVertical: 10,
  },
  ItemSelect: {
    backgroundColor: 'red',
  },
});
