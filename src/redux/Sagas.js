import { all } from 'redux-saga/effects';
import SearchSaga from "../components/search-bar/SearchSaga";
import ReviewSaga from "../components/form/manager/AddManagerSaga";


const sagas = function* sagas() {
    yield all([
        ...SearchSaga,
        ...ReviewSaga
    ]);
};

export default sagas;
