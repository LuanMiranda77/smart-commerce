import styled from "styled-components";

export const Container  = styled.div`
    //adicionar stylos
    grid-area: AS;
    background-color:${props => props.theme.colors.tertiary};
    border-right: 1px solid ${props => props.theme.colors.gray};
    transition: grid-template-columns 3s;

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

export const Header = styled.header`
    display: flex;
    align-items:center;
    justify-content:center;
    height:50px;
`;

export const MenuContainer = styled.nav`
    margin-top:10px;
    padding: 1rem;
`;
