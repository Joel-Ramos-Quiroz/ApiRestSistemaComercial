import {Router} from 'express'
const router=Router();

import {pos_logueo_sistema,
    pos_consultar_categorias,
    pos_consultar_facturacion,
    pos_consultar_detallefacturacion,
    get_consultar_datos_empresa,
    pos_listado_productos,
    pos_buscar_cliente,
    get_listar_tipodocumento_pos,
    pos_guardar_venta,
    pos_imprimir_venta} from '../../controllers/api_elo/pag_operaciones_elo.controller'
var ruta_principal = "/SoftJGKSOFT" ; 
router.post(ruta_principal+'/logueo',pos_logueo_sistema);
router.post(ruta_principal+'/listado_categorias',pos_consultar_categorias);
router.post(ruta_principal+'/listar_facturacion',pos_consultar_facturacion);
router.post(ruta_principal+'/listar_detallefacturacion',pos_consultar_detallefacturacion);
router.get(ruta_principal+'/datos_empresa',get_consultar_datos_empresa);
router.post(ruta_principal+'/listado_productos_pos',pos_listado_productos);
router.post(ruta_principal+'/buscar_cliente',pos_buscar_cliente);
router.get(ruta_principal+'/listar_tipodoc_pos',get_listar_tipodocumento_pos);
router.post(ruta_principal+'/guardar_venta',pos_guardar_venta);
router.post(ruta_principal+'/imprimir_venta',pos_imprimir_venta);
export default router; 