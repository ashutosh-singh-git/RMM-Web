import AddManagerActions from "./AddManagerAction";

const initialState = {
    manager: {}
};

const AddManagerReducer = (state = initialState, action = {}) => {
    let changes = {};

    switch (action.type) {
        case AddManagerActions.NEW_MANAGER_SUBMIT_SUCCESS:
            changes = {
                manager: action.payload
            };
            break;

        default:
            return state;
    }

    return { ...state, ...changes };
};

export default AddManagerReducer;
