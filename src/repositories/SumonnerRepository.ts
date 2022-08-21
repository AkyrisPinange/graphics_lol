import { AppDataSource } from "../data-source";
import { Sumonner } from '../entities/Sumonner';

export const sumonnerRepository = AppDataSource.getRepository(Sumonner);