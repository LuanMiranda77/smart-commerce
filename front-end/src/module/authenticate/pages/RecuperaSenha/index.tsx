import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";
import * as yup from "yup";
import icon from "../../../../assets/Logo/icon.svg";
import {
  ButtonBase, ToastDefault
} from "../../../../components";
import { UsuarioService } from "../services/usuarioService";
import { Container } from "./styles";
/**
 *@Author
 *@Issue
 */

function RecuperaSenha() {


  const [email, setEmail] = useState<string>('');
  const service = new UsuarioService();

  const schema = yup.object().shape({
    email: yup.string().email('O e-mail não é válido').required('O campo é obrigatório'),
    // confirmePass: yup.string().oneOf([yup.ref("password")]).required('Digite a senha')
  }).required();

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSend = (form: any) => {
    console.log(email, form);
    service.recuperarSenha({ email: email, password: "" }).then(response => {
      toast.success('Sua solicitação vou enviada, verifique sua caixa de e-mail');
    })
      .catch(err => {
        toast.error(err.mensagemUsuario);
      });
  }


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
        <form onSubmit={handleSubmit(onSend)}>
          <>
            <div className="flex mb-9">
              <FaEnvelope className="ml-2 mt-1.5" style={{ fontSize: '24px', position: 'absolute' }} />
              <input className="input_line__field" style={{ paddingLeft: '2.5rem' }} type="email" placeholder="Digite o e-mail" id="email"
                required
                {...register('email')}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            {errors.email?.message}
            <ButtonBase
              model="btn_base"
              label="Enviar"
              className="primary-color my- "
              size="small"
              type="submit"
            />
          </>
        </form>
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
      <ToastDefault />
    </Container>
  );
}
export default RecuperaSenha;
