import { all } from 'redux-saga/effects';
import SearchSaga from "../components/search-bar/SearchSaga";
import AddManagerSaga from "../components/form/manager/AddManagerSaga";
import ReviewManagerSaga from "../components/form/review/ReviewManagerSaga";


const sagas = function* sagas() {
    yield all([
        ...SearchSaga,
        ...AddManagerSaga,
        ...ReviewManagerSaga
    ]);
};

export default sagas;
