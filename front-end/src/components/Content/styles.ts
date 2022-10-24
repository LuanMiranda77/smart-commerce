import styled from "styled-components";

export const Container  = styled.div`
    //adicionar stylos
    grid-area: CT;
    background:${props => props.theme.colors.background};
    padding: 10px;

    height:calc(100vh -50px);
    overflow-y:scroll;

    ::-webkit-scrollbar{
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
    }

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

