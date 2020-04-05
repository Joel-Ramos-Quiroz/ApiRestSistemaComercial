import { Pool } from 'pg'
export const pool= new Pool({
    /*
    user: 'postgres',
    host: '190.117.115.75',
    password: 'ganekalejoel18',
    database: 'dbcix2',
    port: 5434
   
   user: 'postgres',
   host: 'localhost',
   password: 'ganekalejoel18',
   database: 'dbcix2',
   port: 5434

   */
   user: 'postgres',
   host: 'localhost',
   password: 'admin',
   database: 'dbgrifo',
   port: 5432
});