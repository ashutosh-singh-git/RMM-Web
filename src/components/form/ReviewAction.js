export const ReviewActions = {
    NEW_MANAGER_SUBMIT: 'NEW_MANAGER_SUBMIT',
    NEW_MANAGER_SUBMIT_SUCCESS: 'NEW_MANAGER_SUBMIT_SUCCESS',
};

export default ReviewActions;

export const submitNewManagerAction = (payload) => ({
    type: ReviewActions.NEW_MANAGER_SUBMIT,
    data: payload
});

export const submitNewManagerSuccess = payload => ({
    type: ReviewActions.NEW_MANAGER_SUBMIT_SUCCESS,
    ...payload
});
