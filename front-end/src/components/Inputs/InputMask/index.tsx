import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';
import InputMaskDefault from 'react-input-mask';

interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  //adicionar os props
  label: string;
  mask: string | string[];
  beforeMaskValue?: Function;
}

export const InputMask: React.FC<InputMaskProps> = (props) => {
  const replace = (value:any)  => {
    return value.replaceAll('.','');
  }
  return <Container className={props.className}>
    <label className={"input_line__label"}>{props.label}</label>
    <InputMaskDefault
      className={'input_line__field'}
      type='text'
      mask={props.mask}
      // maskPlaceholder={' '}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      beforeMaskedStateChange={props.beforeMaskValue ? props.beforeMaskValue() : ''}	
    />
    {/* {props.beforeMaskValue ? replace(props.value) : ''} */}
  </Container>
}