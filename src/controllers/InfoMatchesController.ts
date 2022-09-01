import { Request, Response } from "express";
import { sumonnerRepository } from "../repositories/SumonnerRepository";
import { infoMatchRepository } from "../repositories/InfoMatchRepository";
import fetch from "node-fetch";
import { queuesRepository } from "../repositories/QueuesRepository";
import { InfoMatche } from "../entities/InfoMatche";
import { json } from "stream/consumers";
import { Interface } from "readline";

export interface Info {
  idjogo: string;
   datacriacaodojogo: Date;
  duracaodojogo: number;
  assistencias: string;
  baroeseliminados: string;
  nivelcampeao: string;
  nomecampeao: string;
  danoobejtivos: string;
  danoedificios: string;
  danotorres: string;
  danomitigado: string;
  mortes: string;
  detectorwards: string;
  doublekills: string;
  dragaoelimininados: string;
  assistenciaprimeiroabate: string;
  primeiroabate: string;
  assistenciaprimeiratorre: string;
  abateprimeiratorre: string;
  jogoterminourendicaoantecipada: string;
  jogoterminourendicao: string;
  ouroganho: string;
  ourogasto: string;
  posicaoindividual: string;
  inibidordestruidos: string;
  inibidordestruidoequipe: string;
  inibidorperdido: string;
  item0: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
  killingsprees: string;
  abates: string;
  lane: string;
  maioracertocritico: string;
  danomagicocausado: string;
  danomagicocausadocampeoes: string;
  objetivosroubados: string;
  pentakills: string;
  danofisicocausado: string;
  danofisicocausadocampeoes: string;
  puuid: string;
  quadrakills: string;
  role: string;
  pinkscompradas: string;
  nivelinvocador: string;
  nomeinvocador: string;
  desistenciadotime: string;
  tempoccoutros: string;
  totaldanocausado: string;
  totaldanocausadocampeos: string;
  totaldanoprotegidoemaliano: string;
  totaldedanorecebido: string;
  totaldecurasrecebidas: string;
  totalminioneliminados: string;
  totalcccausado: string;
  totaltempomorto: number;
  triplekills: string;
  torredestruidas: string;
  torreassistencia: string;
  mortesfordas: string;
  placardevisao: string;
  visaowardscompradanojogo: string;
  wardscolocadas: string;
  wardskilled: string;
  vitoria: string;
  fila: string;
};

export default class InfoMatchController {
  async create(infos: Info) {
    try {
      var infosMatch = new InfoMatche();
      infosMatch.idjogo = infos.idjogo;
      infosMatch.datacriacaodojogo = infos.datacriacaodojogo;
      infosMatch.duracaodojogo = infos.duracaodojogo;
      infosMatch.assistencias = infos.assistencias;
      infosMatch.baroeseliminados = infos.baroeseliminados;
      infosMatch.nivelcampeao = infos.nivelcampeao;
      infosMatch.nomecampeao = infos.nomecampeao;
      infosMatch.danoobejtivos = infos.danoobejtivos;
      infosMatch.danoedificios = infos.danoedificios;
      infosMatch.danotorres = infos.danotorres;
      infosMatch.danomitigado = infos.danomitigado;
      infosMatch.mortes = infos.mortes;
      infosMatch.detectorwards = infos.detectorwards;
      infosMatch.doublekills = infos.doublekills;
      infosMatch.dragaoelimininados = infos.dragaoelimininados;
      infosMatch.assistenciaprimeiroabate = infos.assistenciaprimeiroabate;
      infosMatch.primeiroabate = infos.primeiroabate;
      infosMatch.assistenciaprimeiratorre = infos.assistenciaprimeiratorre;
      infosMatch.abateprimeiratorre = infos.abateprimeiratorre;
      infosMatch.jogoterminourendicaoantecipada =
        infos.jogoterminourendicaoantecipada;
      infosMatch.jogoterminourendicao = infos.jogoterminourendicao;
      infosMatch.ouroganho = infos.ouroganho;
      infosMatch.ourogasto = infos.ourogasto;
      infosMatch.posicaoindividual = infos.posicaoindividual;
      infosMatch.inibidordestruidos = infos.inibidordestruidos;
      infosMatch.inibidordestruidoequipe = infos.inibidordestruidoequipe;
      infosMatch.inibidorperdido = infos.inibidorperdido;
      infosMatch.item0 = infos.item0;
      infosMatch.item1 = infos.item1;
      infosMatch.item2 = infos.item2;
      infosMatch.item3 = infos.item3;
      infosMatch.item4 = infos.item4;
      infosMatch.item5 = infos.item5;
      infosMatch.item6 = infos.item6;
      infosMatch.killingsprees = infos.killingsprees;
      infosMatch.abates = infos.abates;
      infosMatch.lane = infos.lane;
      infosMatch.maioracertocritico = infos.maioracertocritico;
      infosMatch.danomagicocausado = infos.danomagicocausado;
      infosMatch.danomagicocausadocampeoes = infos.danomagicocausadocampeoes;
      infosMatch.objetivosroubados = infos.objetivosroubados;
      infosMatch.pentakills = infos.pentakills;
      infosMatch.danofisicocausado = infos.danofisicocausado;
      infosMatch.danofisicocausadocampeoes = infos.danofisicocausadocampeoes;
      infosMatch.puuid = infos.puuid;
      infosMatch.quadrakills = infos.quadrakills;
      infosMatch.role = infos.role;
      infosMatch.pinkscompradas = infos.pinkscompradas;
      infosMatch.nivelinvocador = infos.nivelinvocador;
      infosMatch.nomeinvocador = infos.nomeinvocador;
      infosMatch.desistenciadotime = infos.desistenciadotime;
      infosMatch.tempoccoutros = infos.tempoccoutros;
      infosMatch.totaldanocausado = infos.totaldanocausado;
      infosMatch.totaldanocausadocampeos = infos.totaldanocausadocampeos;
      infosMatch.totaldanoprotegidoemaliano = infos.totaldanoprotegidoemaliano;
      infosMatch.totaldedanorecebido = infos.totaldedanorecebido;
      infosMatch.totaldecurasrecebidas = infos.totaldecurasrecebidas;
      infosMatch.totalminioneliminados = infos.totalminioneliminados;
      infosMatch.totalcccausado = infos.totalcccausado;
      infosMatch.totaltempomorto = infos.totaltempomorto;
      infosMatch.triplekills = infos.triplekills;
      infosMatch.torredestruidas = infos.torredestruidas;
      infosMatch.torreassistencia = infos.torreassistencia;
      infosMatch.mortesfordas = infos.mortesfordas;
      infosMatch.placardevisao = infos.placardevisao;
      infosMatch.visaowardscompradanojogo = infos.visaowardscompradanojogo;
      infosMatch.wardscolocadas = infos.wardscolocadas;
      infosMatch.wardskilled = infos.wardskilled;
      infosMatch.vitoria = infos.vitoria;
      infosMatch.fila = infos.fila;

     let newInfoMatch = await infoMatchRepository.save(infosMatch);
      console.log(newInfoMatch);
    } catch (error) {
      console.error(error);
    }
  }

  List = async (matches: Array<string>, puuid: String) => {
    try {
      for (let matche of matches) {
        if (matche != "") {
          let infos = await this.getInfoMatch(matche);
          this.filterData(infos, puuid);
          
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  getInfoMatch = async (matche: string) => {
    const response = await fetch(
      `${process.env.URL}/match/v5/matches/${matche}?api_key=${process.env.TOKEN}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      }
    );

    return await response.json();
  };


  filterData = (infos:any, puuid: String) => {

    infos.info?.participants.forEach(async (info: any) => {
      if (info.puuid === puuid) {
        let gameDuration = (infos?.info?.gameDuration % 3600) / 60;
        let totaltempomorto = (info?.totalTimeSpentDead % 3600) / 60;
        let queues = await queuesRepository.find({
          select: {
            description: true,
          },
          where: {
            queueid: infos?.info?.queueId,
          },
        });

        let infosMatch = {
          idjogo: infos?.info?.gameId,
           datacriacaodojogo: new Date(
            infos?.info?.gameStartTimestamp),
          duracaodojogo: parseFloat(Number(gameDuration)?.toFixed(2)),
          assistencias: info?.assists,
          baroeseliminados: info?.baronKills,
          nivelcampeao: info?.champLevel,
          nomecampeao: info?.championName,
          danoobejtivos: info?.damageDealtToObjectives,
          danoedificios: info?.damageDealtToBuildings,
          danotorres: info?.damageDealtToTurrets,
          danomitigado: info?.damageSelfMitigated,
          mortes: info?.deaths,
          detectorwards: info?.detectorWardsPlaced,
          doublekills: info?.doubleKills,
          dragaoelimininados: info?.dragonKills,
          assistenciaprimeiroabate: info?.firstBloodAssist,
          primeiroabate: info?.firstBloodKill,
          assistenciaprimeiratorre: info?.firstTowerAssist,
          abateprimeiratorre: info?.firstTowerKill,
          jogoterminourendicaoantecipada: info?.gameEndedInEarlySurrender,
          jogoterminourendicao: info?.gameEndedInSurrender,
          ouroganho: info?.goldEarned,
          ourogasto: info?.goldSpent,
          posicaoindividual: info?.individualPosition,
          inibidordestruidos: info?.inhibitorKills,
          inibidordestruidoequipe: info?.inhibitorTakedowns,
          inibidorperdido: info?.inhibitorsLost,
          item0: info?.item0,
          item1: info?.item1,
          item2: info?.item2,
          item3: info?.item3,
          item4: info?.item4,
          item5: info?.item5,
          item6: info?.item6,
          killingsprees: info?.killingSprees,
          abates: info?.kills,
          lane: info?.lane,
          maioracertocritico: info?.largestCriticalStrike,
          danomagicocausado: info?.magicDamageDealt,
          danomagicocausadocampeoes: info?.magicDamageDealtToChampions,
          objetivosroubados: info?.objectivesStolen,
          pentakills: info?.pentaKills,
          danofisicocausado: info?.physicalDamageDealt,
          danofisicocausadocampeoes: info?.physicalDamageDealtToChampions,
          puuid: info?.puuid,
          quadrakills: info?.quadraKills,
          role: info?.role,
          pinkscompradas: info?.sightWardsBoughtInGame,
          nivelinvocador: info?.summonerLevel,
          nomeinvocador: info?.summonerName,
          desistenciadotime: info?.teamEarlySurrendered,
          tempoccoutros: info?.timeCCingOthers,
          totaldanocausado: info?.totalDamageDealt,
          totaldanocausadocampeos: info?.totalDamageDealtToChampions,
          totaldanoprotegidoemaliano: info?.totalDamageShieldedOnTeammates,
          totaldedanorecebido: info?.totalDamageTaken,
          totaldecurasrecebidas: info?.totalHealsOnTeammates,
          totalminioneliminados: info?.totalMinionsKilled,
          totalcccausado: info?.totalTimeCCDealt,
          totaltempomorto: parseFloat(Number(totaltempomorto)?.toFixed(2)),
          triplekills: info?.tripleKills,
          torredestruidas: info?.turretKills,
          torreassistencia: info?.turretTakedowns,
          mortesfordas: info?.unrealKills,
          placardevisao: info?.visionScore,
          visaowardscompradanojogo: info?.visionWardsBoughtInGame,
          wardscolocadas: info?.wardsPlaced,
          wardskilled: info?.wardsKilled,
          vitoria: info?.win,
          fila: queues[0].description ,
        };

        this.create(infosMatch)
      }
    });
  }
}
