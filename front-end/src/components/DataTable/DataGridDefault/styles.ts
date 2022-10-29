import styled from "styled-components";

export const Container  = styled.div`

    //adicionar stylos
    height: 100%;
    width: 100%;

    .dx-datagrid .dx-header-row > td {
        color: ${color => color.theme.colors.primary};
        font-weight: bold;
        /* background-color: ${color => color.theme.colors.primary};; */
    }
   .dx-row.dx-data-row.dx-column-lines.dx-state-hover td {  
        background:  ${color => color.theme.colors.dns_info} !important;
        /* cursor: pointer;   */
    } 
    .dx-row.dx-data-row td {  
        background:  ${color => (color.theme.title === 'dark'?color.theme.colors.secondary:'')} !important;
        color: ${color => (color.theme.title === 'dark'?color.theme.colors.textLabel:'')};
        /* cursor: pointer;   */
    } 

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

