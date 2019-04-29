import {combineReducers} from 'redux';
import SearchBarReducer from "../components/search-bar/SearchBarReducer";
import ReviewReducer from "../components/form/ReviewReducer";


const reducers =  combineReducers({
    search: SearchBarReducer,
    review: ReviewReducer
});

export default reducers;
