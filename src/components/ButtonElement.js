import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'black' : 'red')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? 'red' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    font-weight: bold;
    outline: none;
    border: solid 2px red;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'black' : 'red')};\
        color: white;
        font-weight: bold;
    }
`;