import { useContext, useState } from "react";
import { FaEnvelope, FaExpeditedssl, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcHighPriority } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ThemeContext } from "styled-components";
import bannerInferior from '../../../../assets/banner_inferior.svg';
import bannerSuperior from '../../../../assets/banner_superior.svg';
import icon from '../../../../assets/Logo/icon.svg';
import { DialogPopupInfo } from "../../../../components";
import { ButtonBase } from "../../../../components/Buttons/ButtonBase";
import { RootState } from '../../../../store/index.store';
import { UsuarioService } from "../services/usuarioService";
import { Container } from "./styles";
import logo from '../../../../assets/Logo/logo.svg';


function Login() {
  const theme = useContext(ThemeContext);
  const navegate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const [user, setUser] = useState<Object>({ email: '', password: '' });
  const dispatch = useDispatch();
  const userAplication = useSelector((state: RootState) => state.userAplication);

  const service = new UsuarioService();
  const login = () => {
    service.login(user).then(response => {
      if(response.status === "B"){
        setShowInfo(true);
      }
      else if (response.status !== "S") {
        toast.error("Seu usuario foi desativado! fale com administrador do sistema");
        return
      }
      console.log(response);
      // dispatch(load(response));
      window.location.reload();
    }).catch(error => {
      toast.error(error.mensagemUsuario);
    });
  }
  return (
    <>
      <img src={bannerSuperior} alt='logo' style={{ position: 'absolute', width: '100vw', top: '0', margin: '0', zIndex: '-1' }} />

      <Container >

        <div className="div-left">
          <div className="">
            <h3 style={{ color: theme.title === 'light' ? theme.colors.tertiary : theme.colors.textLabel, marginTop:'-5px' }}>
              <img className="w-20 h-20" src={icon} alt='logo' />
              Seu negócio na palma de sua mão!
            </h3>
            <div style={{ margin: "1.5rem" }}>
              <div className="flex mb-6">
                <FaEnvelope className="ml-2 mt-1.5" style={{ fontSize: '24px', position: 'absolute' }} />
                <input className="input_line__field" style={{ paddingLeft: '2.5rem' }} type="email"
                  placeholder="Digite o e-mail" name="email" id="email"
                  onChange={(event) => setUser({
                    ...user, email: event.target.value
                  })}
                />
              </div>
              <div className="grid grid-cols-3">
                <FaExpeditedssl className="mt-1.5 ml-2 col-start-1 col-end-3" style={{ fontSize: '24px', position: 'absolute' }} />
                <input className="input_line__field col-start-1 col-span-4" style={{ paddingLeft: '2.5rem' }} type={showPass ? "text" : "password"} placeholder="Digite o e-mail" name="email" id="email"
                  onChange={(event) => setUser({
                    ...user, password: event.target.value
                  })} />
                {showPass === true ?
                  <FaEye className="mt-2 olho col-end-7 col-span-2"
                    onClick={() => setShowPass(false)}
                  />
                  :
                  <FaEyeSlash className="mt-2 olho col-end-7 col-span-2"
                    onClick={() => setShowPass(true)}
                  />
                }
              </div>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <ButtonBase label="ENTRAR" model="btn_base" className="primary-color mb-1" size="small" onClick={login} />
              <Link to={'/recupera-senha'}>
                <label htmlFor="entrar" className="font-bold label-senha"
                  style={{ color: theme.title === 'light' ? theme.colors.primary : theme.colors.black }}>Esqueceu a senha?
                </label>
              </Link>
            </div>
          </div>
        </div>

        <div className="div-right">
          <img className="w-4/12" src={logo} alt="logo" />
          <h1 className="p-2">Melhor solução para seu comércio varejista e atacadista</h1>
          <h2 className="p-2">Tudo com um toque ou um click de distância!</h2>
          <h2 className="p-2">Tenha mais tempo para sua familia</h2>
          <h2 className="mb-1">O GERENCIAMENTE da sua empresa na palma da mão</h2>
          <h2 className="p-3" style={{ color: theme.title === 'light' ? theme.colors.secondary : theme.colors.textLabel }}>www.smartcommerce.com/atendimento</h2>
        </div>

      </Container>

      <img src={bannerInferior} alt='banner' style={{ position: 'absolute', width: '100vw', bottom: '0', margin: '0', zIndex: '-1' }} />

      <DialogPopupInfo title="Aviso" isOpen={showInfo}  onRequestClose={()=> setShowInfo(false)}>
        <div className="" style={{color:theme.colors.error}}>
          <div className="flex justify-center">
            <FcHighPriority style={{fontSize:'60px', textAlign:'center'}}/>
          </div>
          <div>
            <p className="text-xl font-bold mb-2">O estabelecimento que você esta tentando acessar foi bloqueado</p>
            <p  className="text-xl font-bold">Entre em contato com o nosso suporte</p>
          </div>
        </div>
        </DialogPopupInfo>
        
    </>
  );
}

export default Login;
