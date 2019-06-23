import {combineReducers} from 'redux';
import SearchBarReducer from "../components/search-bar/SearchBarReducer";
import AddManagerReducer from "../components/form/manager/AddManagerReducer";


const reducers =  combineReducers({
    search: SearchBarReducer,
    review: AddManagerReducer
});

export default reducers;
