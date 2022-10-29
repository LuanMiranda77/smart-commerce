import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  //adicionar os props
  type: string;
  label: string;
  autoFocus?: boolean;
  onKeyDownCapture?:(e: any)=>void;
}

export const InputMook: React.FC<InputDefaultProps> = (props) => {
  return (
    <Container className={"input_line_group " + props.className}>
          <label className="input_line__label">{props.label}</label>
          <input
            className={"input_line__field"}
            placeholder={props.placeholder}
            name={props.label}
            id={props.label}
            onChange={props.onChange}
            onKeyDownCapture={props.onKeyDownCapture}
            autoFocus={props.autoFocus ? props.autoFocus:false}
            {...props}
          />
    </Container>
  );
};
