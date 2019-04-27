import {combineReducers} from 'redux';
import SearchBarReducer from "../components/search-bar/SearchBarReducer";


const reducers =  combineReducers({
    search: SearchBarReducer
});

export default reducers;
