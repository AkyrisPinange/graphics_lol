import { Request, Response } from "express";




export  default class GetMatcheByPuuidController{

    async List(req: Request, res: Response){
        const {puuid, name} = req.body;  

        try {
         
          
        } catch (error) {
            console.error(error);
            return res.status(500).json({error})
        }

    }
}