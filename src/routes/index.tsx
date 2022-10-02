import React from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { isAuthenticated } from '../service/auth';

// import { Container } from './styles';

interface Props{
    setDefaultTheme(): void;
}

const Routes: React.FC<Props> = ({setDefaultTheme}) => {
    const logado = isAuthenticated();
  return <>
        {logado ? <AppRoutes setDefaultTheme={setDefaultTheme}/>: <AuthRoutes/>}
  </>;
}

export default Routes;