import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class DataMatch {
    
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    idjogo: string;
    @Column()
    datacriacaodojogo: Date;
    
    @Column()
    duracaodojogo: Date;
    
    @Column()
    assistencias: string;
   
    @Column()
    baroeseliminados:string;
   
    @Column()
    nivelcampeao:string;
    
    @Column()
    nomecampeao: string;
    
    @Column()
    danoobejtivos: string;
    
    @Column()
    danoedificios: string;

    @Column()
    danotorres: string;

    @Column()
    danomitigado: string;
    
    @Column()
    mortes:string;

    @Column()
    detectorwards: string;

    @Column()
    doublekills:string;

    @Column()
    dragaoelimininados:string;

    @Column()
    assistenciaprimeiroabate:string;

    @Column()
    primeiroabate: string;

    @Column()
    assistenciaprimeiratorre : string;

    @Column()
    abateprimeiratorre  : string;

    @Column()
    jogoterminourendicaoantecipada : string;

    @Column()
    jogoterminourendicao: string;

    @Column()
    ouroganho: string;

    @Column()
    ourogasto: string;

    @Column()
    posicaoindividual: string;

    @Column()
    inibidordestruidos: string;

    @Column()
    inibidordestruidoequipe: string;

    @Column()
    inibidorperdido: string;

    @Column()
    item0: string;

    @Column()
    item1: string;

    @Column()
    item2: string;

    @Column()
    item3: string;

    @Column()
    item4: string;

    @Column()
    item5: string;

    @Column()
    item6: string;

    @Column()
    killingsprees: string;

    @Column()
    abates: string;

    @Column()
    lane: string;

    @Column()
    maioracertocritico: string;

    @Column()
    danomagicocausado: string;

    @Column()
    danomagicocausadocampeoes: string;

    @Column()
    objetivosroubados: string;

    @Column()
    pentakills: string;

    @Column()
    danofisicocausado: string;

    @Column()
    danofisicocausadocampeoes: string;

    @Column()
    puuid: string;

    @Column()
    quadrakills: string;

    @Column()
    role: string;

    @Column()
    pinkscompradas: string;

    @Column()
    nivelinvocador: string;

    @Column()
    nomeinvocador: string;

    @Column()
    tempoccoutros: string;

    @Column()
    totaldanocausado: string;

    @Column()
    totaldanocausadocampeos: string;

    @Column()
    totaldanoprotegidoemaliano: string;

    @Column()
    totaldedanorecebido: string;

    @Column()
    totaldecurasrecebidas : string;

    @Column()
    totalminioneliminados: string;

    @Column()
    totalcccausado: string;

    @Column()
    totaltempomorto: string;

    @Column()
    triplekills: string;

    @Column()
    torredestruidas: string;

    @Column()
    torreassistencia: string;

    @Column()
    mortesfordas: string;

    @Column()
    placardevisao: string;

    @Column()
    visaowardscompradanojogo: string;

    @Column()
    wardscolocadas: string;

    @Column()
    vitoria: string;

    @Column()

    @Column()
    fila: string;

}
