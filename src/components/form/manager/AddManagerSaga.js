import {call, put,} from 'redux-saga/effects';
import {takeFirst} from "../../../util/ReduxSagaUtil";
import AddManagerActions, {submitNewManagerFailure, submitNewManagerSuccess} from "./AddManagerAction";
import {submitNewManager} from "../../../controller/ReviewController";
import {getAllCompaniesAction} from "../../search-bar/SearchAction";

function* newManagerAddition(action) {

    try {
        console.log(action);
        const payload = yield call(submitNewManager, action.data, action.headers);

        yield put(submitNewManagerSuccess({payload}));
        yield put(getAllCompaniesAction());
    }
    catch (e) {
        console.error(e);
        if(e.status === 400){
            const {message} = e.data;
            yield put(submitNewManagerFailure({message}));
        }
    }
}

export default [
    takeFirst(AddManagerActions.NEW_MANAGER_SUBMIT, newManagerAddition),
];
