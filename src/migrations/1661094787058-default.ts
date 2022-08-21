import { MigrationInterface, QueryRunner } from "typeorm";

export class default1661094787058 implements MigrationInterface {
    name = 'default1661094787058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" DROP COLUMN "duracaodojogo"`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" ADD "duracaodojogo" TIME NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" DROP COLUMN "duracaodojogo"`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" ADD "duracaodojogo" date NOT NULL`);
    }

}
