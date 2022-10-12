export class Utils {

    public static convertProdutoLivreByProduto(array: any[]): Array<any>{
      let arrayConvert =  array.map( item => {
            let produto = {id:0,titulo:'',precoVarejo:0,quantidade:0,categoria:'',status: '',qtn_inicial: 0, qtn_vendida: 0, descricao: '', garantia: '', dt_create: '', dt_update: '', imagens:[]};
            produto.id = item.body.id;
            produto.titulo = item.body.title;
            produto.precoVarejo = item.body.price;
            produto.quantidade = item.body.available_quantity;
            produto.categoria = item.body.category_id;
            produto.status = item.body.status;
            produto.qtn_inicial = item.body.initial_quantity;
            produto.qtn_vendida = item.body.sold_quantity;
            produto.descricao = item.body.descriptions;
            produto.garantia = item.body.warranty;
            produto.dt_create = item.body.date_created;
            produto.dt_update = item.body.last_updated;
            produto.imagens = item.body.pictures;
            return produto;
        });
        return arrayConvert;
    }
    
    public static convertProdutoLivreByProdutoUnico(item: any){
              let produto = {id:0,titulo:'',precoVarejo:0,quantidade:0,categoria:'',status: '',qtn_inicial: 0, qtn_vendida: 0, descricao: '', garantia: '', dt_create: '', dt_update: '', imagens:[]};
              produto.id = item.id;
              produto.titulo = item.title;
              produto.precoVarejo = item.price;
              produto.quantidade = item.available_quantity;
              produto.categoria = item.category_id;
              produto.status = item.status;
              produto.qtn_inicial = item.initial_quantity;
              produto.qtn_vendida = item.sold_quantity;
              produto.descricao = item.descriptions;
              produto.garantia = item.warranty;
              produto.dt_create = item.date_created;
              produto.dt_update = item.last_updated;
              produto.imagens = item.pictures;
              return produto;
      }
} 


function callback(): any {
    
}
