import styled from "styled-components";
import * as colors from '../../config/colors';

export const ItemContainer = styled.div`
    max-width: 760px;
    max-height: 500px;
    background: white;
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
    h1{
        margin-bottom: 10px;
    }
`;

export const CartButton = styled.button`
    margin-right: 10px;
    :hover{
        background-color: ${colors.sucessColor};
    }
`;