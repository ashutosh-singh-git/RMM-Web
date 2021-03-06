import {call, put,} from 'redux-saga/effects';
import {takeFirst} from "../../../util/ReduxSagaUtil";
import {submitNewReview} from "../../../controller/ReviewController";
import ReviewManagerActions, {submitReviewFailure, submitReviewSuccess} from "./ReviewManagerAction";
import {fetchManagerReviews} from "../../search-bar/SearchAction";

function* newReviewAddition(action) {

    try {
        console.log(action.data);
        const d = action.data;
        const headers = {
          rcToken : d.captcha
        };
        const request = {
            managerId : d.managerId,
            isRecommended: d.isRecommended,
            comments: d.comments,
            name: d.name ? d.name : 'Anonymous',
            feedback: d,
            reviewerRelation: d.reviewerRelation,
            reviewerExperience: d.reviewerExperience,
            fingerprint: d.fingerprint,
        };
        const payload = yield call(submitNewReview, request, headers);

        console.log(payload);
        yield put(fetchManagerReviews(request.managerId));
        yield put(submitReviewSuccess({payload}));
    }
    catch (e) {
        if(e.status === 400){
            const {message} = e.data;
            yield put(submitReviewFailure({message}));
        }
    }
}

export default [
    takeFirst(ReviewManagerActions.REVIEW_MANAGER_SUBMIT, newReviewAddition),
];
