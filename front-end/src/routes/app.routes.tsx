import React, { Suspense } from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
//nossos imports
import Estabelecimento from '../module/estabelecimento/pages/Estabelecimento';
import Pdv from '../module/venda/pages/Pdv';
import { Layout } from "../components/Layout";
import Dashboard from "../module/financeiro/pages/Dashboard";
import { Notfound } from "../module/Notfound";

interface Props {
  setDefaultTheme(): void;
}

const AppRoutes: React.FC<Props> = ({ setDefaultTheme }) => {
  return (
    <BrowserRouter>
      <Layout alterTheme={setDefaultTheme}>
        <Suspense
          fallback={<div className="">Carregando....</div>}
        >
          <Routes>

            <Route path="/" element={<Dashboard />} />
            {/* nossas rotas */}
<Route path="/estabelecimento" element={<Estabelecimento/> } />
            <Route path="/venda" element={<Pdv />} />
            <Route path="/financeiro" element={<Dashboard />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};
export default AppRoutes;
