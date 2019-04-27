import { all } from 'redux-saga/effects';
import SearchSaga from "../components/search-bar/SearchSaga";


const sagas = function* sagas() {
    yield all([
        ...SearchSaga
    ]);
};

export default sagas;
