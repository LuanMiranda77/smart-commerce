import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  //adicionar os props
  type: string;
  label: string;
}

export const InputDefault: React.FC<InputDefaultProps> = (props) => {
  return (
    <Container className="input_line_group">
          <label className="input_line__label">{props.label}</label>
          <input
            type={props.type}
            className={"input_line__field " + props.className}
            placeholder={props.placeholder}
            name={props.label}
            id={props.label}
            onChange={props.onChange}
          />
    </Container>
  );
};
