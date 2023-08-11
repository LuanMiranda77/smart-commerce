import styled from "styled-components";

interface InputPorps{
  color?: string;
}

export const Container  = styled.div<InputPorps>`

    //adicionar stylos

  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;



@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

