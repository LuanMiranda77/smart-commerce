import React, { ButtonHTMLAttributes, useState } from 'react';
import { ButtonBase } from '../ButtonBase';
import { Container } from './styles';

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //adicionar os props
  label: string;
  icon: React.ReactNode;
  size: "large" | "medium" | "small" | "mini";
}

export const ButtonIcon: React.FC<ButtonIconProps> = (props) => {

  return <Container onClick={props.onClick} style={
    (
      props.size === 'large' ? { width: '100%' } :
        props.size === 'medium' ? { width: '75%' } :
          props.size === 'small' ? { width: '50%' } :
            { width: '25%' }
    )}>
    <i style={{ fontSize: '24px' }}>{props.icon}</i>
    <label className='ml-2' htmlFor={props.label}>{props.label}</label>
  </Container>;
}