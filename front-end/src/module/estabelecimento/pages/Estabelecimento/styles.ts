import styled from "styled-components";

export const Container  = styled.div`

    //adicionar stylos
    background-color: ${color => color.theme.title ==='dark'?color.theme.colors.tertiary : color.theme.colors.white };
    width: 100%;
    height: 100%;
    border-radius: 8px;

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo

}

`;

