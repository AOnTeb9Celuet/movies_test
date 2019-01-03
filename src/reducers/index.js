import { 
    MOVIES_INFO_REQUEST, 
    MOVIES_INFO_SUCCESS, 
    MOVIES_INFO_FAIL, 
    MOVIE_DETAILS_FAIL, 
    MOVIE_DETAILS_REQUEST, 
    MOVIE_DETAILS_SUCCESS, 
    MOVIE_DETAILS_CLEAR,
    CHANGE_PAGE_NUMBER,
} from '../constants/constants';

export const initialState = {
    info: [],
    details: {},
    isFetching: false,
    error: '',
    page: 1,
    pagination_number: 0,
}
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIES_INFO_REQUEST:
            return {...state, isFetching: true}
        
        case MOVIES_INFO_SUCCESS:
            return {...state, isFetching: false, info: action.payload}
        
        case MOVIES_INFO_FAIL:
            return {...state, isFetching: false, error: action.payload.message}
        
        case MOVIE_DETAILS_REQUEST:
            return {...state, isFetching: true}

        case MOVIE_DETAILS_SUCCESS:
            return {...state, isFetching: false, details: action.payload}

        case MOVIE_DETAILS_FAIL:
            return {...state, isFetching: false, error: action.payload.message}

        case MOVIE_DETAILS_CLEAR:
            return {...state, details: action.payload}

        case CHANGE_PAGE_NUMBER:
            return {...state, page: action.payload}

        default:
            return state
    }
};
