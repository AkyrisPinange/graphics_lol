import { MigrationInterface, QueryRunner } from "typeorm";

export class default1661092890775 implements MigrationInterface {
    name = 'default1661092890775'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "LOL"."sumonners" DROP CONSTRAINT "PK_5142872ed9452b5c6a31bba2033"`);
        await queryRunner.query(`ALTER TABLE "LOL"."sumonners" ADD CONSTRAINT "PK_51fa6578dab03e25d00ba7fe8e3" PRIMARY KEY ("id", "puuid")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "LOL"."sumonners" DROP CONSTRAINT "PK_51fa6578dab03e25d00ba7fe8e3"`);
        await queryRunner.query(`ALTER TABLE "LOL"."sumonners" ADD CONSTRAINT "PK_5142872ed9452b5c6a31bba2033" PRIMARY KEY ("id")`);
    }

}
