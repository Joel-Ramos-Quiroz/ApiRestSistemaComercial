import { Request, Response } from 'express'
import { QueryResult } from 'pg'


import { pool } from '../../database'

export const pos_listado = async (req: Request, res: Response): Promise<Response> => {
    try {
        const{busqueda}=req.body;
        let v1="'%"+busqueda+"%'";
        const response: QueryResult = await pool.query('select * from app_listado_clientes where datos ilike '+v1+' order by datos asc;');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};