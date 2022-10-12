// import "reflect-metadata";  
import express from "express";
import {router} from "./src/routes";
import cors from "cors";
import {AppDataSource} from './src/data-source';

AppDataSource.initialize().then(()=>{
  const app = express();
  app.use(cors());
  app.use(express.json());
  // app.use(router);
  app.get('/', (req, res) => {
    return res.json('tudo certo')
  });
  
  //definição das portas
  return app.listen(process.env.PORT || 5000, () => {
        return console.log("Server rodando... na port %d in %s node");
  });
}).catch((err) =>{
  return console.log(err);
});
