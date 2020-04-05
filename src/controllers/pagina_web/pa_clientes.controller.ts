import { Request, Response } from 'express'
import { QueryResult } from 'pg'

import { pool } from '../../database'

export const get_listado_clientes = async (req: Request, res: Response): Promise<Response> => {
    try {
      
        //console.log(v1);
        
        const response: QueryResult = await pool.query('select * from vista_nodejs_clientes_web');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};

export const get_listado_departamentos = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('select * from vista_nodejs_departamentos');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};

export const pos_listado_provincia = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { iddep } = req.body;
        const response: QueryResult = await pool.query('select * from vista_nodejs_provincias where iddep=$1;', [iddep]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};
export const pos_listado_distritos = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idprov } = req.body;
        const response: QueryResult = await pool.query('select * from vista_nodejs_distritos where idprov=$1;', [idprov]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const pos_mantenimiento_cliente = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nuevo,idpersona,tipo,razonsocial,apellido_paterno,apellido_materno,nombres,direccion,email,nrodocumento,estado,iddistrito,idusuario,celular} = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_mantenimiento_cliente($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14);', [nuevo,idpersona,tipo,razonsocial,apellido_paterno,apellido_materno,nombres,direccion,email,nrodocumento,estado,iddistrito,idusuario,celular]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};