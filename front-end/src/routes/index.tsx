import React, {useEffect} from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { isAuthenticated } from '../config/auth';

// import { Container } from './styles';

interface Props{
    setDefaultTheme(): void;
}

const Routes: React.FC<Props> = ({setDefaultTheme}) => {
    let logado = isAuthenticated();
    console.log(logado);
    useEffect(()=>{
      logado = isAuthenticated();
    },[logado])

  return <>
        {logado ? <AppRoutes setDefaultTheme={setDefaultTheme}/> : <AuthRoutes/>}
  </>;
}

export default Routes;