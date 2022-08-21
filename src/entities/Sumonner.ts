import { Column, Entity, OneToMany, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";
import { InfoMatche } from "./InfoMatche";

@Entity('sumonners')
export class Sumonner{
    
    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn()
    puuid: string;

    @Column()
    name:string;

}