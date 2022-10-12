import React from 'react';
import { Logo } from '../Logo';
import { Container, Header, MenuContainer } from './styles';

export const Aside: React.FC = () => {
  return <Container >
            <Header style={{justifyContent:"center", alignItems:'center'}}>
              <Logo size='LARGE'/>
            </Header>
            <MenuContainer>
              menu aqui
            </MenuContainer>
         </Container>;
}