import React from 'react';
import { Container } from './styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LinhaChartProps {
  //adicionar os props
  label: string;
  data: {
    name: string,
    value: number,
  }[];
}

export const LinhaChart: React.FC<LinhaChartProps> = (props) => (<Container className='grid p-2'>
    <div className='w-full font-bold'>
      <label htmlFor="">{props.label}</label>
    </div>
    <div className='w-full h-full'>
      <ResponsiveContainer>
        <LineChart
          data={props.data}
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
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>

  </Container>
);