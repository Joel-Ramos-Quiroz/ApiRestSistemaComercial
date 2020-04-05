import { Request, Response } from 'express'
import { QueryResult } from 'pg'

import { pool } from '../../database'

export const get_consultar_datos_empresa = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('select * from vista_datos_empresa;');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};

export const pos_consultar_facturacion = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const{todos,fecha1,fecha2}=req.body;
        
        const response: QueryResult = await pool.query('select * from vista_nodejs_facturacion_portalweb where  case when $1=0 then fecha::date=now()::date else fecha between $2 and $3 end;',[todos,fecha1,fecha2]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};

export const pos_consultar_facturacion_por_codigo = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const{codigo}=req.body;
        
        const response: QueryResult = await pool.query('select * from vista_nodejs_facturacion_portalweb where  idsalida=$1;',[codigo]);
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



export const pos_anular_venta = async (req: Request, res: Response): Promise<Response> => {
    try {
        const{idsalida,fecha,motivo}=req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_anular_venta($1,$2,$3);',[idsalida,fecha,motivo]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};


export const pos_consultar_ventas_pos = async (req: Request, res: Response): Promise<Response> => {
    try {
        const{_fecha1,_fecha2}=req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_consultar_ventas_pos($1,$2);',[_fecha1,_fecha2]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};