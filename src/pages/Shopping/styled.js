import styled from "styled-components";
import * as colors from '../../config/colors';

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-bottom: 5%;
    button{
        margin-right: 10px;
        :hover{
        background-color: ${colors.sucessColor};
        }
    }
`;

export const ItemContainer = styled.div`
    background-color: ${colors.primaryWhiteColor};
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 420px;
    border-radius: 20px;
    margin-top: 1%;
    margin-bottom: 6%;
    h1{
        padding: 20px;
    }
`;

export const ShoppingContainer = styled.div`
    background: ${colors.primaryWhiteColor};
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        font-size: 20px;
        margin-bottom: 10px;
        text-align: center;
    }
    img{
        width: 150px;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    img:hover{
        transform: scale(1.2);
        transition: all 300ms;
    }
`;

export const CheckoutContainer = styled.button`
    background-color: ${colors.infoColor};
    border-radius: 0;
    position: fixed;
    align-self: flex-end;
    z-index: 2;
    :hover{
        background-color: ${colors.sucessColor};
    }
`;