import React, { InputHTMLAttributes, useContext } from 'react';
import { ThemeContext } from "styled-components";
import { Container } from './styles';

interface InputDateProps extends InputHTMLAttributes<HTMLInputElement> {
  //adicionar os props
  label: string;
}

export const InputDate: React.FC<InputDateProps> = (props) => {
  const theme = useContext(ThemeContext);
  return <Container className='input-group' {...props}>
    <label className='font-bold input-label' htmlFor={props.label} style={{ color: (theme.title === 'dark' ? theme.colors.textLabel : theme.colors.primary) }}>{props.label}</label>
    <input id={props.label} className='input-field' type='date' value={props.value} onChange={props.onChange} readOnly={props.readOnly ? props.readOnly:false}/>
  </Container>;
}