import React from 'react';
import { Container } from './styles';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarraChartProps{
  //adicionar os props
  label: string;
  data: { name: string,
  value: number,
  montante:number ,}[];
}

export const BarraChart: React.FC< BarraChartProps> = (props) => {
  const data = [
    {
      name: 'Page A',
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      pv: 4800,
      amt: 2181,
    },
  ];
  return <Container className='grid p-2'>
    <div className='w-full font-bold'>
      <label htmlFor="">{props.label}</label>
    </div>
    <div className='w-full h-full'>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        // width={500}
        // height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="pv" fill="#8884d8" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    </ResponsiveContainer>
    </div>
    </Container>
}