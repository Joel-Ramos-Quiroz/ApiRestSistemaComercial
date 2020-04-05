import {Router} from 'express'
const router=Router();

import {pos_obtener_totales,
    pos_listado_movimientos,
    pos_listado_movimientos_x_fecha,
    pos_obtener_totales_x_fecha,
    pos_aperturar_caja,
    get_listar_egresos_ultima_caja,
    get_listar_ingresos_ultima_caja,
    pos_cierre_caja,
    pos_nuevo_egreso_caja,
    pos_nuevo_ingreso_caja,
    get_verificar_estado_caja} from '../../controllers/pagina_web/pa_caja.controller'
var ruta_principal = "/SoftJGKSOFT" ; 
router.post(ruta_principal+'/caja_totales',pos_obtener_totales);
router.post(ruta_principal+'/caja_listado_movimientos',pos_listado_movimientos);
router.post(ruta_principal+'/caja_listado_movimientos_x_fecha',pos_listado_movimientos_x_fecha);
router.post(ruta_principal+'/caja_totales_x_fecha',pos_obtener_totales_x_fecha);
router.post(ruta_principal+'/aperturar_caja',pos_aperturar_caja);
router.get(ruta_principal+'/egresos_ultima_caja',get_listar_egresos_ultima_caja);
router.get(ruta_principal+'/ingresos_ultima_caja',get_listar_ingresos_ultima_caja);
router.post(ruta_principal+'/cierre_caja',pos_cierre_caja);
router.post(ruta_principal+'/nuevo_egreso_caja',pos_nuevo_egreso_caja);
router.post(ruta_principal+'/nuevo_ingreso_caja',pos_nuevo_ingreso_caja);
router.get(ruta_principal+'/verificar_estado_caja',get_verificar_estado_caja);
export default router;