import { Request, Response } from 'express'
import { QueryResult } from 'pg'

import { pool } from '../../database'

export const pos_logueo_sistema = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const{usuario,clave}=req.body;
        const response: QueryResult = await pool.query('select * from js_pa_sesion_portal_facturacion($1,$2);',[usuario,clave]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
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
        const response: QueryResult = await pool.query('select * from vista_datos_empresa;');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};