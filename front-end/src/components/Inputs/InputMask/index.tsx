import React, { InputHTMLAttributes } from 'react';
import InputMaskDefault from 'react-input-mask';
import { Container } from './styles';

interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  //adicionar os props
  label: string;
  mask: string;
}

export const InputMask: React.FC<InputMaskProps> = (props) => {

  return <Container className={props.className}>
    <label className={"input_line__label"}>{props.label}</label>
    <InputMaskDefault
      className={'input_line__field'}
      type='text'
      mask={props.mask}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  </Container>
}