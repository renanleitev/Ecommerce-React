import styled from "styled-components";
import * as colors from '../../config/colors';

export const BarFooter = styled.div`
    background-color: ${colors.primaryColor};
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        color: ${colors.primaryWhiteColor};
        margin-left: 5px;
    }
    a{
        text-decoration: none;
        color: ${colors.primaryWhiteColor};
    }
    a:hover{
        color: ${colors.sucessColor};
    }
`;