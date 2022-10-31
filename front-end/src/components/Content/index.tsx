import React  from 'react';
import { Container } from './styles';

interface Props{
  children: React.ReactNode;
  closeMenu: ()=>void;
}

export const Content: React.FC<Props> = ({children, closeMenu}) => {
  return <Container onClick={closeMenu}>
            {children}
         </Container>;
}