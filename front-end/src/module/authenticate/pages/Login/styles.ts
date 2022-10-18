import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  margin: 0 auto;
  width: 70vw;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 30%;
    margin: 5% 35% auto;
    margin-bottom: 2rem;
    @media (max-width: 720px) {
      width: 50%;
      margin: 5% 15% auto;
    }
  }

  h3 {
    margin-top: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    color: ${(color) => color.theme.colors.primary};
    /* padding: 3 1rem 10rem; */
  }

  .div-left {
    background: ${(color) => color.theme.colors.white};
    align-items: center;
    width: 50%;
    border-radius: 10px 0px 0px 10px;
    margin-left: 1rem;
    padding: 1rem;
  }

  .div-right {
    background: ${(color) => color.theme.colors.black};
    align-items: center;
    text-align: center;
    color: white;
    width: 50%;
    border-radius: 0 10px 10px 0;
    padding: 1rem;
    margin-right: 1rem;
  }

  .olho {
    font-size: 24px;
    /* position:absolute; */
    /* margin-left:12.5em ; */
    margin-top: 0px;
    border: 0;
    height: 100%;
    border-bottom: 2px solid ${(color) => color.theme.colors.primary};
    border-radius: 0px 0px 5px 0px;
    outline: 0;
    /* font-size: 1.3rem; */
    color: ${(color) => color.theme.colors.black};
    background: ${(color) => color.theme.colors.gray};
    cursor: pointer;
  }

  .label-senha{
    cursor: pointer;
    &:hover{
      color: ${(color) => color.theme.colors.gray};
      font-weight: 100;
    }
  }

  .div-login {
    width: 50%;
    margin-right: -2rem;
    @media (max-width: 720px) {
      width: 91%;
      margin: 0 1rem auto;
    }
    .p-fluid {
      width: 100%;
    }
  }

  .div-link {
    margin-top: 1.5rem;
    /* justify-content: baseline; */
    font-weight: bold;
    font-size: 14px;

    @media (max-width: 720px) {
      font-size: 14px;
    }
    @media (max-width: 1025px) {
      font-size: 12px;
    }

    a {
      text-decoration: none;
    }
  }

  .input_line__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid ${(color) => color.theme.colors.primary};
    border-radius: 0px 5px 5px 5px;
    outline: 0;
    /* font-size: 1.3rem; */
    color: ${(color) => color.theme.colors.black};
    padding: 7px 9px;
    background: ${(color) => color.theme.colors.gray};
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
    font-size: 1rem;
    color: ${(color) => color.theme.colors.primary};
    font-weight: bold;
  }

  .input_line__field:focus {
    ~ .input_line__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${(color) => color.theme.colors.primary};
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(
      to right,
      ${(color) => color.theme.colors.primary},
      ${(color) => color.theme.colors.secondary}
    );
    border-image-slice: 1;
  }
  /* reset input */
  .input_line__field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }

  @media (max-width: 720px) {
    width: 100vw;
    margin: 0 auto;
    display: block;

    img {
      width: 60%;
      margin: 5% 15% auto;
    }

    .div-left {
      background: ${(color) => color.theme.colors.white};
      align-items: center;
      width: 87.5vw;
      border-radius: 10px;
      margin-left: 2rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .div-right {
      width: 90%;
      border-radius: 10px;
      padding: 2rem;
      margin-left: 1.5rem;
      font-size: 12px;
    }
    .input_line__field {
    }
  }
`;
