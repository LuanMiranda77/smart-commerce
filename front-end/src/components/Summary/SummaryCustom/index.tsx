import React from "react";
import { Container } from "./styles";

interface SummaryCustomProps {
  //adicionar os props
  id:string,
  colorBorder?: string
  children: React.ReactNode;
  className?:string;
}

export const SummaryCustom: React.FC<SummaryCustomProps> = (props) => {
  return (
    <Container className={"card-local "+props.className}  id={props.id} style={{borderTop: '2px solid '+props.colorBorder}} >
      <div className="w-full">
        {props.children}
      </div>
    </Container>
  );
};
