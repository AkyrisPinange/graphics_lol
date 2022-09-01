import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Queues{

    @PrimaryGeneratedColumn()
    queueid: number;
    
    @Column()
    map: string;
    
    @Column()
    description: string;

    @Column()
    notes: string;

}