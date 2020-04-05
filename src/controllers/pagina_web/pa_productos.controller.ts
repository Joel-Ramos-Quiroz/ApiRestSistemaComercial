import { Request, Response } from 'express'
import { QueryResult } from 'pg'

import { pool } from '../../database'

export const get_listado_lineas = async (req: Request, res: Response): Promise<Response> => {
    try {
        let v1="'Todos'";
        //console.log(v1);
        
        const response: QueryResult = await pool.query('select idlinea,descripcion from tblinea union select 0,'+v1+' order by 1 asc;');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};

export const pos_listado_sublineas = async (req: Request, res: Response): Promise<Response> => {
    try {
        let v1="'Todos'";
        //const id= parseInt(req.params.id)
        const { idlinea } = req.body;
        const response: QueryResult = await pool.query('select idsubgrupo,descripcion from tbsubgrupo where idgrupo=($1) union select 0,'+v1+' order by 1 asc;', [idlinea]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const get_listado_marcas = async (req: Request, res: Response): Promise<Response> => {
    try {

        let v1="'Todos'";
        const response: QueryResult = await pool.query('select idgrupo as idmarca,descripcion from tbgrupo union select 0,'+v1+' order by 1 asc;');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema'+e);
    }
};


export const pos_listado_productos = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idlinea,idsublinea,idmarca,descripcion } = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodjs_listar_productos($1,$2,$3,$4);', [idlinea,idsublinea,idmarca,descripcion]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};
export const pos_buscar_x_codigo_barras = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { codigo_barras } = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodjs_buscar_x_codigo_barras($1);', [codigo_barras]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};
export const pos_actualizar_precios = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idpresprod,tipo,precio,idusuario} = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodjs_actualizar_precios_producto($1,$2,$3,$4);', [idpresprod,tipo,precio,idusuario]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const pos_consultar_lineas = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { tipo} = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_consultar_lineas($1);', [tipo]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const pos_mantenimiento_lineas = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nuevo,idlinea,descripcion,otrocodigo,utilidad,tipo} = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_mantenimiento_linea($1,$2,$3,$4,$5,$6);', [nuevo,idlinea,descripcion,otrocodigo,utilidad,tipo]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const pos_consultar_sublineas = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { tipo} = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_consultar_sublineas($1);', [tipo]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const pos_mantenimiento_sublineas = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nuevo,idsublinea,descripcion,idlinea,tipo} = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_mantenimiento_sublinea($1,$2,$3,$4,$5);', [nuevo,idsublinea,descripcion,idlinea,tipo]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};




export const pos_consultar_marcas = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { tipo} = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_consultar_marcas($1);', [tipo]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const pos_mantenimiento_marcas = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nuevo,idmarca,descripcion,url_imagen} = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_mantenimiento_marca($1,$2,$3,$4);', [nuevo,idmarca,descripcion,url_imagen]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const pos_guardar_producto = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { _nuevo,_idpresprod,_idmarca,_descripcion,_codigo_barras,_detalle,_foto,_precio_costo,_precio_venta} = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_guardar_producto($1,$2,$3,$4,$5,$6,$7,$8,$9);', [ _nuevo,_idpresprod,_idmarca,_descripcion,_codigo_barras,_detalle,_foto,_precio_costo,_precio_venta]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};


export const pos_eliminar_producto = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { _idprod} = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_eliminar_producto($1);', [_idprod]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};

export const pos_eliminar_marca = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { _idmarca} = req.body;
        const response: QueryResult = await pool.query('select * from pa_nodejs_eliminar_marca($1);', [_idmarca]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};