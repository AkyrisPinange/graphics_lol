import { AppDataSource } from '../data-source';
import { Queues } from '../entities/queues';



export const queuesRepository = AppDataSource.getRepository(Queues)