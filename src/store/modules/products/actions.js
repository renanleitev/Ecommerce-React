import * as types from '../types';

export function findStock(payload) {
    return {
        type: types.FIND_STOCK,
        payload
    };
}
export function showStock(payload) {
    return {
        type: types.SHOW_STOCK,
        payload
    };
}
export function findProduct(payload) {
    return {
        type: types.FIND_PRODUCT,
        payload
    };
}
export function showProduct(payload) {
    return {
        type: types.SHOW_PRODUCT,
        payload
    };
}
export function addProduct(payload) {
    return {
        type: types.ADD_PRODUCT,
        payload
    };
}
export function incrementQuantity(payload) {
    return {
        type: types.INCREMENT_QUANTITY,
        payload
    };
}
export function decrementQuantity(payload) {
    return {
        type: types.DECREMENT_QUANTITY,
        payload
    };
}
export function removeProduct(payload) {
    return {
        type: types.REMOVE_PRODUCT,
        payload
    };
}