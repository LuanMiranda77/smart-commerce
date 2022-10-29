import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';
import InputMaskDefault from 'react-input-mask';

interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  //adicionar os props
  label: string;
  mask: string | string[];
  beforeMaskValue?: Function;
}

export const InputMask: React.FC<InputMaskProps> = (props) => (
  <Container className={props.className}>
    <label className={"input_line__label"}>{props.label}</label>
    <InputMaskDefault
      className={'input_line__field'}
      mask={props.mask}
      // maskPlaceholder={' '}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      beforeMaskedStateChange={props.beforeMaskValue ? props.beforeMaskValue() : ''}	
    />
  </Container>
)