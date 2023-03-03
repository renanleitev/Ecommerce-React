import { call, put, all, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
    let dataUser;
    let credentialsAreValid = false;
    try {
        const users = yield call(axios.get, '/users');
        users.data.forEach((user) => {
            if (
                (!credentialsAreValid) &&
                (payload.email === user.email) && 
                (payload.password === user.password)
            ) {
                credentialsAreValid = true;
                dataUser = user;
            }  
        })
        if (credentialsAreValid) {
            toast.success('Login successful! Redirecting...');
            yield put(actions.loginSuccess());
            yield put(actions.editSuccess(dataUser));
            history.push('/');
        }
        if (!credentialsAreValid) toast.error('User/password invalid.');
    } 
    catch (e) {
        toast.error('Error:', e);
        yield put(actions.loginFailure());
    }
}
function* loginFailure({payload}) {
    try {
        if (payload.isLoggedIn){
            yield put(actions.loginSuccess());
        }
    } 
    catch (e) {
        toast.error('Erro', e);
        yield put(actions.loginFailure());
    }
}
function* editRequest({payload}){
    try {
        yield call(axios.put, `/users/${payload.id}`, {payload});
        toast.success('Update successful!');
        yield put(actions.editSuccess(payload));
        history.push('/');
    }
    catch (e) {
        toast.error('Error:', e);
        yield put(actions.loginFailure());
    }
}
function* registerRequest({payload}){
    yield call(axios.post, '/users', {payload});
    toast.success('Register successful!');
    yield put(actions.editSuccess(payload));
    history.push('/');
}
function* deleteRequest({payload}){
    yield call(axios.delete, `/users/${payload.id}`);
    toast.success('Delete successful!');
    history.push('/');
}
// takeLatest = Obtém apenas o último clique do botão
export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.LOGIN_FAILURE, loginFailure),
    takeLatest(types.EDIT_REQUEST, editRequest),
    takeLatest(types.REGISTER_REQUEST, registerRequest),
    takeLatest(types.DELETE_REQUEST, deleteRequest),
]);