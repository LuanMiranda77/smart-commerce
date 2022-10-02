import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Container } from "./styles";
import { ThemeContext } from "styled-components";
interface Props {
  //adicionar os props
  alterTheme(): void;
  onClickMenu(): void;
}

export const MainHeader: React.FC<Props> = ({ alterTheme, onClickMenu }) => {
  const ThemeColors = useContext(ThemeContext).colors;
  return (
    <Container className="" style={{boxShadow: '0px 15px 10px gray'}}>
      <button
        style={{
          backgroundColor: "transparent",
          border: 0,
          fontSize: "25px",
          color: ThemeColors.white,
        }}
        onClick={onClickMenu}
      >
        <AiOutlineMenu />
      </button>
      <h1>MH</h1>
      <button onClick={alterTheme}>SetTema</button>
    </Container>
  );
};
