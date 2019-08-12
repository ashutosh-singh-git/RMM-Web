import AddManagerActions from "./AddManagerAction";

const initialState = {
    manager: {},
    submitted: false,
    submitMsg: '',
    openPopUp: false
};

const AddManagerReducer = (state = initialState, action = {}) => {
    let changes = {};

    switch (action.type) {
        case AddManagerActions.NEW_MANAGER_SUBMIT_SUCCESS:
            changes = {
                manager: action.payload,
                submitted: true,
                openPopUp: true
            };
            break;

        case AddManagerActions.NEW_MANAGER_SUBMIT_FAILURE:
            changes = {
                submitMsg: action.message,
                submitted: false,
                openPopUp: true
            };
            break;

        case AddManagerActions.CLOSE_POP_UP_ADD_MANAGER:
            changes = {
                openPopUp: false
            };
            break;
        default:
            return state;
    }

    return { ...state, ...changes };
};

export default AddManagerReducer;
