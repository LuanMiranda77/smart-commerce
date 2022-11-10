import TreeView from 'devextreme-react/tree-view';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Cargo } from '../../domain/enums';
import { selectState } from '../../store/slices/usuario.slice';
import { menus } from './lista';
import { Container } from './styles';

interface MenuAsideProps {
  //adicionar os props
  closeMenu: () => void;
}

export const MenuAside: React.FC<MenuAsideProps> = (props) => {
  const userAplication = useSelector(selectState);
  const [menusValid, setMenusValid] = useState<any>(menus);
  const navegar = useNavigate();

  useEffect(()=>{
    let lista = [];
    if(userAplication.cargo === Cargo.GERENTE){
      lista = _.filter(menusValid,(menu)=>{
        if(menu.text === 'GERENCIA' || menu.text === 'ESTOQUE' || menu.text === "SPED"){
          return menu;
        }
      });
      setMenusValid(lista);
    }
    else  if(userAplication.cargo === Cargo.CAIXA){
      setMenusValid([]);
    }
    else  if(userAplication.cargo === Cargo.ESTOQUISTA){
      lista = _.filter(menusValid,(menu)=>{
        if(menu.text === 'ESTOQUE'){
          return menu;
        }
      });
      setMenusValid(lista);
    }


  }, [userAplication.cargo]);

  const validarUserPermissoes = () =>{
    

  }

  const onSelectMenu = (item: any) => {
    let option = item.itemData.text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    switch (option) {
      case 'usuarios':
        navegar('/usuario');
        break;
      case 'nota fiscal':
        navegar('/nota-fiscal');
        break;
      case 'cupom fiscal':
        navegar('/cupom-fical');
        break;
      case 'produto':
        navegar('/produto');
        break;
      case 'categoria':
        navegar('/categoria');
        break;
      case 'mde':
        navegar('/mde');
        break;
      case 'curva abc':
        navegar('/curva-abc');
        break;
      case 'estoque critico':
        navegar('/estoque-critico');
        break;
      case 'contas':
        navegar('/contas');
        break;
      case 'plano de contas':
        navegar('/plano-contas');
        break;
      case 'extrato de vendas':
        navegar('/extrato-venda');
        break;
      case 'extrato de entradas':
        navegar('/extrato-entrada');
        break;
      case 'dre financeiro':
        navegar('/dre');
        break;
      case 'sped fiscal':
        navegar('/sped');
    }

  }

  return <Container>
    <TreeView
      id="treeview"
      items={menusValid}
      width={'100%'}
      height={'100%'}
      searchMode={'contains'}
      searchEnabled={true}
      className='text-white'
      onItemClick={onSelectMenu}
    />

  </Container>
};