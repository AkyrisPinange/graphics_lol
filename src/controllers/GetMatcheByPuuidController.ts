import { Request, Response } from "express";
import { dateRopository } from "../repositories/DateRepository";
import { DateSearch } from "../entities/Date";
import fetch from "node-fetch";
import { infoMatchRepository } from "../repositories/InfoMatchRepository";
import { Raw } from "typeorm";
import InfoMatchController from "./InfoMatchesController";
export default class GetMatcheByPuuidController {
  List = async (req: Request, res: Response) => {
    const { puuid, name } = req.body;

    try {
      const atualDate = new Date();
      var matches: Array<string> = [];
      const info: InfoMatchController = new InfoMatchController();
     
     let dates = await this.returnDate(puuid)
    
      for (let date of dates) {
        if (
          atualDate.getTime() / 1000 > Number(date.initialtimestamp) &&
          atualDate.getTime() / 1000 > Number(date.finaltimestamp)
        ) {
          let matche = await this.getMatchBypuuid(date, puuid);
          console.log(matche);
          matches = matches.concat(matche);
        }
      }
    
     info.List(matches, puuid);

      return res.status(200).json(matches.length != 0 ? `Foram encontrados ${matches.length} partidas ` : "Não tem partida em seu historico"  );
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  };

  getMatchBypuuid = async (date: DateSearch, puuid: String) => {
    const response = await fetch(
      `${process.env.URL}/match/v5/matches/by-puuid/${puuid}/ids?startTime=${date.initialtimestamp}` +
        `&endTime=${date.finaltimestamp}&start=0&count=100&api_key=${process.env.TOKEN}`,
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

  returnDate = async (puuid:any) => {

    const dateMatch = await infoMatchRepository.find({
      select: {
        datacriacaodojogo: true,
      },
      where: {
        puuid: puuid,
      },
      order: {
        datacriacaodojogo: "DESC",
      },
    });
    
   if(dateMatch.length > 0){
    const dates = await dateRopository.findBy({
      initialdate: Raw(
        (alias) =>
          `${alias} >'${dateMatch[0].datacriacaodojogo}'`
      ),
    });
    
    return dates;
   }else{
    const dates = await dateRopository.find()
    return dates;
   }
  };
}
