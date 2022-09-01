import { DateSearch } from "../entities/Date";
import { AppDataSource } from "../data-source";

export const dateRopository = AppDataSource.getRepository(DateSearch);
