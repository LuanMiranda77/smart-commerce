import React, { InputHTMLAttributes } from 'react';
import InputMaskDefault from 'react-input-mask';
import { Container } from './styles';

interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  //adicionar os props
  label: string;
  mask: string | (string)[];
  error?:boolean;
}

export const InputMask: React.FC<InputMaskProps> = (props) => {

  return <Container className={props.className}>
    <label className={"input_line__label"}>{props.label}<span className='text-red-500 font-bold'>{props.required ? " *" : ''}</span></label>
    <InputMaskDefault
      className={'input_line__field'}
      type='text'
      mask={props.mask}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required={props.required}
    />
    {props.error && props.required ?<small className='text-red-500 absolute left-1 top-12'>O campo é obrigatório</small>:''}
  </Container>
}