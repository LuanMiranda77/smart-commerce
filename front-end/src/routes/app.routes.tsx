import React, { Suspense } from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
//nossos imports
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
            <Route path="/financeiro" element={<Dashboard />} />
            {/* <Route path="/venda" element={<Login />} /> */}
            {/* <Route path="/home" element={<PrivateRoute component={Login} />} /> */}
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};
export default AppRoutes;
