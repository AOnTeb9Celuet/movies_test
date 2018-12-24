import { MOVIES_INFO_REQUEST, MOVIES_INFO_SUCCESS, MOVIES_INFO_FAIL } from '../constants/constants';

export const initialState = {
    info: [],
    isFetching: false,
    error: '',
}
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIES_INFO_REQUEST:
            return {...state, isFetching: true}
        
        case MOVIES_INFO_SUCCESS:
            return {...state, isFetching: false, info: action.payload}
        
        case MOVIES_INFO_FAIL:
            return {...state, isFetching: false, error: action.payload.message}

        default:
            return state
    }
};
