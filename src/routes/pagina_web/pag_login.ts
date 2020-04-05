import {Router} from 'express'
const router=Router();

import {pos_logueo_sistema} from '../../controllers/pagina_web/pa_login.controller'
var ruta_principal = "/SoftJGKSOFT" ; 
router.post(ruta_principal+'/logueo',pos_logueo_sistema);

export default router;