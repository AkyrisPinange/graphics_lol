import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host:  process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT, 10),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    schema: process.env.TYPEORM_SCHEMA,
    ssl: {
        rejectUnauthorized: false
    },
    logging: ["query", "error", "schema"],
    entities: ['src/entity/*.ts', './build/src/entity/*.js'],
    migrations: ['src/database/migration/*.ts'],
    subscribers: [],
})
