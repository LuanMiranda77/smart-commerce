import styled from "styled-components";

export const Container  = styled.div`

    //adicionar stylos
    height: 100%;
    width: 100%;

    .dx-datagrid .dx-header-row > td {
        color: ${color => color.theme.colors.primary};
        font-weight: bold;
    }

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

