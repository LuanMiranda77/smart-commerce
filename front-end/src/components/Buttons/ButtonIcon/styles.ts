import styled from "styled-components";

export const Container  = styled.button`

    //adicionar stylos
    display: flex;
    padding-top: 0.1rem;
    padding-left: 9px;
    padding-right: 45%;
    /* width: 100%; */
    text-align: center;
    align-items: center ;
    justify-content: space-between;
    background-color: ${color => color.theme.colors.primary};
    cursor: pointer;
    border-radius: 8px;
    height:var(--max-height-button);
    color: ${color => color.theme.colors.textLabel};
    transition: all 0.3s;
    /* position: relative; */
    font-weight: bold;
    overflow: hidden;

    border-radius: 8px;
    box-shadow: 0 6px 30px -10px rgba(#CCCCCC, 1);
    
    &:hover {
        transform: translateX(5px) translateY(-7px);
        opacity : 0.8;
    }

    .primary-color{
      background-color: ${color => color.theme.colors.primary};
      border: 2px solid ${color => color.theme.colors.primary};
  }
  .secondary-color{
      background-color: ${color => color.theme.colors.secondary};
      border: 2px solid ${color => color.theme.colors.secondary};
  }
  .tertiary-color{
      background-color: ${color => color.theme.colors.tertiary};
      border: 2px solid ${color => color.theme.colors.tertiary};
  }
  .green-color{
      background-color: ${color => color.theme.colors.success};
      border: 2px solid ${color => color.theme.colors.success};
  }
  .red-color{
      background-color: ${color => color.theme.colors.error};;
      border: 2px solid ${color => color.theme.colors.error};;
  }
  .blue-color{
      background-color: ${color => color.theme.colors.info};
      border: 2px solid ${color => color.theme.colors.info};
  }
  .black-color{
      background-color: ${color => color.theme.colors.black};;
      border: 2px solid ${color => color.theme.colors.black};;
  }

    



@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

