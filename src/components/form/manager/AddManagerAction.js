export const AddManagerActions = {
    NEW_MANAGER_SUBMIT: 'NEW_MANAGER_SUBMIT',
    NEW_MANAGER_SUBMIT_SUCCESS: 'NEW_MANAGER_SUBMIT_SUCCESS',
    NEW_MANAGER_SUBMIT_FALSE: 'NEW_MANAGER_SUBMIT_FALSE',
};

export default AddManagerActions;

export const submitNewManagerAction = (payload) => ({
    type: AddManagerActions.NEW_MANAGER_SUBMIT,
    data: payload
});

export const submitNewManagerSuccess = payload => ({
    type: AddManagerActions.NEW_MANAGER_SUBMIT_SUCCESS,
    ...payload
});

export const addManagerFail = () => ({
    type: AddManagerActions.NEW_MANAGER_SUBMIT_FALSE,
});
