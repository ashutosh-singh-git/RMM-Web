import {call, put,} from 'redux-saga/effects';
import SearchActions, {
    fetchManagerReviewsSuccess,
    getAllCompaniesActionSuccess,
    getSearchResultSuccess
} from "./SearchAction";
import {takeFirst} from "../../util/ReduxSagaUtil";
import {fetchAllCompaniesApi, fetchAllReviewsManager, managerSearch} from "../../controller/CompanyController";


function* fetchAllCompanies() {

    try {
        const payload = yield call(fetchAllCompaniesApi);

        yield put(getAllCompaniesActionSuccess({payload}));
    }
    catch (e) {
        console.error(e);
    }
}

function* fetchManagerReviews(action) {

    try {
        const payload = yield call(fetchAllReviewsManager, action.managerId);

        yield put(fetchManagerReviewsSuccess({payload}));
    }
    catch (e) {
        console.error(e);
    }
}

function* searchManagerSaga(action) {

    try {
        const payload = yield call(managerSearch, action.ci, action.mn);

        yield put(getSearchResultSuccess({payload}));
    }
    catch (e) {
        console.error(e);
    }
}

export default [
    takeFirst(SearchActions.FETCH_ALL_COMPANIES, fetchAllCompanies),
    takeFirst(SearchActions.FETCH_MANAGER_REVIEW, fetchManagerReviews),
    takeFirst(SearchActions.FETCH_SEARCH, searchManagerSaga),
];
