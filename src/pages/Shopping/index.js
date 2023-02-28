import React, { useCallback, useState } from 'react';
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
    let total = 0;
    const dispatch = useDispatch();
    const handleCheckout = useCallback(() => {
        cart.forEach(element => {
            total += element.totalPrice;
        });
        toast.success(`Thank you! Your total is $${total}`);
        total = 0;
    }, [cart, total]);
    const handleIncrement = useCallback((id, quant) => {
        dispatch(actions.incrementQuantity(id));
        setQuantity(quant+1);
    }, [dispatch]);
    const handleDecrement = useCallback((id, quant) => {
        dispatch(actions.decrementQuantity(id));
        setQuantity(quant-1);
    }, [dispatch]);
    const handleRemove = useCallback((id) => {
        dispatch(actions.removeProduct(id));
    }, [dispatch]);
    return (
        <CartContainer>
            <CheckoutContainer onClick={handleCheckout}>Checkout</CheckoutContainer>
            {isLoggedIn ? (
                cart.map(item => (
                    <ItemContainer key={Math.random()}>
                        <ShoppingContainer key={Math.random()}>
                            <Link to={`product/${item.id}`} key={Math.random()}>{item.name}</Link>
                            <img key={Math.random()} src={item.images} alt=''/>
                            <p key={Math.random()}>Price: ${item.price}</p>
                            <p key={Math.random()}>Quantity: {item.quantity}</p>
                            <p key={Math.random()}>Total: ${item.totalPrice}</p>
                        </ShoppingContainer>
                        <ButtonContainer key={Math.random()}>
                                <button onClick={() => handleIncrement(
                                    item.id,
                                    item.quantity
                                    )}>+</button>
                                <button onClick={() => handleDecrement(
                                    item.id,
                                    item.quantity
                                    )}>-</button>
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