import {Router} from 'express'
const router=Router();

import {pos_logueo_sistema,pos_sugerencia_guardar,pos_consultar_facturacion,pos_consultar_detallefacturacion,get_consultar_datos_empresa} from '../../controllers/portal_facturacion/pa_sesion.controller'
var ruta_principal = "/PortalWeb" ; 
router.post(ruta_principal+'/logueo',pos_logueo_sistema);
router.post(ruta_principal+'/sugerencias',pos_sugerencia_guardar);
router.post(ruta_principal+'/listar_facturacion',pos_consultar_facturacion);
router.post(ruta_principal+'/listar_detallefacturacion',pos_consultar_detallefacturacion);
router.get(ruta_principal+'/datos_empresa',get_consultar_datos_empresa);
export default router; 