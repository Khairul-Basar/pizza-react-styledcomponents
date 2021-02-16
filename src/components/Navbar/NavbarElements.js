import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {GiFullPizza} from 'react-icons/gi'

export const Nav = styled.div`
    background: gray;
    display: flex;
    font-weight: bold;
    height: 80px;
    justify-content: center;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    
    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;


export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;
    
    p{
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`;

export const Bars = styled(GiFullPizza)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`;