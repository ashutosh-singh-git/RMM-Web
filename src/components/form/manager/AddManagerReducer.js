import AddManagerActions from "./AddManagerAction";

const initialState = {
    manager: {},
    submitted: false
};

const AddManagerReducer = (state = initialState, action = {}) => {
    let changes = {};

    switch (action.type) {
        case AddManagerActions.NEW_MANAGER_SUBMIT_SUCCESS:
            changes = {
                manager: action.payload,
                submitted: true
            };
            break;

        case AddManagerActions.NEW_MANAGER_SUBMIT_FALSE:
            changes = {
                submitted: false
            };
            break;
        default:
            return state;
    }

    return { ...state, ...changes };
};

export default AddManagerReducer;
