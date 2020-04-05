import {Router} from 'express'
const router=Router();

import {pos_notificar_asignados_ticket} from '../../controllers/telegram/pa_notificaciones.controller'
var ruta_principal = "/SoftJGKSOFT" ; 
router.post(ruta_principal+'/notificar_asignados',pos_notificar_asignados_ticket);

export default router;