import { Request, Response } from 'express'
import { QueryResult } from 'pg'


import { pool } from '../../database'

export const pos_logueo_sistema = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const{usuario,clave}=req.body;
        const response: QueryResult = await pool.query('select * from js_pa_sesion($1,$2);',[usuario,clave]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};
export const pos_consultar_categorias = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { tipo} = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_consultar_marcas($1);', [tipo]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};
export const pos_sugerencia_guardar = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const{idusuario,nota}=req.body;
        const response: QueryResult = await pool.query('select * from js_pa_guardar_sugerencia($1,$2);',[idusuario,nota]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};

export const pos_consultar_facturacion = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const{idtipdoc,idcliente,fecha1,fecha2,todos}=req.body;
        const response: QueryResult = await pool.query('select * from vista_nodejs_facturacion_portalweb where  case when $1=0 then true else idtipdoc=$1 end and idcliente=$2 and case when $5=0 then true else fecha between $3 and $4 end;',[idtipdoc,idcliente,fecha1,fecha2,todos]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};

export const pos_consultar_detallefacturacion = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const{idsalida}=req.body;
        const response: QueryResult = await pool.query('select * from vista_nodejs_detalle_facturacion_portalweb where idsalida=$1;',[idsalida]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};

export const get_consultar_datos_empresa = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('select * from v_rpt_datos_empresa;');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};


export const pos_listado_productos = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idmarca,descripcion,codigo_barras } = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodjs_listar_productos_pos($1,$2,$3);', [idmarca,descripcion,codigo_barras]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const pos_buscar_cliente = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { datos } = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodjs_buscar_cliente_pos($1);', [datos]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const get_listar_tipodocumento_pos = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('select idtipdoc,documento from tbtipodoctran  where idtipdoc in(27,28,14) order by 1 asc;');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};



export const pos_guardar_venta = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { _idusuario,
            _idcliente,
            _detalle,
            _total,
            _idtipodocumento,
            _idalmacen,
            _facturar,
            _tefectivo,
            _ttarjeta,
            _descuento
        } = req.body;
        const response: QueryResult = await pool.query('select * from paregistra_pedido_android($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);', [_idusuario,
            _idcliente,
            _detalle,
            _total,
            _idtipodocumento,
            _idalmacen,
            _facturar,
            _tefectivo,
            _ttarjeta,
            _descuento]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const pos_imprimir_venta = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { _idsalida } = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_imprimir_venta($1);', [_idsalida]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};