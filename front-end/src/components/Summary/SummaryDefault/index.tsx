import React from 'react';
import { Container } from './styles';
import CountUp from 'react-countup';

interface SummaryDefaultProps {
  //adicionar os props
  label: string,
  colorBorder?: string
  icon: React.ReactNode;
  className?: string;
  montante: number;
}

export const SummaryDefault: React.FC<SummaryDefaultProps> = (props) => {
  return <Container className={"card-local " + props.className} id={props.label} style={{ borderTop: '2px solid ' + props.colorBorder }} >
    <div className="w-full p-1">
      <label className="font-bold" htmlFor="">{props.label}</label>
    </div>
    <div className="flex font-bold lg:text-2xl justify-between p-2">
      {props.icon}
      <label htmlFor={props.label} style={{ color:props.colorBorder }}>
        <CountUp end={props.montante} prefix='R$ ' separator="." decimal="," decimals={2} />
      </label>
    </div>
  </Container>
}