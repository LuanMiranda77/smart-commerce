import React from 'react';
import { Link } from "react-router-dom";
import { Logo } from '../Logo';
import { Container, Header, MenuContainer } from './styles';

export const Aside: React.FC = () => {
  return <Container >
            <Header style={{justifyContent:"center", alignItems:'center'}}>
              {/* <Logo size='LARGE'/> */}
            </Header>
            <MenuContainer>
              {/* <Link to={'/venda'}>
                <button>venda</button>

              </Link> */}
              menu aqui
            </MenuContainer>
         </Container>;
}