import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  //variaveis do tema de cores
  --background: ${color => color.theme.colors.background};
  --white: #FFF;
  --text-label: #fff;
 
  //variaveis de tamanho
  --max-height-button:32px;
}

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

html{
  @media (max-width: 1080px){
    font-size: 18px;
  }
  @media (max-width: 720px){
    font-size: 14px;
  }
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

h1,h2,h3,h4,h5,h6 strong{
  font-weight: 700;
}

button {
  cursor: pointer;
}

//style dos inputs do projeto
.input_line_group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
}

.input_line__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${color => color.theme.colors.primary};
  border-radius: 0px 5px 5px 5px;
  outline: 0;
  height: var(--max-height-button);
  /* font-size: 1.3rem; */
  color: ${color => color.theme.colors.black};;
  padding: 7px 9px;
  background: ${color => color.theme.colors.gray};
  transition: border-color 0.2s;

  
  &:placeholder-shown ~ .input_line__label {
    /* font-size: 1.3rem; */
    cursor: text;
    top: 20px;
  }
}

.input_line__label {
  position: absolute;
  top: -7px;
  display: block;
  transition: 0.2s;
  font-size: 14px;
  color: ${color => color.theme.colors.primary};
  font-weight:bold;
}

.input_line__field:focus {
  ~ .input_line__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${color => color.theme.colors.primary};;
    font-weight:700;    
  }
  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, ${color => color.theme.colors.primary},${color => color.theme.colors.secondary});
  border-image-slice: 1;
}
/* reset input */
.input_line__field{
  &:required,&:invalid { box-shadow:none; }
}

[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}
.react-modal-overlay{
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

}

.linha-vertical {
        border-left: 2px solid;/* Adiciona borda esquerda na div como ser fosse uma linha.*/
}

.card-local{
  background: var(--white);
  border-radius: 5px;
}

.react-modal-content{
  width: 100%;
  max-width: 70rem;
  background-color: var(--background);
  padding: 1.5rem;
  position: relative;
  border-radius: 0.24rem;
}
.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1rem;
  border: 0;
  transition: filter 0.2s;
  &:hover{
    filter:brightness(0.9);
  }
  @media (max-width: 720px){
    right: 3rem;
  }
}

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
    margin:0rem;
}


`