import help_url from '../helpers/hep_url.json'
export class ConfigURL{
    
    private url_atual: string;

    constructor(){
        this.url_atual = window.location.href;
    }
    
    static setUrlCorrent = () => {
        //código de validar urls

    }
    

}