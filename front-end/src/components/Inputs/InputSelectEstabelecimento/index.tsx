import React, { ReactNode } from 'react';
import { Container } from './styles';
import Select from 'react-select';

interface InputSelectEstabelecimentoProps{
  //adicionar os props
}

export const InputSelectEstabelecimento: React.FC< InputSelectEstabelecimentoProps> = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

 return <Container className='font-bold'>
          <Select options={options} className='input' placeholder='Selecione o estabelecimento...'  isSearchable={true} isClearable={true}/>
     </Container>;
}