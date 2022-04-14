import RootReducer from './reducer';
import {createStore} from 'redux';

const store = createStore(RootReducer);

export default store;

