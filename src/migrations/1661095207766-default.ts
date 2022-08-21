import { MigrationInterface, QueryRunner } from "typeorm";

export class default1661095207766 implements MigrationInterface {
    name = 'default1661095207766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" DROP CONSTRAINT "PK_2903a3f2fbe30895ecbafb9573e"`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" ADD CONSTRAINT "PK_6e2781b321052df020d09824c89" PRIMARY KEY ("idjogo", "puuid")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" DROP CONSTRAINT "PK_6e2781b321052df020d09824c89"`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" ADD CONSTRAINT "PK_2903a3f2fbe30895ecbafb9573e" PRIMARY KEY ("idjogo")`);
    }

}
