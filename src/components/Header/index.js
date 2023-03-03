import React, {useCallback} from 'react';
import { 
    FaHome, 
    FaSignInAlt, 
    FaUserAlt, 
    FaUserEdit, 
    FaUserPlus,
    FaUserMinus, 
    FaShoppingCart, 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as loginActions from '../../store/modules/login/actions';
import * as productsActions from '../../store/modules/products/actions';
import { Nav } from './styled';
import history from '../../services/history';
import {toast} from 'react-toastify';

export default function Header(){
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const cart = useSelector(state => state.products.cart);
    const dispatch = useDispatch();
    const handleLogin = useCallback(() => {
        if (isLoggedIn) {
            dispatch(loginActions.loginFailure({isLoggedIn}));
            cart.forEach(element => {
                dispatch(productsActions.removeProduct(element.id));
            });
            toast.success('Logout sucessufully.');
            history.push('/');
        }
    }, [isLoggedIn, dispatch, cart]);
    return (
        <Nav>
            <Link to="/">
                <FaHome size={24}/>
            </Link>
            <Link to="/login">
                {(isLoggedIn && (<FaUserEdit size={30}/>)) || (<FaUserAlt size={24}/>)}
            </Link>
            <Link to="/register">
                {(isLoggedIn && (<FaUserMinus size={30}/>)) || (<FaUserPlus size={30}/>)}
            </Link>
            <Link to="/shopping">
                <FaShoppingCart size={24}/>
            </Link>
            <Link to="/">
                {isLoggedIn && <FaSignInAlt onClick={handleLogin} size={24}/>}
            </Link>
        </Nav>
    );
}