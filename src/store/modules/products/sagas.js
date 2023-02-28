import { call, put, all, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* findStock({payload}) {
    try {
        const stock = yield call(axios.get, '/products', {
            params: {
                _limit: payload.numReq,
            }
        });
        yield put(actions.showStock(stock));  
    } 
    catch (e) {
        toast.error('Error:', e);
    }
}

function* findProduct({payload}) {
    try {
        const product = yield call(axios.get, `/products/${payload.id}`);
        yield put(actions.showProduct(product));  
    } 
    catch (e) {
        toast.error('Error:', e);
    }
}

// takeLatest = Obtém apenas o último clique do botão
export default all([
    takeLatest(types.FIND_STOCK, findStock),
    takeLatest(types.FIND_PRODUCT, findProduct),
]);