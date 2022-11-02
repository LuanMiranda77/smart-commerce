import React  from 'react';
import { Container } from './styles';
import logo from '../../assets/Logo/logo.svg';

interface Props{
  children: React.ReactNode;
  closeMenu: ()=>void;
}

export const Content: React.FC<Props> = ({children, closeMenu}) => {
  return <Container onClick={closeMenu} style={{backgroundImage:'../../assets/Logo/logo.svg'}}>
            {children}
         </Container>;
}