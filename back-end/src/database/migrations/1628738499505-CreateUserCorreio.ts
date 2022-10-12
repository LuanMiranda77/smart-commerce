import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserCorreio1628738499505 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"userCorreio",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {   name:"key",
                        type: "varchar",
                    },
                    {   name:"user_name",
                        type: "varchar",
                    },
                    {   name:"created_date",
                        type: "timestamp",
                        default:"now()"
                    },
                    {   name:"update_date",
                        type: "timestamp",
                        default:"now()"
                    },

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("userCorreio");
    }

}
