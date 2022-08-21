import { Interface } from "readline";
import { AppDataSource } from "../data-source";
import { InfoMatche } from '../entities/InfoMatche';

export const infoMatchRepository = AppDataSource.getRepository(InfoMatche);
