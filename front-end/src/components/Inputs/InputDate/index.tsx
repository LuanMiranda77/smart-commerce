import React, { InputHTMLAttributes, useContext } from 'react';
import { Container } from './styles';
import { ThemeContext } from "styled-components";

interface InputDateProps extends InputHTMLAttributes<HTMLInputElement>{
  //adicionar os props
  label: string;
}

export const InputDate: React.FC< InputDateProps> = (props) => {
  const theme = useContext(ThemeContext);
  return <Container className='input-group' id={props.label} {...props}>
            <label className='input-label' htmlFor={props.label}>{props.label}</label>
            <input className='input-field' type='date'/>
         </Container>;
}