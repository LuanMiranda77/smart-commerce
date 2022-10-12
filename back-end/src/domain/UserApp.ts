import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class UserApp extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  dataCriacao: Date;
  @Column()
  dataAtualizacao: null | Date;
  @Column()
  status: String;
  @Column()
  password: string;
  @Column()
  typeRole: string;
}
