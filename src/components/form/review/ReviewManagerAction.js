export const ReviewManagerActions = {
    REVIEW_MANAGER_SUBMIT: 'REVIEW_MANAGER_SUBMIT',
    REVIEW_FORM_UPDATE: 'REVIEW_FORM_UPDATE',
    REVIEW_MANAGER_SUBMIT_SUCCESS: 'REVIEW_MANAGER_SUBMIT_SUCCESS',
    REVIEW_MANAGER_SUBMIT_FAILURE: 'REVIEW_MANAGER_SUBMIT_FAILURE',
    CLOSE_POP_UP: 'CLOSE_POP_UP',
};

export default ReviewManagerActions;

export const submitNewReviewAction = (payload) => ({
    type: ReviewManagerActions.REVIEW_MANAGER_SUBMIT,
    data: payload
});

export const submitReviewSuccess = payload => ({
    type: ReviewManagerActions.REVIEW_MANAGER_SUBMIT_SUCCESS,
    ...payload
});

export const submitReviewFailure = payload => ({
    type: ReviewManagerActions.REVIEW_MANAGER_SUBMIT_FAILURE,
    ...payload
});

export const reviewFormUpdate = (payload) => ({
    type: ReviewManagerActions.REVIEW_FORM_UPDATE,
    ...payload
});

export const closePopUp = () => ({
    type: ReviewManagerActions.CLOSE_POP_UP,
});
