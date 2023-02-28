import * as types from '../types';

export function loginRequest(payload) {
    return {
        type: types.LOGIN_REQUEST,
        payload
    };
}
export function loginSuccess(payload) {
    return {
        type: types.LOGIN_SUCCESS,
        payload
    };
}
export function loginFailure(payload) {
    return {
        type: types.LOGIN_FAILURE,
        payload
    };
}
export function editRequest(payload) {
    return {
        type: types.EDIT_REQUEST,
        payload
    };
}
export function editSuccess(payload) {
    return {
        type: types.EDIT_SUCCESS,
        payload
    };
}
export function editFailure(payload) {
    return {
        type: types.EDIT_FAILURE,
        payload
    };
}
export function registerRequest(payload){
    return {
        type: types.REGISTER_REQUEST,
        payload
    };
}
export function deleteRequest(payload){
    return {
        type: types.DELETE_REQUEST,
        payload
    };
}