import { MigrationInterface, QueryRunner } from "typeorm";

export class default1661092801638 implements MigrationInterface {
    name = 'default1661092801638'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" DROP CONSTRAINT "FK_c0298518e34dc8fc9f4002e66e1"`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" RENAME COLUMN "sumonner_id" TO "puuid"`);
        await queryRunner.query(`ALTER TABLE "LOL"."sumonners" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "LOL"."sumonners" ADD "puuid" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "LOL"."sumonners" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" DROP COLUMN "puuid"`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" ADD "puuid" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" DROP COLUMN "puuid"`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" ADD "puuid" integer`);
        await queryRunner.query(`ALTER TABLE "LOL"."sumonners" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "LOL"."sumonners" DROP COLUMN "puuid"`);
        await queryRunner.query(`ALTER TABLE "LOL"."sumonners" ADD "nome" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" RENAME COLUMN "puuid" TO "sumonner_id"`);
        await queryRunner.query(`ALTER TABLE "LOL"."info_matche" ADD CONSTRAINT "FK_c0298518e34dc8fc9f4002e66e1" FOREIGN KEY ("sumonner_id") REFERENCES "LOL"."sumonners"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
