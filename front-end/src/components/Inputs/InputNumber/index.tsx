import React, { InputHTMLAttributes } from "react";
import { NumericFormat } from 'react-number-format';
import { Container } from './styles';

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement>{
  //adicionar os props
  label: string;
  separadorMilhar?: "." | "," | boolean
  separadorDecimal: '.' | ','
  prefixo: string;
  fixedZeroFinal?:boolean;
  permiteZeroInicio?: boolean;
  casaDecimal: number

}

export const InputNumber: React.FC<InputNumberProps> = (props) => {
  return <Container>
    <label className='input_line__label' htmlFor={props.label}>{props.label}</label>
    <NumericFormat className='input_line__field'
      id={props.label}
      type={'text'}
      thousandSeparator={props.separadorMilhar}
      decimalSeparator={props.separadorDecimal}
      prefix={props.prefixo}
      fixedDecimalScale={props.fixedZeroFinal ? true:false}
      decimalScale={props.casaDecimal}
      allowLeadingZeros={props.permiteZeroInicio}
      onChange={props.onChange}
    />
  </Container>;
}