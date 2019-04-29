import ReviewActions from "./ReviewAction";

const initialState = {
    manager: {}
};

const ReviewReducer = (state = initialState, action = {}) => {
    let changes = {};

    switch (action.type) {
        case ReviewActions.NEW_MANAGER_SUBMIT_SUCCESS:
            changes = {
                manager: action.payload
            };
            break;

        default:
            return state;
    }

    return { ...state, ...changes };
};

export default ReviewReducer;
