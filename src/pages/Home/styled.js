import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ArrowLeft = styled(FaArrowLeft)`
    margin-left: 50%;
    color: white;
    :hover{
        cursor: pointer;
    }
`;

export const ArrowRight = styled(FaArrowRight)`
    color: white;
    :hover{
        cursor: pointer;
    }
`;