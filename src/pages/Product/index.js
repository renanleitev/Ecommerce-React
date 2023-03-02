import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/products/actions';
import { ItemContainer, CartButton } from './styled';
import {ProductContainer} from '../Home/styled';
import {toast} from 'react-toastify';

export default function Product(){
    const url = useParams();
    const id = Number.parseInt(url.id);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.products.cart);
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [firstLoad, setFirstLoad] = useState(true);
    const [item, setItem] = useState({});
    useMemo(() => {
        if (cart !== undefined && firstLoad) {
            cart.forEach(element => {
                if (element.id === id) {
                    setQuantity(element.quantity);
                    setTotalPrice(element.price*quantity);
                }
            });
        }
    }, [cart, firstLoad, id, quantity]);
    const product = useSelector(state => state.products.product);
    if (product === undefined) dispatch(actions.findProduct({id}));
    const name = product.data.name;
    const images = product.data.images;
    const price = Number.parseFloat(product.data.price);
    const operationalSystem = product.data.os;
    const storage = product.data.storage.hdd;
    const memory = product.data.storage.ram;
    const cpu = product.data.hardware.cpu;
    const wifi = product.data.connectivity.wifi;
    const description = product.data.description;
    const screenResolution = product.data.display.screenResolution;
    const screenSize = product.data.display.screenSize;
    useMemo(() => {
        setItem(
                {
                    id: id,
                    name: name,
                    images: images,
                    price: price,
                    totalPrice: totalPrice,
                    quantity: quantity,
                }
        )
    }, [id, images, name, price, quantity, totalPrice]);
    useEffect(() => {
        dispatch(actions.findProduct({id}));
    }, [dispatch, id, quantity, totalPrice]);
    const addProduct = useCallback(() => {
        if (isLoggedIn){
            setFirstLoad(false);
            dispatch(actions.addProduct({id, name, price, totalPrice, images}));
            toast.success(`Added ${name} successfully!`);
            setQuantity(quantity+1);
            setTotalPrice(Number.parseFloat(Number.parseFloat(totalPrice + price).toFixed(2)));
        }
        if (!isLoggedIn) toast.error('You must be logged in!');
    }, [dispatch, id, images, isLoggedIn, name, price, quantity, totalPrice]);
    const removeProduct = useCallback(() => {
        if (isLoggedIn){
            setFirstLoad(false);
            dispatch(actions.removeProduct(id));
            toast.success(`Removed ${name} successfully!`);
            setQuantity(0);
            setTotalPrice(0);
        }
        if (!isLoggedIn) toast.error('You must be logged in!');
    }, [dispatch, id, isLoggedIn, name]);
    const incrementQuantity = useCallback(() => {
        if (isLoggedIn && quantity > 0){
            setFirstLoad(false);
            item.quantity++;
            setQuantity(item.quantity);
            item.totalPrice = Number.parseFloat(Number.parseFloat(item.totalPrice + item.price).toFixed(2));
            setTotalPrice(item.totalPrice);
            dispatch(actions.changeQuantity({...item}));
            toast.success(`Added ${name} successfully!`);
        }
        if (!isLoggedIn || quantity === 0) toast.error('Can not add the item.');
    }, [dispatch, isLoggedIn, item, name, quantity]);
    const decrementQuantity = useCallback(() => {
        if (isLoggedIn && quantity > 1){
            setFirstLoad(false);
            item.quantity--;
            setQuantity(item.quantity);
            item.totalPrice = Number.parseFloat(Number.parseFloat(item.totalPrice - item.price).toFixed(2));
            setTotalPrice(item.totalPrice);
            dispatch(actions.changeQuantity({...item}));
            toast.success(`Removed ${name} successfully!`);
        }
        if (!isLoggedIn || quantity === 0) toast.error('Can not remove the item.');
    }, [dispatch, isLoggedIn, item, name, quantity]);
    return (
        <ProductContainer>
            <ItemContainer>
                <h1>Info</h1> 
                <p>Operational System: {operationalSystem}</p>
                <p>Resolution: {screenResolution}</p>
                <p>Screen Size: {screenSize}</p>
                <p>Storage: {storage}</p>
                <p>Memory: {memory}</p>
                <p>CPU: {cpu}</p>
                <p>Wifi: {wifi}</p>
                <p>Description: {description}</p>
                <ProductContainer>
                    <CartButton onClick={addProduct}>Add to cart</CartButton>
                    <CartButton onClick={incrementQuantity}>+</CartButton>
                    <CartButton onClick={decrementQuantity}>-</CartButton>
                    <CartButton onClick={removeProduct}>Remove item</CartButton>
                </ProductContainer>
            </ItemContainer> 
            <ItemContainer> 
                <p>{item.name}</p>
                <img src={item.images} alt=''/>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${Number.parseFloat(item.totalPrice).toFixed(2)}</p>
            </ItemContainer> 
        </ProductContainer>       
    )
}