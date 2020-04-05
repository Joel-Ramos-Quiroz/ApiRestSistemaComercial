import { Request, Response } from 'express'
import { QueryResult } from 'pg'

import { pool } from '../../database'


export const pos_notificar_asignados_ticket = async (req: Request, res: Response): Promise<Response> => {
    try {
        //const id= parseInt(req.params.id)

        //const { idtelegram, asunto, descripcion } = req.body;
        //console.log(req.body.idtelegram)
        //console.log(req.body.asunto)
        //console.log(req.body.descripcion)
        
        const TelegramBot = require('node-telegram-bot-api');
        // API Token Telegram
        
       
        const token = '1021685025:AAE8Q85QaIl8x3dXfzCESfodvku0DJnc_Dw';
        
        // Create a bot that uses 'polling' to fetch new updates
        const bot = new TelegramBot(token, { polling: false });
        bot.sendMessage(req.body.idtelegram, "Hola, JOEL te han Asignado un Ticket")
        bot.sendMessage(req.body.idtelegram, "Asunto : "+req.body.asunto)
        bot.sendMessage(req.body.idtelegram,  "Descripción : "+req.body.descripcion)

        //const response: QueryResult = await pool.query('select * from js_pa_totales_control_caja(468);');
        //return res.status(200).json(response.rows);
        
        return res.status(200).json("OK");
    }
    catch (e) {
        return res.status(500).json('Error Interno en el Servidor de NodeJs comuniquese con el Área de Sistema' + e);
    }
};
