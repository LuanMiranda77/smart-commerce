import { UserAplicationType } from './../types/user_aplication';
import { logout } from "../service/auth";
import userPersistState from './userPersistState';
import _ from 'lodash';

export class UtilsGeral {

    public static getEmogi() {
        return ['🤑', '😀', '😱', '😰', '😥'];
    }

    public static setTokenLogin(user: UserAplicationType){
        let key = this.encrypt(this.geraStringAleatoria(10)+'&'+user.nome+'&'+this.geraStringAleatoria(20)+'&'+user.roles+'&'+this.geraStringAleatoria(15)+'&'+user.id+"&"+this.geraStringAleatoria(5)+'&'+user.status+"&"+this.geraStringAleatoria(8));
        localStorage.setItem("@TOKEN_KEY", key);
    }

    public static getTokenLogin(){
        let key = localStorage.getItem("@TOKEN_KEY");
        if(key != null){
            const array = this.decrypt(key).split('&');
            const userLogado: UserAplicationType={
                id: Number(array[5]),
                nome: array[1], 
                email:'', 
                dataCriacao: null, 
                dataAtualizacao: null, 
                acesso: null,
                status: 'S', 
                password: '', 
                telefone:'',
                cargo:'',
                roles:[1,2,3],
                // role: Number(array[3])
            } 
            return userLogado;
        }
        
    }



    // public static setClienteLocal(user: ICliente){
    //     let key = this.encrypt(JSON.stringify(user));
    //     localStorage.setItem("p-text-cli", key);
    // }

    // public static getClienteLocal(): ICliente{
    //     let key = localStorage.getItem("p-text-cli");
    //     return key!= null ?  {...JSON.parse(this.decrypt(key))} :  {};
        
    // }

    public static logout(){
        logout();
    }


    private static  encrypt(dados: string){
        var result = "";
        for(let i=0;i<dados.length;i++){
          if(i<dados.length-1) {
              result+=dados.charCodeAt(i)+10;
              result+="-";
          } else{
              result+=dados.charCodeAt(i)+10;
          }
        }
        return result;
    }

    private  static decrypt(key: string){
        var result="";
        var array = key.split("-");
        for(let i=0;i<array.length;i++){
          result+=String.fromCharCode(Number(array[i])-10);
        }
        return result;
    }

    private static geraStringAleatoria(tamanho: number) {
        var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var stringAleatoria = '';
        for (var i = 0; i < tamanho; i++) {
            stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return stringAleatoria;
    }

    static removeMask(value: any):string {
        let v = value.replaceAll(/\D/g, '');
        // v = v.replaceAll('-', '');
        // v = v.replaceAll('/', '');
        return v;
    }





}