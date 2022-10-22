import { Header } from './../../../../components/Aside/styles';
import styled from "styled-components";

export const Container  = styled.div`

    //adicionar stylos
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height:100vh;
    width:100vw;


    header{
        background:${props =>props.theme.colors.primary};
        display: flex;
        align-items: center ;
        justify-content: space-between;
        text-align: right;
        padding: 0.9rem;
        max-height: 60px;
        /* border-bottom: 1px solid ${props =>props.theme.colors.gray}; */
        /* box-shadow: 2px 2px 2px gray; */
    }

    .linha-vertical {
        border-left: 2px solid;/* Adiciona borda esquerda na div como ser fosse uma linha.*/
    }

    .button-pagamento{
        box-shadow: 0px 2px 5px  black;
        padding: 0.3rem;

        &:hover {
            opacity : 0.7;
            box-shadow: 0px 2px 5px  black;
        } 
    }

    .input-hover{
        &:focus{
            border: none;
        }
    }

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

export const ContainerProduto  = styled.div`
    background-color: ${color => color.theme.colors.gray};
    height: calc(100vh - 241px);

    @media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
    height: calc(100vh - 187px);
    }

`;

export const ContainerMenu  = styled.div`
    padding: 1rem;
    background-color: ${color => color.theme.colors.tertiary};
    height: calc(100vh - 300px);

    @media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
    height: calc(100vh - 270px);
    overflow-y: scroll;
    font-size: 12px;
    }


`;

