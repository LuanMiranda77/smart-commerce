import styled from "styled-components";

export const Container  = styled.div`

    //adicionar stylos
    grid-area: MH;
    background:${props =>props.theme.colors.primary};
    display: flex;
    align-items: center ;
    justify-content: space-between;
    text-align: right;
    padding: 0.9rem;
    border-bottom: 1px solid ${props =>props.theme.colors.gray};
    box-shadow: 15px 15px 10px gray;

    .teste{
        cursor: pointer;
        font-weight: bold;
        border-color: ${props =>props.theme.colors.primary} transparent transparent;

        &:hover{
            border-color: ${props =>props.theme.colors.black} transparent transparent;
        }
    }

    .inputdrop{
        cursor: pointer;
        font-weight: bold;
        color: ${props =>props.theme.colors.primary} transparent transparent;
        border-radius: 8px;

        &:hover{
            color: ${props =>props.theme.colors.black} transparent transparent;
            border-color: ${props =>props.theme.colors.info};
        }
    }

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

