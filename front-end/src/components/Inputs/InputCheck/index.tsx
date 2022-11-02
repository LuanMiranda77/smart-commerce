import React, {InputHTMLAttributes} from 'react';
import { Container } from './styles';

interface InputCheckProps extends InputHTMLAttributes<HTMLInputElement>{
  //adicionar os props
  label: string;
  color?: string;
  css?:string;
}

export const InputCheck: React.FC<InputCheckProps> = (props) => {
  return <Container className={props.css}>
    <input type="checkbox" className='cursor-pointer'  {...props} name={props.label} />
    <label className='ml-2 ' htmlFor={props.label}>{props.label}</label>
  </Container>;
}