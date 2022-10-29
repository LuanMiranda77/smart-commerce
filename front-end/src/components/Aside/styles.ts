import styled from "styled-components";

export const Container  = styled.div`
    //adicionar stylos
    grid-area: AS;
    background-color:${props => props.theme.colors.tertiary};
    border-right: 1px solid ${props => props.theme.colors.gray};
    transition: grid-template-columns 3s;
    /* height: calc(100vh - 55px); */

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
    /* margin-top:1px; */
    padding: 0.5rem;
    height: 80%;

    .btn-menu{
        cursor: pointer;
        color: ${color => color.theme.title==='dark' ? 
        color.theme.colors.textLabel: color.theme.colors.primary
        };
        font-size: 45px;
        border:0 ;
        margin-left: 0.25rem;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    }
`;
