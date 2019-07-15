import {call, put,} from 'redux-saga/effects';
import SearchActions, {fetchManagerReviewsSuccess, getAllCompaniesActionSuccess} from "./SearchAction";
import {takeFirst} from "../../util/ReduxSagaUtil";
import {fetchAllCompaniesApi, fetchAllReviewsManager} from "../../controller/CompanyController";


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
        console.log('Fetch manager called: ' ,action);
        const payload = yield call(fetchAllReviewsManager, action.managerId);

        yield put(fetchManagerReviewsSuccess({payload}));
    }
    catch (e) {
        console.error(e);
    }
}

export default [
    takeFirst(SearchActions.FETCH_ALL_COMPANIES, fetchAllCompanies),
    takeFirst(SearchActions.FETCH_MANAGER_REVIEW, fetchManagerReviews),
];
