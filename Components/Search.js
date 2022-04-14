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
// import image SearchIcon
import IconSearch from '../assets/images/looking.png';

// import dispatch
import {useDispatch} from 'react-redux';
//import action
import {searchFilterChange} from './Redux/actions';

const Search = () => {
  // useDispatch
  const dispatch = useDispatch();
  // State search
  const [valueSearchText, setValueSearchText] = useState('');
  // function change text search
  function handleOnchangeSearchText(e) {
    setValueSearchText(e);
    dispatch(searchFilterChange(valueSearchText))
  };
  return (
    <SafeAreaView>
      <Text style={styles.title}>Search</Text>
      <View style={styles.wrap_search}>
        <TextInput
          style={styles.txp_search}
          placeholder="Input search text"
          value={valueSearchText}
          onChangeText={e => handleOnchangeSearchText(e)}
        />
        <TouchableOpacity>
          <Image style={styles.icon_search} source={IconSearch} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginVertical: 10,
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
});
