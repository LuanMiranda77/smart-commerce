import React from "react";
import { Container } from "./styles";
import { ToastContainer } from "react-toastify";

interface ToastDefaultProps {
  //adicionar os props
}

export const ToastDefault: React.FC<ToastDefaultProps> = () => {
  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </Container>
  );
};
