import SearchActions from "./SearchAction";

const initialState = {
    companies: [],
    results: [
        {
            id: '23',
            name: 'Ashutosh Singh',
            designation: 'Project Engineer',
            company: 'Wynk Ltd.',
            location: 'Delhi',
            totalReviews: 34,
            averageRating: 4,
            promotedReview: {
                reviewer: 'Nayak Singh',
                comments: 'Best teacher ever seen. But still, Home component is also rendered in the screen this happens ' +
                    'because of our home path is ’/’ and users path is ‘/users’ slash is same in both paths so that it' +
                    ' renders both components to stop this behavior we need to use the exact prop'
            }
        },
        {
            id: '22',
            name: 'Behuda Sharma',
            designation: 'CTO',
            company: 'Airtel Ltd.',
            location: 'Hyderabad',
            totalReviews: 3,
            averageRating: 2,
            promotedReview: {
                reviewer: 'Nayak Singh',
                comments: 'Best teacher ever seen. But still, Home component is also rendered in the screen this happens ' +
                    'because of our home path is ’/’ and users path is ‘/users’ slash is same in both paths so that it' +
                    ' renders both components to stop this behavior we need to use the exact prop'
            }
        },
        {
            id: '21',
            name: 'Nalank Singh',
            designation: 'CEO',
            company: 'Aas Pass Ltd.',
            location: 'Gurugram',
            totalReviews: 1,
            averageRating: 5,
            promotedReview: {
                reviewer: 'Nayak Singh',
                comments: 'Best teacher ever seen. But still, Home component is also rendered in the screen this happens ' +
                    'because of our home path is ’/’ and users path is ‘/users’ slash is same in both paths so that it' +
                    ' renders both components to stop this behavior we need to use the exact prop'
            }
        },
        {
            id: '20',
            name: 'Pagal Yadav',
            designation: 'Manager',
            company: 'Champu Champ Technologies.',
            location: 'Gaon',
            totalReviews: 12,
            averageRating: 2,
            promotedReview: {
                reviewer: 'Nayak Singh',
                comments: 'Best teacher ever seen. But still, Home component is also rendered in the screen this happens ' +
                    'because of our home path is ’/’ and users path is ‘/users’ slash is same in both paths so that it' +
                    ' renders both components to stop this behavior we need to use the exact prop'
            }
        },
    ],
    reviewSearch: {}
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

        case SearchActions.FETCH_MANAGER_REVIEW_SUCCESS:
            changes = {
                reviewSearch: action.payload,
            };
            break;

        default:
            return state;
    }

    return {...state, ...changes};
};

export default SearchBarReducer;
