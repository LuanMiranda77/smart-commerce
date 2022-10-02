import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import { ThemeContext } from "styled-components";
import { Container } from "./styles";
interface ModalDefaultProps {
  //adicionar os props
  title: string;
  isOpen: boolean;
  children?: React.ReactNode;
  onRequestClose: () => void;
}

export const ModalDefault: React.FC<ModalDefaultProps> = (props) => {
  
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Modal
        isOpen={props.isOpen}
        ariaHideApp={true}
        style={{
          overlay: {
            backgroundColor: "rgba(78, 76, 76, 0.75)",
          },
          content: {
            width:'98%',
            left: 0,
            top: 0,
            bottom:0,
            right: 0,
            border: 0,
            padding: 0,
            margin: '1rem',
            backgroundColor: colors.background,
          },
        }}
        // closeTimeoutMS={800}
        contentElement={(props, children) => <div {...props}>{children}</div>}
        onRequestClose={() => props.onRequestClose}
      >
        <div
          className="p-2 flex justify-between"
          style={{
            background: colors.primary,
          }}
        >
          <label
            htmlFor=""
            className="font-bold"
            style={{ color: colors.textLabel }}
          >
            {props.title}
          </label>
          <IoClose
            style={{ cursor: "pointer"}}
            onClick={props.onRequestClose}
            color={colors.textLabel}
            title={'sqdq'}
            size={'22px'}
          /> 
         
        </div>
        <div className="w-full p-2" style={{ marginTop: "10px" }}>
          <div className="w-full h-20 text-center">{props.children}</div>
        </div>
      </Modal>
    </Container>
  );
};
