import {Router} from 'express'
const router=Router();

import {
    get_listado_lineas,
    pos_listado_sublineas,
    get_listado_marcas,
    pos_listado_productos,
    pos_actualizar_precios,
    pos_consultar_lineas,
    pos_mantenimiento_lineas,
    pos_consultar_sublineas,
    pos_mantenimiento_sublineas,
    pos_consultar_marcas,
    pos_mantenimiento_marcas,
    pos_guardar_producto,
    pos_eliminar_producto,
    pos_eliminar_marca,
    pos_buscar_x_codigo_barras
} from '../../controllers/pagina_web/pa_productos.controller'

var ruta_principal = "/SoftJGKSOFT" ; 
router.get(ruta_principal+'/listado_lineas',get_listado_lineas);
router.post(ruta_principal+'/listado_sublineas',pos_listado_sublineas);
router.get(ruta_principal+'/listado_marcas',get_listado_marcas);
router.post(ruta_principal+'/listado_productos',pos_listado_productos);
router.post(ruta_principal+'/actualizar_precios',pos_actualizar_precios);
router.post(ruta_principal+'/consultar_lineas',pos_consultar_lineas);
router.post(ruta_principal+'/mantenimiento_lineas',pos_mantenimiento_lineas);
router.post(ruta_principal+'/consultar_sublineas',pos_consultar_sublineas);
router.post(ruta_principal+'/mantenimiento_sublineas',pos_mantenimiento_sublineas);
router.post(ruta_principal+'/consultar_marcas',pos_consultar_marcas);
router.post(ruta_principal+'/mantenimiento_marcas',pos_mantenimiento_marcas);
router.post(ruta_principal+'/guardar_producto',pos_guardar_producto);
router.post(ruta_principal+'/eliminar_producto',pos_eliminar_producto);
router.post(ruta_principal+'/eliminar_marca',pos_eliminar_marca);
router.post(ruta_principal+'/buscar_x_codigo_barras',pos_buscar_x_codigo_barras);
export default router;