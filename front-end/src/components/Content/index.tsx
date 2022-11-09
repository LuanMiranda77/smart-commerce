import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { reset } from '../../store/slices/menuUser.slice';

interface Props {
  children: React.ReactNode;
  closeMenu: () => void;
}

export const Content: React.FC<Props> = ({ children, closeMenu }) => {
  const dispatch = useDispatch();
  const close = () => {
    closeMenu();
    dispatch(reset())
  }
  return <Container onClick={close} style={{ backgroundImage: '../../assets/Logo/logo.svg' }}>
    {children}
  </Container>;
}