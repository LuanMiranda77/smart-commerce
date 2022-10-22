import React, { ButtonHTMLAttributes } from 'react';
import { ProgressPlugin } from 'webpack';
import { Container } from './styles';

interface ButtonPdvProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //adicionar os props
  labelSuperior: string;
  icon: React.ReactNode;
  labelInferior: string;
}

export const ButtonPdv: React.FC<ButtonPdvProps> = (props) => {
  return <Container tipo={props.labelSuperior}>
    <div>
      <label htmlFor="">{props.labelSuperior}</label>
    </div>
    <div className='w-full flex justify-center' style={{color: props.labelSuperior==='ESC' ?"#FFF":'#1c1c1c' }}>
      <i>{props.icon}</i>
    </div>
    <div className='mt-2 text-sm'>
      <label htmlFor="">{props.labelInferior}</label>
    </div>
  </Container>;
}