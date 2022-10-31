import styled from "styled-components";

export const Container  = styled.div`

    //adicionar stylos
    .column-1{
        color: ${props => props.theme.title ==='dark' ? props.theme.colors.textLabel: props.theme.colors.primary };
    }
    .column-2{
        color: ${props => props.theme.colors.info};
    }

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

export const TableContainer  = styled.div`

    //adicionar stylos
    height: calc(100vh - 125px);

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;


