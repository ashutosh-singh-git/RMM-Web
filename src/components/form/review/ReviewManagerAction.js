export const ReviewManagerActions = {
    REVIEW_MANAGER_SUBMIT: 'REVIEW_MANAGER_SUBMIT',
    REVIEW_FORM_UPDATE: 'REVIEW_FORM_UPDATE',
    REVIEW_MANAGER_SUBMIT_SUCCESS: 'REVIEW_MANAGER_SUBMIT_SUCCESS',
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

export const reviewFormUpdate = (payload) => ({
    type: ReviewManagerActions.REVIEW_FORM_UPDATE,
    ...payload
});
