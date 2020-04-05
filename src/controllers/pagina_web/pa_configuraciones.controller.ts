import { Request, Response } from 'express'
import { QueryResult } from 'pg'

import { pool } from '../../database'

export const get_listar_tipodocumento_pos = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('select idtipdoc,documento from tbtipodoctran  where idtipdoc in(27,28,14,1,2,22) order by 1 asc;');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};

export const get_listado_serie_documento = async (req: Request, res: Response): Promise<Response> => {
    try {
        
        const response: QueryResult = await pool.query('select s.idserie,t.idtipdoc,t.codigo_sunat,t.documento,s.serie,s.correlativo from tbseriedoc s inner join tbtipodoctran t on s.idtipdoc=t.idtipdoc where t.idtipdoc in(27,28,14,1,2,22);');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};

export const get_listado_configuracion = async (req: Request, res: Response): Promise<Response> => {
    try {
        
        const response: QueryResult = await pool.query('select * from pa_nodejs_listar_configuracion();');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};

export const pos_guardar_configuracion = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { ip,p1,p2,p_ruc,p_razonsocial,
            p_direccion,
            p_telefono,
            p_celular,
            p_numcta,
            p_email,
            p_web,
            p_textofinal,
            p_subtitulo,
            p_ck1,
            p_ck2} = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_guardar_configuracion($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15);', [ip,p1,p2,p_ruc,p_razonsocial,
            p_direccion,
            p_telefono,
            p_celular,
            p_numcta,
            p_email,
            p_web,
            p_textofinal,
            p_subtitulo,
            p_ck1,
            p_ck2]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};



export const pos_actualizar_seriedocumento = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idserie,serie,correlativo} = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_update_seriedoc($1,$2,$3);', [idserie,serie,correlativo]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};