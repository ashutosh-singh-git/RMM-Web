import {call, put,} from 'redux-saga/effects';
import SearchActions, {getAllCompaniesActionSuccess} from "./SearchAction";
import {takeFirst} from "../../util/ReduxSagaUtil";
import {fetchAllCompaniesApi} from "../../controller/CompanyController";


function* fetchAllCompanies() {

    try {
        const payload = yield call(fetchAllCompaniesApi);

        yield put(getAllCompaniesActionSuccess({payload}));
    }
    catch (e) {
        console.error(e);
    }
}

export default [
    takeFirst(SearchActions.FETCH_ALL_COMPANIES, fetchAllCompanies),
];
