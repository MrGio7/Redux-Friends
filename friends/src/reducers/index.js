import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
  } from '../actions';

const initialState = {
    error: '',
    errorStatusCode: null,
    fetchingData: false,
    friends: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START: 
            return {
                ...state,
                error:'',
                fetchingData:true
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error:'',
                fetchingData:false,
                friends: action.payload
            }

        default:
         return state;
    }
};

export default reducer;