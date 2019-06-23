import {call, put,} from 'redux-saga/effects';
import {takeFirst} from "../../../util/ReduxSagaUtil";
import AddManagerActions, {submitNewManagerSuccess} from "./AddManagerAction";
import {submitNewManager} from "../../../controller/ReviewController";

function* newManagerAddition(action) {

    try {
        console.log(action);
        const payload = yield call(submitNewManager, action.data);

        yield put(submitNewManagerSuccess({payload}));
    }
    catch (e) {
        console.error(e);
    }
}

export default [
    takeFirst(AddManagerActions.NEW_MANAGER_SUBMIT, newManagerAddition),
];
