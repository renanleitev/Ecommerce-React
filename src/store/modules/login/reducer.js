import * as types from '../types';

const initialState = {
    isLoggedIn: false,
    user: {},
};

export default function loginReducer (state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_SUCCESS: {
            const newState = { ...state };
            newState.isLoggedIn = !newState.isLoggedIn;
            return newState;
        }
        case types.LOGIN_FAILURE:
            return state;
        case types.LOGIN_REQUEST:
            return state;
        case types.EDIT_SUCCESS: {
            const newState = { ...state };
            newState.user = action.payload;
            return newState;
        }
        case types.EDIT_FAILURE:
            return state;
        case types.EDIT_REQUEST:
            return state;
        case types.REGISTER_REQUEST: {
            const newState = { ...state };
            newState.user = action.payload;
            return newState;
        }
        case types.DELETE_REQUEST: {
            const newState = { ...state };
            newState.user = action.payload;
            return newState;
        }
        default:
            return state;
    }
};