import {Router} from 'express'
const router=Router();

import {
    get_consultar_datos_empresa,
    pos_consultar_facturacion,
    pos_consultar_detallefacturacion,
    pos_consultar_facturacion_por_codigo,
    pos_anular_venta,
    pos_consultar_ventas_pos
} from '../../controllers/pagina_web/pa_ventas.controller'
var ruta_principal = "/SoftJGKSOFT" ; 
router.get(ruta_principal+'/datos_empresa_documento',get_consultar_datos_empresa);
router.post(ruta_principal+'/listar_ventas',pos_consultar_facturacion);
router.post(ruta_principal+'/listar_detallefacturacion',pos_consultar_detallefacturacion);
router.post(ruta_principal+'/listar_ventas_por_codigo',pos_consultar_facturacion_por_codigo);
router.post(ruta_principal+'/anular_venta',pos_anular_venta);
router.post(ruta_principal+'/consultar_venta_pos',pos_consultar_ventas_pos);
export default router;