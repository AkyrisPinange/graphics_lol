import { Request, Response } from "express";
import { sumonnerRepository } from "../repositories/SumonnerRepository";
import { AppDataSource } from "../data-source";
import { Sumonner } from "../entities/Sumonner";
import { ILike } from "typeorm";

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

    return res.status(201).json("Atualiza Com sucesso!");
  }
  async list(req: Request, res: Response) {
    const { name } = req.body;

    const sumonners = await sumonnerRepository.findBy({
        name: ILike(`%${name}%`)
    })
    return res.status(200).json(sumonners);
  }
}
