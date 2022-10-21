import React from 'react';
import { FaCartArrowDown, FaFileInvoiceDollar, FaRegSun, FaShopify, FaSpeakap, FaStoreAlt, FaUserFriends } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Logo } from '../Logo';
import { Container, Header, MenuContainer } from './styles';

export function Aside(){
  return <Container >
            {/* <Header style={{justifyContent:"center", alignItems:'center'}}>
              <Logo size='LARGE'/>
            </Header> */}
            <MenuContainer>
              <Link to={'/venda'}>
                <div className='w-100 text-center mb-2'>
                  <FaCartArrowDown className='btn-menu'/>
                  <label className='text-white font-bold' style={{fontSize:'11px'}}>VENDA</label>
                </div>
              </Link>
              <Link to={'/estoque'}>
                <div className='w-100 text-center mb-2'>
                  <FaShopify className='btn-menu'/>
                  <label className='text-white font-bold' style={{fontSize:'11px'}}>ESTOQUE</label>
                </div>
              </Link>
              <Link to={'/financeiro'}>
                <div className='w-100 text-center mb-2'>
                  <FaSpeakap className='btn-menu'/>
                  <label className='text-white font-bold'style={{fontSize:'10px'}}>FINANCEIRO</label>
                </div>
              </Link>
              <Link to={'/mde'}>
                <div className='w-100 text-center mb-2'>
                  <FaFileInvoiceDollar className='btn-menu'/>
                  <label className='text-white font-bold'style={{fontSize:'11px'}}>MDE</label>
                </div>
              </Link>
              <Link to={'/empresa'}>
                <div className='w-100 text-center mb-2'>
                  <FaStoreAlt className='btn-menu'/>
                  <label className='text-white font-bold'style={{fontSize:'11px'}}>EMPRESA</label>
                </div>
              </Link>
              <Link to={'/usuario'}>
                <div className='w-100 text-center mb-2'>
                  <FaUserFriends className='btn-menu'/>
                  <label className='text-white font-bold'style={{fontSize:'11px'}}>USUÁRIOS</label>
                </div>
              </Link>
              <Link to={'/configurar'}>
                <div className='w-100 text-center'>
                  <FaRegSun className='btn-menu'/>
                  <label className='text-white font-bold'style={{fontSize:'9.5px'}}>CONFIGURAR</label>
                </div>
              </Link>
            </MenuContainer>
         </Container>;
}