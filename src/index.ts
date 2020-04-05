import express from 'express'
const app=express();

import loginRoutes from './routes/pagina_web/pag_login'
import cajaRoutes from './routes/pagina_web/pag_caja'
import planillaRoutes from './routes/pagina_web/pag_configuracion'
import productosRoutes from './routes/pagina_web/pag_productos'
import clientesRoutes from './routes/pagina_web/pag_clientes'
import ventasRoutes from './routes/pagina_web/pag_ventas'


// TELEGRAM //
import telegramRoutes from './routes/telegram/pag_notificaciones'
// ********* //

// PORTAL WEB FACTURACIÓN //
import portalwebRoutes from './routes/portal_facturacion/pag_sesion'
// ********* //

// API ELO //
import api_elo from './routes/api_elo/pag_operaciones_elo'
// ********* //

// APP ANDROID //
import app_index from './routes/app_android/app_index'
import app_clientes from './routes/app_android/app_clientes'
// ********* //

//middlewares    --configuracion para recibir los datos de una res api y tambien de formularios html
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//fin
app.use(loginRoutes);
app.use(cajaRoutes);
app.use(planillaRoutes);
app.use(productosRoutes);
app.use(clientesRoutes);
app.use(telegramRoutes);
app.use(portalwebRoutes);
app.use(api_elo);
app.use(app_index);
app.use(app_clientes);
app.use(ventasRoutes);
app.listen(60);
console.log('SERVIDOR EN FUNCIONAMIENTO PUERTO',60);