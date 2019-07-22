import {call, put,} from 'redux-saga/effects';
import {takeFirst} from "../../../util/ReduxSagaUtil";
import {submitNewReview} from "../../../controller/ReviewController";
import ReviewManagerActions, {submitReviewSuccess} from "./ReviewManagerAction";

function* newReviewAddition(action) {

    try {
        console.log(action.data);
        // const d = action.data;
        // const request = {
        //     managerId : d.managerId,
        // };
        const payload = yield call(submitNewReview, action.data);

        yield put(submitReviewSuccess({payload}));
    }
    catch (e) {
        console.error(e);
    }
}

export default [
    takeFirst(ReviewManagerActions.REVIEW_MANAGER_SUBMIT, newReviewAddition),
];
