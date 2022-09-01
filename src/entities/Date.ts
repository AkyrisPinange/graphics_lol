import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class DateSearch{

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "date",})
    initialdate: Date;

    @Column()
    initialtimestamp: string;

    @Column({type: "date",})
    finaldate: Date;

    @Column()
    finaltimestamp: string;


}