import "reflect-metadata";
import * as express from "express";
//import "./database";
import { routes } from "../routes";
import axios, { AxiosResponse } from 'axios';

const app = express();

app.use(express.json());

app.use(routes);


var result


async function main(): Promise<void> {


    result =  await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/gR-vb_kwuRT3lDEK2wFcmfKUrfB0cFw9k-U--xwfB6vwkk_K4zmyEPG_5bnlDxOHPPE6X727y-1htw/ids?start=0&count=20&api_key=RGAPI-d3b6684f-4fdd-413b-87ed-cf97d4fe1d06`);

    console.log(result.data)
  }



app.listen(3000,() => console.log("Server is running"));
main()