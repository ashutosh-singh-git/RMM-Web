import {combineReducers} from 'redux';
import SearchBarReducer from "../components/search-bar/SearchBarReducer";
import AddManagerReducer from "../components/form/manager/AddManagerReducer";
import ReviewManagerReducer from "../components/form/review/ReviewManagerReducer";


const reducers =  combineReducers({
    search: SearchBarReducer,
    add: AddManagerReducer,
    review: ReviewManagerReducer,
});

export default reducers;
