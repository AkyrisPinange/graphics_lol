import { Router } from "express";
import InfoMatchController from "./controllers/InfoMatchesController";
import SumonnerController from './controllers/SumonnerController';
import GetMatcheByPuuidController from './controllers/GetMatcheByPuuidController';

const routes = Router();
    
/***************************************************************/
/*                         SUMONNER                            */   
routes.post('/sumonnerSave', new SumonnerController().create)
routes.put('/sumonnerUpdate', new SumonnerController().update)
routes.get('/sumonnerList', new SumonnerController().list)
routes.post('/api/sumonnerApi',  new SumonnerController().getSumonner)
/**************************************************************/

routes.post('/infoMatchCreate', new InfoMatchController().create)
// routes.post('/infoMatchList', new InfoMatchController().List)
routes.post('/getMatchBypuuid', new GetMatcheByPuuidController().List)


export default routes