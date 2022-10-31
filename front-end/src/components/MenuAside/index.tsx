import React, { useState } from 'react';
import {
  FaCartArrowDown,
  FaFileInvoiceDollar,
  FaRegSun,
  FaShopify,
  FaSpeakap,
  FaStoreAlt,
  FaUserFriends
} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Logo } from '../Logo';
import { Container, MenuItem } from './styles';
import TreeView from 'devextreme-react/tree-view';
import { products } from './lista';

interface MenuAsideProps {
  //adicionar os props
  closeMenu: () => void;
}

export const MenuAside: React.FC<MenuAsideProps> = (props) => (
  <Container>
    {/* <Link to={'/'}>
      <MenuItem onClick={props.closeMenu}>
        <FaCartArrowDown id='menu-01' className='btn-menu mr-3' />
        <a href='/' className='text-white font-bold cursor-pointer;'>
          VENDA
        </a>
      </MenuItem>
    </Link> */}
    <TreeView
      id="treeview"
      items={products}
      width={'100%'}
      height={'100%'}
      searchMode={'contains'}
      searchEnabled={true}
      className='text-white'
    />

  </Container>
);