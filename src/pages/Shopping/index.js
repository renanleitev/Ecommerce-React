import React, { useCallback, useMemo, useState } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/products/actions';
import { 
    CartContainer, 
    ShoppingContainer, 
    ButtonContainer, 
    ItemContainer,
    CheckoutContainer } from './styled';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Shopping(){
    const cart = useSelector(state => state.products.cart);
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    useMemo(() => {
        let quantity = 0;
        cart.forEach(element => {
            quantity += element.quantity;
        });
        setQuantity(quantity);
    }, [cart]);
    const handleCheckout = useCallback(() => {
        let total = 0;
        cart.forEach(element => {
            total += element.totalPrice;
        });
        toast.success(`Thank you! Your total is $${total}`);
    }, [cart]);
    const handleIncrement = useCallback((id) => {
        dispatch(actions.incrementQuantity(id));
        setQuantity(quantity+1);
    }, [dispatch, quantity]);
    const handleDecrement = useCallback((id) => {
        dispatch(actions.decrementQuantity(id));
        setQuantity(quantity-1);
    }, [dispatch, quantity]);
    const handleRemove = useCallback((id) => {
        dispatch(actions.removeProduct(id));
    }, [dispatch]);
    return (
        <CartContainer>
            <CheckoutContainer onClick={handleCheckout}><FaShoppingCart size={20}/> {quantity}</CheckoutContainer>
            {isLoggedIn ? (
                cart.map(item => (
                    <ItemContainer key={item.id}>
                        <ShoppingContainer key={item.id+1}>
                            <Link to={`product/${item.id}`} key={item.id+2}>{item.name}</Link>
                            <img key={item.id+3} src={item.images} alt=''/>
                            <p key={item.id+4}>Price: ${item.price}</p>
                            <p key={item.id+5}>Quantity: {item.quantity}</p>
                            <p key={item.id+6}>Total: ${item.totalPrice}</p>
                        </ShoppingContainer>
                        <ButtonContainer key={item.id+7}>
                                <button onClick={() => handleIncrement(item.id)}>+</button>
                                <button onClick={() => handleDecrement(item.id)}>-</button>
                                <button onClick={() => handleRemove(item.id)}>Remove item</button>
                        </ButtonContainer>
                    </ItemContainer>
                ))
            ) : (
                <ItemContainer>
                    <h1>You must be logged in to visualize your cart.</h1>
                </ItemContainer>
            )}
        </CartContainer> 
    )
}