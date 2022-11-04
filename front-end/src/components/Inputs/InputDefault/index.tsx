import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  //adicionar os props
  type: string;
  label: string;
  autoFocus?: boolean;
  readOnly?: boolean;
  onKeyDownCapture?:(e: any)=>void;
  error?:boolean;

}

export const InputDefault: React.FC<InputDefaultProps> = (props) => {
  return (
    <Container className={"input_line_group " + props.className}>
          <label className="input_line__label">{props.label}<span className='text-red-500 font-bold'>{props.required ? " *" : ''}</span></label>
          <input
            type={props.type}
            className={"input_line__field"}
            placeholder={props.placeholder}
            name={props.label}
            id={props.label}
            onChange={props.onChange}
            onKeyDownCapture={props.onKeyDownCapture}
            autoFocus={props.autoFocus ? props.autoFocus:false}
            readOnly={props.readOnly ? props.readOnly:false}
          />
          {props.error && props.required ?<small className='text-red-500 absolute left-1 top-12'>O campo é obrigatório</small>:''}
    </Container>
  );
};
