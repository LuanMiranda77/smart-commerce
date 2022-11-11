import { api } from "../../../../config/api";
import { login, logout } from "../../../../config/auth";
import { UserAplicationType } from "../../../../domain";
import { UtilsUserLocal } from "../../../../utils/utils_userLocal";


/**
*@Author
*@Issue
*/
export class UsuarioService {

  url='api/usuario';
  auth='/token';
  erro='';

  public async login(pEntity : any) {
      const token = await api.post(this.auth, {email:process.env.REACT_APP_API_USER, password:process.env.REACT_APP_API_PASSWORD}).then(response =>{
          login(response.data);
          return response.data;
      });
      if(token){
          const response = await api.post(this.url+'/login', pEntity,{
            headers:{
                'Authorization': token
            }
          })
          .then( resp =>{
              let userLogado = resp.data;
              userLogado.token = token;
            //   persistLocalStorage<UserAplicationType>("@user-data", userLogado, 'set');
              UtilsUserLocal.setTokenLogin(userLogado);
              logout();
              return resp.data;
          })
          .catch(error => {
              console.log(error.response.data[0]);
              
              return error.response.data[0] !== undefined ? Promise.reject(error.response.data[0]) : Promise.reject({mensagemUsuario:'Verifique o JWT'});
          });
          return response;
      }
  }

  public async recuperarSenha(pEntity: any){
      const response = await api.post(this.url+'/recuperasenha', pEntity)
      .then( resp =>{
          return resp.data;
      })
      .catch(error => {
          return Promise.reject(error.response.data[0]);
      });
      return response;
  }

  public async trocarSenha(user: UserAplicationType){
      const response = await api.put(this.url+`/${user.id}`, user)
      .then( resp =>{
          return resp.data;
      })
      .catch(error => {
          console.log(error);
          return Promise.reject(error.response.data[0]);
      });
      return response;
  }

  public async getUsuarios(){
    const response = await api.get(this.url)
    .then( resp =>{
        return resp.data;
    })
    .catch(error => {
        console.log(error);
        return Promise.reject(error.response.data[0]);
    });
    return Promise.resolve(response);
  }

  public async setStatus( id:number, status: string){
    const response = await api.put(this.url+`/status/${id}/${status}`)
    .then( resp =>{
        return resp.data;
    })
    .catch(error => {
        console.log(error);
        return Promise.reject(error.response.data[0]);
    });
    return Promise.resolve(response);
  }
  
    
  
}