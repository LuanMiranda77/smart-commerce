import React, {InputHTMLAttributes} from 'react';
import { Container } from './styles';

interface InputCheckProps extends InputHTMLAttributes<HTMLInputElement>{
  //adicionar os props
  label: string;
  color?: string;
  classN?:string;
}

export const InputCheck: React.FC<InputCheckProps> = (props) => {
  return <Container className={props.classN}>
    <input type="checkbox" className='cursor-pointer'  {...props} name={props.label} />
    <label className='ml-2 ' htmlFor={props.label}>{props.label}</label>
  </Container>;
}