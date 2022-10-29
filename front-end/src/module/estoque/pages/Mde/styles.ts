import { Table } from './../../../venda/pages/Pdv/styles';
import styled from "styled-components";

export const Container  = styled.div`
    //adicionar stylos
    label{
        /* color: ${color => (color.theme.title === 'dark' ? color.theme.colors.textLabel : color.theme.colors.primary)} */
    }

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

export const Body  = styled.div`
    //adicionar stylos
    width: 100%;
    height: calc(100vh - 215px) ;
    background-color: transparent;

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

export const ContainerTable  = styled.div`
    //adicionar stylos
    width: 100%;
    height: calc(100vh - 260px) ;
    background-color: transparent;

    .column-1{
        color: ${color => color.theme.colors.primary};
    }


@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

export const ContainerFiltro  = styled.div`
    height: calc(100vh - 90px) !important;
    margin-top: -0.5rem;
    border-radius: 5px;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`;

export const ContainerEntradaNota  = styled.div`
    height: calc(100vh - 60px);
    margin-top: -0.5rem;
    border-radius: 5px;
    background-color: ${color => (color.theme.title==='dark'?color.theme.colors.tertiary:color.theme.colors.white)};
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;

    .left{
        width: '30%';
        height:calc(100vh - 100px);
        background-color: blue;

    }
    .right{
        width: '70%';
        height:calc(100vh - 100px);
        background-color: red;
        
        
    }
    
    .card-local{
            background-color: ${color => color.theme.colors.gray}!important;
    }
    
}
`;



