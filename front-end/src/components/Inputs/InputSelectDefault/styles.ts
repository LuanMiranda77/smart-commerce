import styled from "styled-components";

export const Container  = styled.div`

    //adicionar stylos
    .input{
        width: 100%;
        .css-tlfecz-indicatorContainer{
            color: ${color => color.theme.colors.primary};
            font-weight: bold;
        }
    }

    .label{
        color: ${color => color.title !== 'dark'? color.theme.colors.primary : color.theme.colors.textLabel};
        font-size: 14px;
    }

@media screen and (max-width: 40em) {
    .input{
        width: 100%;
    }
}

`;

