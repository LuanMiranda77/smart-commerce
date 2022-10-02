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
import { Layout } from "../components/Layout";

interface Props{
  setDefaultTheme(): void;
}


const AppRoutes: React.FC<Props> = ({setDefaultTheme}) => {
  return (
    <Layout alterTheme={setDefaultTheme}>
    <BrowserRouter>
      <Suspense
        fallback={<div className="">Carregando....</div>}
      >
        <Routes>
        <Route path="/home" element={<Login />} />
          {/* <Route path="/home" element={<PrivateRoute component={Login} />} /> */}
        <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </Layout>
  );
};
export default AppRoutes;
