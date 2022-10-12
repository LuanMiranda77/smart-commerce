import React, { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//nossos imports
import RecuperaSenha from "../module/authenticate/pages/RecuperaSenha";
import { Notfound } from "../module/Notfound";
import Login from "../module/authenticate/pages/Login";
import PrivateRoute from "../privateRoutes";
import { ModalExample } from "../components/modal_example";
import {ThemeContext} from '../hooks/theme';
import {Layout} from "../components/Layout";

const AuthRoutes: React.FC = () => {
  const root = ThemeContext.ThemeProvider();
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="">Carregando....</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/recupera-senha" element={<RecuperaSenha/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/develop-tools" element={<ModalExample />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default AuthRoutes;
