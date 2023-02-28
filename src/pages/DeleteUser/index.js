import React, {useCallback, useState} from 'react';
import { Form } from '../../styles/GlobalStyle';
import * as actions from '../../store/modules/login/actions';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function DeleteUser(){
    const user = useSelector(state => state.login.user);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (confirmDelete) {
            dispatch(actions.deleteRequest(user));
            dispatch(actions.loginSuccess());
            setConfirmDelete(false);
        }
        else {
            toast.success('Do you want to delete your account?');
            setConfirmDelete(true);
        }
    }, [confirmDelete, dispatch, user]);
    return (
            <Form onSubmit={handleSubmit}>
                <h2>Delete account</h2>
                <button type="submit">Delete</button>
            </Form>
    );
}