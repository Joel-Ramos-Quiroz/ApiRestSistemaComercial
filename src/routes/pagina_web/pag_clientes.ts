import {Router} from 'express'
const router=Router();

import {
    get_listado_clientes,
    get_listado_departamentos,
    pos_listado_provincia,
    pos_listado_distritos,
    pos_mantenimiento_cliente,
} from '../../controllers/pagina_web/pa_clientes.controller'

var ruta_principal = "/SoftJGKSOFT" ; 
router.get(ruta_principal+'/listado_clientes',get_listado_clientes);
router.get(ruta_principal+'/listado_departamentos',get_listado_departamentos);
router.post(ruta_principal+'/listado_provincias',pos_listado_provincia);
router.post(ruta_principal+'/listado_distritos',pos_listado_distritos);
router.post(ruta_principal+'/mantenimiento_clientes',pos_mantenimiento_cliente);
export default router;