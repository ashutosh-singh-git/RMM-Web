import ReviewManagerActions from "./ReviewManagerAction";

const initialState = {
    rMap: {},
    submittedReviewId: '',
    submitMsg: '',
    submitSuccess: false,
    openPopUp: false
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

        case ReviewManagerActions.REVIEW_MANAGER_SUBMIT_SUCCESS:
            changes = {
                submitSuccess: true,
                submittedReviewId: action.payload.id,
                submitMsg: 'Your review is submitted successfully',
                openPopUp: true
            };
            break;

        case ReviewManagerActions.REVIEW_MANAGER_SUBMIT_FAILURE:
            changes = {
                submitSuccess: false,
                submittedReviewId: '',
                submitMsg: action.message,
                openPopUp: true
            };
            break;

        case ReviewManagerActions.CLOSE_POP_UP:
            changes = {
                openPopUp: false
            };
            break;
        default:
            return state;
    }

    return { ...state, ...changes };
};

export default ReviewManagerReducer;
