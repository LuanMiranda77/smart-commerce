import { ButtonIcon } from './index';
import styled from "styled-components";

interface ButtonIconProps{
    color?:string;
    width: string;
}

export const Container  = styled.button<ButtonIconProps>`

    //adicionar stylos
    display: flex;
    padding-top: 0.1rem;
    padding-left: 9px;
    padding-right: 9px;
    width: ${props => props.width};
    text-align: center;
    align-items: center ;
    justify-content: space-between;
    background-color: ${porps => porps.color ? porps.color : porps.theme.colors.primary};
    cursor: pointer;
    border-radius: 8px;
    height:var(--max-height-button);
    color: ${color => color.theme.colors.textLabel};
    transition: all 0.3s;
    /* position: relative; */
    font-weight: bold;
    overflow: hidden;

    border-radius: 8px;
    box-shadow: 0 6px 30px -10px rgba(#CCCCCC, 1);
    
    &:hover {
        transform: translateX(5px) translateY(-7px);
        opacity : 0.8;
    }
@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

