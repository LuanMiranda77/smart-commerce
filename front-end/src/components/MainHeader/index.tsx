import React, { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Container } from "./styles";
import { ThemeContext } from "styled-components";
import { FaBars, FaClosedCaptioning, FaEllipsisV, FaTheaterMasks, FaUser } from "react-icons/fa";
import Select from 'react-select';
import Dropdown from 'react-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { InputSelectEstabelecimento } from "../Inputs/InputSelectEstabelecimento";
import 'react-dropdown/style.css';
import { RootState } from "../../store/index.store";
import { Divider } from "../Divider";
import { BsDoorClosedFill } from "react-icons/bs";
interface Props {
  //adicionar os props
  alterTheme(): void;
  onClickMenu(): void;
  onClose(): void;
}

export const MainHeader: React.FC<Props> = ({ alterTheme, onClickMenu, onClose }) => {
  const theme = useContext(ThemeContext);
  const { userAplication } = useSelector((state: RootState) => state.user);
  const [show, setShow] = useState('none');
  const options = [
    'Meus dados', 'two', 'Sair'
  ];

  const onShowMenu = (option: number) => {
    if (show === 'flex' && option === 1) {
      setShow("none");

    } else if (show === 'flex' && option === 2) {
      setShow("none");
      alterTheme();
    } else if (show === 'flex' && option === 3) {
      setShow("none");

    } else {
      if(show === 'flex'){
        setShow("none");
      }else{
        setShow("flex");
      }
    }
  }

  return (
    <Container className="" style={{ boxShadow: '0px 15px 10px gray' }} onClick={onClose}>
      <div className="flex text-left" style={{ width: '60%' }}>
        <button
          style={{
            backgroundColor: "transparent",
            border: 0,
            fontSize: "25px",
            color: theme.colors.textLabel,
            marginRight: '2rem'
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
          <b>{userAplication.nome}</b>
          <small style={{ marginTop: '-6px' }}>{userAplication.cargo}</small>
        </div>
        <FaEllipsisV onClick={()=>onShowMenu(0)} className="text-2xl mt-1" style={{ cursor: 'pointer', color: theme.colors.textLabel }} />
        {/* <FaTheaterMasks onClick={alterTheme} className="text-4xl" style={{ cursor: 'pointer', color: theme.colors.textLabel }} /> */}
      </div>
      <div className="div-menu card-local" style={{ display: show }}>
        <label htmlFor="" className="flex items-center hover:text-blue-900 hover:font-bold cursor-pointer"
          onClick={() => onShowMenu(1)}
        >
          <FaUser onClick={alterTheme} className="text-sm mr-1 hover:text-blue-900 hover:font-bold" />
          Meu Perfil
        </label>
        <Divider tipo="horizontal" className="mb-2 mt-2" />
        <label htmlFor="" className="flex items-center hover:text-blue-900 hover:font-bold cursor-pointer"
          onClick={() => onShowMenu(2)}
        >
          <FaTheaterMasks className="text-lg mr-1 hover:text-blue-900 hover:font-bold" />
          Mudar Tema
        </label>
        <Divider tipo="horizontal" className="mb-2 mt-2" />
        <label htmlFor="" className="flex items-center hover:text-blue-900 hover:font-bold cursor-pointer"
          onClick={() => onShowMenu(3)}
        >
          <BsDoorClosedFill className="text-ms mr-1 hover:text-blue-900 hover:font-bold" />
          Sair
        </label>
      </div>
    </Container>
  );
};
