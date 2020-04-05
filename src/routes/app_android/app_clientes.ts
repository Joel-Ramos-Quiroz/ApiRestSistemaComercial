import {Router} from 'express'
const router=Router();

import {pos_listado} from '../../controllers/app_android/app_clientes.controller'
var ruta_principal = "/app/clientes" ; 
router.post(ruta_principal+'/listado',pos_listado);
export default router; 