import { Request, Response } from "express";
import { sumonnerRepository } from '../repositories/SumonnerRepository';



export  default class SumonnerController{

    async create(req: Request, res: Response){
        const {puuid, name} = req.body;  

        try {
            const newSumonner = sumonnerRepository.create({
                name,
                puuid
            })
            
            await sumonnerRepository.save(newSumonner);

            return res.status(201).json(newSumonner)
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({error})
        }

    }
}