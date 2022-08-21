import { MigrationInterface, QueryRunner } from "typeorm";

export class default1661094638858 implements MigrationInterface {
    name = 'default1661094638858'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" DROP COLUMN "datacriacaodojogo"`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" ADD "datacriacaodojogo" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" DROP COLUMN "duracaodojogo"`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" ADD "duracaodojogo" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" DROP COLUMN "duracaodojogo"`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" ADD "duracaodojogo" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" DROP COLUMN "datacriacaodojogo"`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" ADD "datacriacaodojogo" TIMESTAMP NOT NULL`);
    }

}
