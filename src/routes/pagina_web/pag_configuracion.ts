import {Router} from 'express'
const router=Router();

import {pos_actualizar_seriedocumento,pos_guardar_configuracion,get_listado_configuracion,get_listado_serie_documento,get_listar_tipodocumento_pos} from '../../controllers/pagina_web/pa_configuraciones.controller'
var ruta_principal = "/SoftJGKSOFT" ; 
router.get(ruta_principal+'/listado_serie_documento',get_listado_serie_documento);
router.get(ruta_principal+'/listado_configuracion',get_listado_configuracion);
router.post(ruta_principal+'/guardar_configuracion',pos_guardar_configuracion);
router.get(ruta_principal+'/listar_tipodoc_web',get_listar_tipodocumento_pos);
router.post(ruta_principal+'/update_seriedoc',pos_actualizar_seriedocumento);
export default router;