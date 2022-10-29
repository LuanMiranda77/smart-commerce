import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Container } from "./styles";
import { ThemeContext } from "styled-components";
import { FaBars, FaTheaterMasks } from "react-icons/fa";
import Select from 'react-select';
import Dropdown from 'react-dropdown';
import { InputSelectEstabelecimento } from "../Inputs/InputSelectEstabelecimento";
import 'react-dropdown/style.css';
interface Props {
  //adicionar os props
  alterTheme(): void;
  onClickMenu(): void;
}

export const MainHeader: React.FC<Props> = ({ alterTheme, onClickMenu }) => {
  const theme = useContext(ThemeContext);
  const options = [
    'one', 'two', 'three'
  ];
  
  return (
    <Container className="" style={{ boxShadow: '0px 15px 10px gray' }}>
      <div className="flex text-left" style={{width: '60%'}}>
        <button
          style={{
            backgroundColor: "transparent",
            border: 0,
            fontSize: "25px",
            color: theme.colors.textLabel,
            marginRight:'2rem'
          }}
          onClick={onClickMenu}
        >
          <FaBars />
        </button>
        <InputSelectEstabelecimento />
        
      </div>
      {/* <h1>MH</h1> */}
      <div className="flex text-rigth">
        {/* <button onClick={alterTheme}>SetTema</button> */}
        <div className="grid mr-3 text-xs" style={{ color: theme.colors.textLabel }}>
          <b>Luan Miranda</b>
          <small style={{ marginTop: '-6px' }}>Luan Miranda</small>
        </div>
        {/* <Dropdown controlClassName="inputdrop text-center" arrowClassName='teste' options={options}  placeholder="Select an option" />; */}
        <FaTheaterMasks onClick={alterTheme} className="text-4xl" style={{ cursor: 'pointer', color: theme.colors.textLabel }} />

      </div>
    </Container>
  );
};
