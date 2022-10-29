import React from 'react';
import { FaArchive, FaFolderPlus, FaPlusSquare, FaWindowClose } from 'react-icons/fa';
import { Container } from './styles';

interface InputFileProdutoProps {
  //adicionar os props
}

export const InputFileProduto: React.FC<InputFileProdutoProps> = () => {
  return <Container className='flex'>
    <input type="file" accept="image/png,image/jpeg" name='file' id='file' />
    <div className='h-24 w-28 bg-gray-200 flex items-center justify-center border-2 border-blue-400 shadow-md'>
      <FaArchive className='text-6xl text-gray-400' />
    </div>
    <div className='ml-2'>
      <label htmlFor="file"><FaFolderPlus className='mt-6 text-blue-500 text-2xl cursor-pointer'  style={{bottom:'0', marginTop:'42px'}}/></label>
      <label htmlFor="file"><FaWindowClose className='mt-6 text-red-500 text-2xl cursor-pointer' style={{bottom:'0', marginTop:'5px'}}/></label>
    </div>
  </Container>;
}