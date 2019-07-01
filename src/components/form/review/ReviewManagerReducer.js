import ReviewManagerActions from "./ReviewManagerAction";

const initialState = {
    rMap: {}
};

const ReviewManagerReducer = (state = initialState, action = {}) => {
    let changes = {};

    switch (action.type) {
        case ReviewManagerActions.REVIEW_FORM_UPDATE:
            const {rMap} = state;
            rMap[action.key] = action.value;
            changes = {
                rMap
            };
            break;

        default:
            return state;
    }

    return { ...state, ...changes };
};

export default ReviewManagerReducer;
