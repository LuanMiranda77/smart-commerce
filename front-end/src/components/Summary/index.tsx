import React from "react";
import { Container } from "./styles";

interface SummaryProps {
  //adicionar os props
  id:string,
  colorBorder?: string
  children: React.ReactNode;
}

export const Summary: React.FC<SummaryProps> = (props) => {
  return (
    <Container className="card-local" id={props.id}>
      <div className="left" style={{ background: props.colorBorder }}></div>
      <div className="w-full">
        {props.children}
      </div>
    </Container>
  );
};
