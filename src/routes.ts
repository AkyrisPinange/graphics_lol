import { Router } from "express";
import InfoMatchController from "./controllers/InfoMatchesController";
import SumonnerController from './controllers/SumonnerController';
import GetMatcheByPuuidController from './controllers/GetMatcheByPuuidController';

const routes = Router();

routes.post('/sumonner', new SumonnerController().create)
routes.post('/infoMatch', new InfoMatchController().create)
routes.post('/getMatchBypuuid', new GetMatcheByPuuidController().List)


export default routes