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