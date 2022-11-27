import styled from "styled-components";
import logo from '../../assets/Logo/logo.svg';

export const Container  = styled.div`
    //adicionar stylos
    grid-area: CT;
    background:${props => props.theme.colors.background};
    padding: 10px;
    background-image:url(https://uploaddeimagens.com.br/images/004/163/503/full/Minha_%282%29.png?1668469297);
    background-size: 15%;
    background-position: center;
    background-repeat: no-repeat;

    height:calc(100vh -50px);
    overflow-y:auto;

    /* ::-webkit-scrollbar{
        width:10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color:${props => props.theme.colors.secondary};
        border-radius:5px;
    }

    ::-webkit-scrollbar-track{
        background-color:${props => props.theme.colors.tertiary};
        border-radius:5px;
        margin:1rem;
    } */

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

interface PropsImg {
    
}

export const DivImg  = styled.div`
    //adicionar stylos
    width: calc(100vw - 71px);
    height:  calc(100vh - 60px);
    opacity: 0.5;
    position: absolute;
    z-index: 1;

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

