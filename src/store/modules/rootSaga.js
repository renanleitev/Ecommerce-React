import { all } from 'redux-saga/effects';
import login from './login/sagas';
import products from './products/sagas';

export default function* rootSaga() {
    return yield all([login, products]);
}