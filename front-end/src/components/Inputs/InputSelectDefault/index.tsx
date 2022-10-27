import React, { ReactNode } from 'react';
import { Container } from './styles';
import Select from 'react-select';

interface InputSelectDefaultProps {
  //adicionar os props
  options: Array<Object>;
  label:string;
  placeholder?: string;
  isClearable?: boolean;
  isSearchable?: boolean;
  autoFocus?: boolean;
  className?: string;
  defaultValue?: Object;
  onKeyDownCapture?:(e: any)=>void;
}

export const InputSelectDefault: React.FC<InputSelectDefaultProps> = (props) => (
  <Container className='font-bold text-left'>
    <label className='label' htmlFor="">{props.label}</label>
    <Select
      id={'#input-select'+props.label}
      className={'input ' + props.className}
      options={props.options}
      placeholder={props.placeholder}
      isSearchable={props.isSearchable ? props.isSearchable : true}
      isClearable={props.isClearable}
      defaultValue={props.defaultValue}
      autoFocus={props.autoFocus}
      onKeyDown={props.onKeyDownCapture}
    />
  </Container>
)