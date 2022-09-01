import { Router } from "express";
import InfoMatchController from "./controllers/InfoMatchesController";
import SumonnerController from './controllers/SumonnerController';
import GetMatcheByPuuidController from './controllers/GetMatcheByPuuidController';

const routes = Router();

routes.post('/sumonner', new SumonnerController().create)
routes.post('/infoMatchCreate', new InfoMatchController().create)
// routes.post('/infoMatchList', new InfoMatchController().List)
routes.post('/getMatchBypuuid', new GetMatcheByPuuidController().List)


export default routes