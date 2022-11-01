import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  //adicionar os props
  type: string;
  label: string;
  autoFocus?: boolean;
  readOnly?: boolean;
  onKeyDownCapture?:(e: any)=>void;

}

export const InputDefault: React.FC<InputDefaultProps> = (props) => {
  return (
    <Container className={"input_line_group " + props.className}>
          <label className="input_line__label">{props.label}</label>
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
    </Container>
  );
};
