import styled from "styled-components";

export const Container  = styled.div`

    //adicionar stylos
  cursor  : pointer;
.input-group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
}

.input-field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${color => color.theme.colors.primary};
  border-radius: 0px 5px 5px 5px;
  outline: 0;
  height: 32px;
  /* font-size: 1.3rem; */
  color: ${color => color.theme.colors.black};;
  padding: 7px 9px;
  background: ${color => color.theme.colors.gray};
  transition: border-color 0.2s;

  
  &:placeholder-shown ~ .input-label {
    /* font-size: 1.3rem; */
    cursor: text;
    top: 20px;
  }
}

.input-label {
  color: ${color => (color.title ==='dark'? color.theme.colors.white : color.theme.colors.primary)};
  font-weight:bold;
  font-size: 14px;
}

.input-field:focus {
  ~ .input-label {
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
.input-field{
  &:required,&:invalid { box-shadow:none; }
}

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

