import  'dotenv/config';
import 'reflect-metadata'
import { DataSource } from "typeorm"

const port  = process.env.BD_HOST as number | undefined
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.BD_HOST,
  port: port,
  username: process.env.BD_USER,
  password: process.env.BD_PASS,
  database: process.env.BD_NAME,
  synchronize: true,
  logging: true,
//   entities: [Post, Category],
//   subscribers: [],
//   migrations: [],
});
