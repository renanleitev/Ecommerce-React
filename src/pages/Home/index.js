import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/products/actions';
import { Container } from '../../styles/GlobalStyle';
import { ProductContainer, ArrowLeft, ArrowRight } from './styled';

export default function Home(){
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(5);
    const stock = useSelector(state => state.products.stock);
    if (stock === undefined) dispatch(actions.findStock({numReq: limit}));
    useEffect(() => {
        dispatch(actions.findStock({numReq: limit}));
    }, [dispatch, limit]);
    const handlePrevious = useCallback(() => {
        if (limit >= 5) setLimit(5);
        if (count >= 5) setCount(0);
    }, [count, limit]);
    const handleNext = useCallback(() => {
        if (limit === 5) setLimit(limit+5);
        if (count === 0) setCount(count+5);
    }, [count, limit]);
    return (    
        <>
            <ProductContainer>
                {stock.data
                .slice(0+count,limit+count)
                .map((product, index) => {
                    return (
                        <Container key={index}> 
                            <Link key={index+1} to={`product/${product.id}`}>{product.name}</Link>
                            <img key={index+2} src={product.images} alt=''/>
                        </Container> 
                    )
                })}
            </ProductContainer>     
            <ArrowLeft onClick={handlePrevious}/>
            <ArrowRight onClick={handleNext}/>
        </>  
    )
}