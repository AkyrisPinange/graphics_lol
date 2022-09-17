import { Request, Response } from "express";
import { sumonnerRepository } from "../repositories/SumonnerRepository";
import { AppDataSource } from "../data-source";
import { Sumonner } from "../entities/Sumonner";
import { ILike } from "typeorm";
import fetch from "node-fetch";
export default class SumonnerController {

  async create(req: Request, res: Response) {
    const { puuid, name } = req.body;

    try {
      const userExists = await sumonnerRepository.findOne({
        where: {
          puuid: puuid,
        },
      });

      if (userExists?.puuid != null) {
        return res
          .status(200)
          .json(`O invocador ${userExists.name} já está cadastrado!`);
      }

      const newSumonner = sumonnerRepository.create({
        name,
        puuid,
      });

      await sumonnerRepository.save(newSumonner);

      return res.status(201).json(newSumonner);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  }

  async update(req: Request, res: Response) {
    const { puuid, name } = req.body;

    const userExists = await sumonnerRepository.findOne({
      where: {
        puuid: puuid,
      },
    });

    if (userExists?.puuid === null) {
      return res.status(200).json(`O invocador ${userExists.name} não existe!`);
    }

    const updateSumonner = await AppDataSource.createQueryBuilder()
      .update(Sumonner)
      .set({ name: name })
      .where("puuid = :puuid", { puuid: puuid })
      .execute();

    return res.status(201).json("Atualizado Com sucesso!");
  }

  async list(req: Request, res: Response) {
    const { name } = req.body;

    const sumonners = await sumonnerRepository.findBy({
        name: ILike(`%${name}%`)
    })
    return res.status(200).json(sumonners);
  }

  getSumonner = async (req: Request, res: Response) => {
    const { name } = req.body;
   
      const result = await this.getSumonnerApi(name);
    
      if( result?.status?.status_code == 404){
        
        res.status(200).json("Invocador não existe!")

      }
       
      return res.status(200).json(result);
  }

  getSumonnerApi = async (name:String) => {
    
    const response =  await fetch(
      `${process.env.URLBR1}/summoner/v4/summoners/by-name/${name}?api_key=${process.env.TOKEN}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      }
    );
    return response.json();
  }

}

