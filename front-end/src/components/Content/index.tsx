import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { reset } from '../../store/slices/menuUser.slice';
import { RootState } from '../../store/index.store';

interface Props {
  children: React.ReactNode;
  closeMenu: () => void;
}

export const Content: React.FC<Props> = ({ children, closeMenu }) => {
  const dispatch = useDispatch();
  const { display } = useSelector((state: RootState) => state.menuUser);
  const close = () => {
    closeMenu();
    // dispatch(reset());
    if (display === 'flex') {
      dispatch(reset());
    }
  }
  return <Container onClick={close} style={{ backgroundImage: '../../assets/Logo/logo.svg' }}>
    {children}
  </Container>;
}