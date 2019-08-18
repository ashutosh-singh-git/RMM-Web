export const AddManagerActions = {
    NEW_MANAGER_SUBMIT: 'NEW_MANAGER_SUBMIT',
    NEW_MANAGER_SUBMIT_SUCCESS: 'NEW_MANAGER_SUBMIT_SUCCESS',
    NEW_MANAGER_SUBMIT_FAILURE: 'NEW_MANAGER_SUBMIT_FAILURE',
    CLOSE_POP_UP_ADD_MANAGER: 'CLOSE_POP_UP_ADD_MANAGER',
};

export default AddManagerActions;

export const submitNewManagerAction = (payload, headers) => ({
    type: AddManagerActions.NEW_MANAGER_SUBMIT,
    data: payload,
    headers: headers
});

export const submitNewManagerSuccess = payload => ({
    type: AddManagerActions.NEW_MANAGER_SUBMIT_SUCCESS,
    ...payload
});

export const submitNewManagerFailure = payload => ({
    type: AddManagerActions.NEW_MANAGER_SUBMIT_FAILURE,
    ...payload
});

export const closeManagerPopUp = () => ({
    type: AddManagerActions.CLOSE_POP_UP_ADD_MANAGER,
});
