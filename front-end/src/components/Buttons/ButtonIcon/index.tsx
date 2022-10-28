import React, { ButtonHTMLAttributes, useState } from 'react';
import { ButtonBase } from '../ButtonBase';
import { Container } from './styles';

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //adicionar os props
  label: string;
  icon: React.ReactNode;
  color?: string;
  width: string;
}

export const ButtonIcon: React.FC<ButtonIconProps> = (props) => {

  return <Container id={props.label}
    onClick={props.onClick}
    color={props.color}
    // width={props.width}
    {...props}
  >
    <i style={{ fontSize: '20px' }}>{props.icon}</i>
    <label className='ml-2' htmlFor={props.label} style={{ cursor: 'pointer', width:'100%' }}>{props.label}</label>
  </Container>;
}