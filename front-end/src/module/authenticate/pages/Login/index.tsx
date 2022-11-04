import { useContext, useState } from "react";
import { FaEnvelope, FaExpeditedssl, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { ThemeContext } from "styled-components";
import bannerInferior from '../../../../assets/banner_inferior.svg';
import bannerSuperior from '../../../../assets/banner_superior.svg';
import icon from '../../../../assets/Logo/icon.svg';
import { ButtonBase } from "../../../../components/Buttons/ButtonBase";
import { Logo } from '../../../../components/Logo';
import { SizeLogo } from '../../../../domain/enums';
import { Container } from "./styles";

function Login() {
  const theme = useContext(ThemeContext);
  const [showPass, setShowPass] = useState(false);
  const login = () =>{
    console.log("sim");
  }
  return (
    <>
      <img className="w-28 h-28" src={bannerSuperior} alt='logo'  style={{position: 'absolute', width:'100vw', top:'0', margin:'0', zIndex:'-1'}}/>
    <Container >
      <div className="div-left">
        <div className="">
        <h3 style={{color: theme.title === 'light' ? theme.colors.tertiary : theme.colors.textLabel}}>
          <img className="w-28 h-28" src={icon} alt='logo' />Seu negócio na palma de sua mão!</h3>
        <div style={{margin:"2rem"}}>
          <div className="flex mb-9">
             <FaEnvelope className="ml-2 mt-1.5" style={{fontSize: '24px', position:'absolute'}}/>
            <input className="input_line__field" style={{paddingLeft:'2.5rem'}} type="email" placeholder="Digite o e-mail" name="email" id="email" />
          </div>
          <div className="grid grid-cols-3">
            <FaExpeditedssl className="mt-1.5 ml-2 col-start-1 col-end-3" style={{fontSize: '24px', position:'absolute'}}/>
            <input className="input_line__field col-start-1 col-span-4" style={{paddingLeft:'2.5rem'}} type={showPass ? "text" : "password"} placeholder="Digite o e-mail" name="email" id="email" />
            { showPass === true ?
              <FaEye className="mt-2 olho col-end-7 col-span-2" 
                onClick={()=> setShowPass(false)}
            />
            :
            <FaEyeSlash className="mt-2 olho col-end-7 col-span-2"  
            onClick={()=> setShowPass(true)} 
            />
            }
          </div>
        </div>
        <div style={{width:"100%", textAlign:"center"}}>
          <ButtonBase label="ENTRAR" model="btn_base" className="primary-color mb-3" size="small" onClick={login}/>
          <Link to={'/recupera-senha'}>
            <label htmlFor="entrar" className="font-bold label-senha"
              style={{color: theme.title === 'light' ? theme.colors.primary : theme.colors.black}}>Esqueceu a senha?
            </label>
          </Link>
        </div>
        </div>
      </div>
      <div className="div-right">
        <Logo size={SizeLogo.MEDIUM}></Logo>
        <h1 className="p-3">Melhor solução para seu comércio varejista e atacadista</h1>
        <h2 className="p-2">Tudo com um toque ou um click de distância!</h2>
        <h2 className="p-2">Tenha mais tempo para sua familia</h2>
        <h2 className="p-2 mb-10">O GERENCIAMENTE da sua empresa na palma da mão</h2>
        <h2 className="p-3" style={{color: theme.title === 'light' ? theme.colors.secondary : theme.colors.textLabel}}>www.smartcommerce.com/atendimento</h2>
      </div>
    </Container>
      <img className="w-28 h-28" src={bannerInferior} alt='logo'  style={{position: 'absolute', width:'100%', bottom:'0', margin:'0', zIndex:'-1'}}/>
    </>
  );
}

export default Login;
