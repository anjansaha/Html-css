import {createStore} from 'redux';
import RootReducer from "../reducer/index"
const Store= createStore(RootReducer);
export default Store;