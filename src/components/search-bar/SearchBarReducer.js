import SearchActions from "./SearchAction";

const initialState = {
    companies: []
};

const SearchBarReducer = (state = initialState, action = {}) => {
    let changes = {};

    switch (action.type) {
        case SearchActions.FETCH_ALL_COMPANIES_SUCCESS:
            changes = {
                companies: action.payload
            };
            break;

        case SearchActions.FETCH_SEARCH_SUCCESS:
            changes = {
                companies: action.payload,
            };
            break;

        default:
            return state;
    }

    return { ...state, ...changes };
};

export default SearchBarReducer;
