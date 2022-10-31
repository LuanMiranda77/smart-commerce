import React, { useContext, InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import { Container } from './styles';
import Select from 'react-select';
import { ThemeContext } from 'styled-components';

interface InputSelectDefaultProps{
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
  onChange?:(e: any)=>void;
}

export const InputSelectDefault: React.FC<InputSelectDefaultProps> = (props) => {
  const theme = useContext(ThemeContext);
  const customStyles = {
    option: (provided:any, state:any) => ({
      ...provided,
      // borderBottom: '1px dotted pink',
      // color: state.isSelected ? 'red' : 'blue',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      display:'flex',
      width: '100%',
      height: 32,
      border:0,
      borderBottom: '2px solid '+theme.colors.primary,
      borderRadius: '0px 5px 5px 5px',
      outline: 0,
      color: 'red',
      background:theme.colors.gray,
    }),
  }
  return <Container className='font-bold text-left input_line_group'>
    <label className='input_line__label' htmlFor="">{props.label}</label>
    <Select
      id={'input-select'+props.label}
      className={'input ' + props.className}
      options={props.options}
      placeholder={props.placeholder}
      isSearchable={props.isSearchable ? props.isSearchable : true}
      isClearable={props.isClearable}
      defaultValue={props.defaultValue}
      autoFocus={props.autoFocus}
      onKeyDown={props.onKeyDownCapture}
      onChange={props.onChange}
      noOptionsMessage={(obj:{inputValue: string})=><p>Não existe items</p>}
      styles={customStyles}
      
      
    />
  </Container>
}