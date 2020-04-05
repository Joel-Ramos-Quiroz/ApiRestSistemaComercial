import { Request, Response } from 'express'
import { QueryResult } from 'pg'

import { pool } from '../../database'





export const pos_obtener_totales = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const { idcajamovimiento } = req.body;

        const response: QueryResult = await pool.query('select * from js_pa_totales_control_caja($1);', [idcajamovimiento]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const pos_listado_movimientos = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const { idcajamovimiento, tipo_movimiento } = req.body;
        const response: QueryResult = await pool.query('select * from js_pa_listado_movimiento_caja($1,$2);', [idcajamovimiento, tipo_movimiento]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};

export const pos_listado_movimientos_x_fecha = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const { fecha, tipo_movimiento } = req.body;
        const response: QueryResult = await pool.query('select * from js_pa_listado_movimiento_caja_x_fecha($1,$2);', [fecha, tipo_movimiento]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};

export const pos_obtener_totales_x_fecha = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const { fecha } = req.body;
        const response: QueryResult = await pool.query('select * from js_pa_totales_control_caja_x_fecha($1);', [fecha]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};

export const pos_aperturar_caja = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const { _idusuario,_mi,_observacion } = req.body;
        const response: QueryResult = await pool.query('select * from nodejs_aperturarcaja_principal($1,$2,$3);', [_idusuario,_mi,_observacion]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};

export const get_listar_egresos_ultima_caja = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('select * from pa_nodejs_consultar_ultimos_egresos_caja();');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};
export const get_listar_ingresos_ultima_caja = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('select * from pa_nodejs_consultar_ultimos_ingresos_caja();');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const pos_cierre_caja = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const {_observacion } = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_guardar_arqueo($1);', [_observacion]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const pos_nuevo_egreso_caja = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const { intotalingreso,inidusu,inobservacion } = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_registrar_egreso($1,$2,$3);', [intotalingreso,inidusu,inobservacion]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const pos_nuevo_ingreso_caja = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)
        const { inidusuario,inimporte,inconcepto } = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_ingreso_caja($1,$2,$3);', [ inidusuario,inimporte,inconcepto]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const get_verificar_estado_caja = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('select * from pa_nodejs_verificar_estado_caja();');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};