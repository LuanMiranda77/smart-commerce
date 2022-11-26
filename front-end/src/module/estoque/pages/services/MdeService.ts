import { Upload } from "devextreme-react/file-manager";
import { BsDownload } from "react-icons/bs";
import { api } from "../../../../config/api";

const  url='api/mde';
const  urlUpload='api/upload';

export const MdeService = {

    //end-point da api
   

    //modelo de request post
    post(pEntity: String){
      return api.post(url, pEntity);
    },

    //modelo de request get
    get(){
      return api.get(url);
    },

    upload(files: Array<File>){
      let resp;
      for (let f of files) {
        if (f && f.size < 5e6) {
          const formData = new FormData();
          formData.append('file', f);
          console.log(formData);
          resp = api.post(urlUpload, formData);
        }

      }
      return resp;
    },
  
}