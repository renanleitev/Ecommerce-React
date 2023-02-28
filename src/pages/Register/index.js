import React, {useState, useCallback} from 'react';
import { isEmail } from 'validator';
import { Container, Form } from '../../styles/GlobalStyle';
import history from '../../services/history'
import * as actions from '../../store/modules/login/actions';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../components/Input';
import { toast } from 'react-toastify';
import DeleteUser from '../DeleteUser';

export default function Register(){
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const id = undefined;
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState(''); 
    const [formErrors, setFormErrors] = useState(true);
    const dispatch = useDispatch();
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setFormErrors(false);
        if (name.length < 3 || name.length > 255) {
            setFormErrors(true);
            toast.error('Name invalid and/or need to have between 3 and 255 characters.');
        }
        if (surname.length < 3 || surname.length > 255) {
            setFormErrors(true);
            toast.error('Surname invalid and/or need to have between 3 and 255 characters.');
        }
        if (address.length < 3 || address.length > 255) {
            setFormErrors(true);
            toast.error('Address invalid and/or need to have between 3 and 255 characters.');
        }
        if (!isEmail(email)){
            setFormErrors(true);
            toast.error('Email invalid.');
        }
        if (password !== repeatPassword) {
            setFormErrors(true);
            toast.error('Password needs to be the same.');
        }
        if (password.length < 6 || repeatPassword.length < 6) {
            setFormErrors(true);
            toast.error('Password needs to have 6 characters or more.');
        }
        if (!formErrors){
            dispatch(actions.registerRequest({
                id, name, surname, address, email, password
            }));
            dispatch(actions.loginSuccess());
            history.push('/');
        }
    }, [password, repeatPassword, formErrors, dispatch, id, name, surname, address, email]);
    return (
        <Container>
            {(!isLoggedIn && 
                (
                <Form onSubmit={handleSubmit}>
                    <h2>Create an account</h2>
                    <label htmlFor='name'>Name</label>
                    <Input field={name} setField={setName} placeholder='name'/>
                    <label htmlFor='surname'>Surname</label>
                    <Input field={surname} setField={setSurname} placeholder='surname'/>
                    <label htmlFor='address'>Address</label>
                    <Input field={address} setField={setAddress} placeholder='address'/>
                    <label htmlFor='email'>Email</label>
                    <Input field={email} setField={setEmail} placeholder='email'/>
                    <label htmlFor='password'>Password</label>
                    <Input field={password} setField={setPassword} placeholder='password'/>
                    <label htmlFor='password'>Repeat password</label>
                    <Input field={repeatPassword} setField={setRepeatPassword} placeholder='password'/>
                    <button type="submit">Create</button>
                </Form>
                ))
                ||
                (<DeleteUser/>)
            }
        </Container>
    );
}