import React from 'react';
import { Container } from './styles';

interface DividerProps {
  //adicionar os props
  tipo: 'vertical' | 'horizontal';
  size?: number;
  color?: string;
  className?:string;
  
}

export const Divider: React.FC<DividerProps> = (props) => (
  <Container color={props.color}  size={props.size} className={props.className}>
    {props.tipo === 'vertical' ?
      <div className="vertical h-full"></div>
      :
      <hr className="horizontal mt-2"/>
    }
  </Container>
);