import {call, put,} from 'redux-saga/effects';
import {takeFirst} from "../../util/ReduxSagaUtil";
import ReviewActions, {submitNewManagerSuccess} from "./ReviewAction";
import {submitNewManager} from "../../controller/ReviewController";

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
    takeFirst(ReviewActions.NEW_MANAGER_SUBMIT, newManagerAddition),
];
