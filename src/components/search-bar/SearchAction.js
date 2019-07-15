export const SearchActions = {
    FETCH_ALL_COMPANIES: 'FETCH_ALL_COMPANIES',
    FETCH_ALL_COMPANIES_SUCCESS: 'FETCH_ALL_COMPANIES_SUCCESS',
    FETCH_SEARCH: 'FETCH_SEARCH',
    PAGINATED_FETCH_SEARCH: 'PAGINATED_FETCH_SEARCH',
    FETCH_SEARCH_SUCCESS: 'FETCH_SEARCH_SUCCESS',
    FETCH_SEARCH_ERROR: 'FETCH_SEARCH_ERROR',
    CLEAR_SEARCH: 'CLEAR_SEARCH',
    FETCH_MANAGER_REVIEW: 'FETCH_MANAGER_REVIEW_SEARCH',
    FETCH_MANAGER_REVIEW_SUCCESS: 'FETCH_MANAGER_REVIEW_SEARCH_SUCCESS',

    ADD_RECENT_SEARCHES: 'ADD_RECENT_SEARCHES',
    CLEAR_RECENT_SEARCHES: 'CLEAR_RECENT_SEARCHES',
};

export default SearchActions;

export const getAllCompaniesAction = () => ({
    type: SearchActions.FETCH_ALL_COMPANIES,
});

export const getAllCompaniesActionSuccess = payload => ({
    type: SearchActions.FETCH_ALL_COMPANIES_SUCCESS,
    ...payload
});

export const getSearchResult = payload => ({
    type: SearchActions.FETCH_SEARCH,
    ...payload,
});

export const getPaginatedSearchResultSuccess = payload => ({
    type: SearchActions.PAGINATED_FETCH_SEARCH,
    ...payload,
});

export const getSearchResultSuccess = payload => ({
    type: SearchActions.FETCH_SEARCH_SUCCESS,
    ...payload,
});

export const getSearchResultError = payload => ({
    type: SearchActions.FETCH_SEARCH_ERROR,
    ...payload,
});

export const addResentSearch = payload => ({
    type: SearchActions.ADD_RECENT_SEARCHES,
    ...payload,
});

export const removeResentSearch = () => ({
    type: SearchActions.CLEAR_RECENT_SEARCHES,
});

export const clearSearch = () => ({
    type: SearchActions.CLEAR_SEARCH,
});

export const fetchManagerReviews = (managerId) => ({
    type: SearchActions.FETCH_MANAGER_REVIEW,
    managerId
});

export const fetchManagerReviewsSuccess = payload => ({
    type: SearchActions.FETCH_MANAGER_REVIEW_SUCCESS,
    ...payload,
});
