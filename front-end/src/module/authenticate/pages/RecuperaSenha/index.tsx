import { useState } from "react";
import { toast } from "react-toastify";
import {
  ButtonBase,
  ButtonIcon,
  InputBase,
  Logo,
  ModalDefault,
} from "../../../../components";
import { Container } from "./styles";
import icon from "../../../../assets/Logo/icon.svg";
import { FaEnvelope } from "react-icons/fa";
/**
 *@Author
 *@Issue
 */

function RecuperaSenha() {
  toast.success("w");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const open = () => {
    setOpenModal(true);
  };

  const close = () => {
    setOpenModal(false);
  };

  const body = (
    <div>
      <label htmlFor="">Dados pessoasi</label>
    </div>
  );

  return (
    <Container>
      <div className="div-left p-5 text-center">
        <div className="grid grid-cols-5 gap-4">
          <img className="col-start-3 col-span-4" src={icon} alt="" />
        </div>
        <br />
        <p className="text-blak-400 font-bold text-4xl">
          Opa! esqueceu sua senha?
        </p>
        <small className="p-4 text-blak-100 font-bold text-lg">
          <p>Para recuperar seu acesso preencha o campo com o e-mail</p>
          <p>cadastrado em sua conta do nosso app.</p>
        </small>
        <div>
          <div className="flex mb-9">
            <FaEnvelope className="ml-2 mt-1.5" style={{ fontSize: '24px', position: 'absolute' }} />
            <input className="input_line__field" style={{ paddingLeft: '2.5rem' }} type="email" placeholder="Digite o e-mail" name="email" id="email" />
          </div>
          <ButtonBase
            model="btn_base"
            label="Enviar"
            className="primary-color my-5"
            size="small"
            onClick={open}
          />
          <ButtonIcon size="large"  onClick={open} label="save" icon={<FaEnvelope/>}/>
        </div>
        <div>
          <small className="p-4 font-bold text-sm">
            <p> Caso não tenha acesso ao e-mail cadastrado por favor entre em
              contato com o nosso Atendimento.</p> Fone: (83)9.99638-6694
          </small>
        </div>
      </div>
      <div className="div-right p-5">
        <p className="font-bold text-2xl p-7" style={{ color: '#2B96C8' }}>
          Instruções
        </p>
        <div className="w-100 text-left mb-4">
          <p className="font-bold text-lg" style={{ color: '#FFF' }}>1.Passo →</p>
          <p className="font-bold text-lg" style={{ color: '#FFF' }}>
            Preencher o e-mail e clicar no botão enviar
          </p>
        </div>
        <div className="w-100 text-left mb-4">
          <p className="font-bold text-lg" style={{ color: '#FFF' }}>2.Passo →</p>
          <p className="font-bold text-lg" style={{ color: '#FFF' }}>
            Abrir o e-mail preenchido e clicar no link
            recebido
          </p>
        </div>
        <div className="w-100 text-left mb-4">
          <p className="font-bold text-lg" style={{ color: '#FFF' }}>3.Passo →</p>
          <p className="font-bold text-lg" style={{ color: '#FFF' }}>
            Digitar uma nova senha para seu usuário.
          </p>
        </div>
        <div className="w-100 text-left mb-4">
          <p className="font-bold text-lg" style={{ color: '#FFF' }}>4.Passo →</p>
          <p className="font-bold text-lg" style={{ color: '#FFF' }}>
            Acessar com a nova senha e com o mesmo e-mail digitado.
          </p>
        </div>


      </div>
      {/* <ToastDefault/> */}
      <ModalDefault
        title="Aviso"
        isOpen={openModal}
        children={body}
        onRequestClose={close}
      />
    </Container>
  );
}
export default RecuperaSenha;
