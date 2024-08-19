import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
    connection: 'mysql',  // Change the connection to 'mysql'
    connections: {
        mysql: {  // Change the key from 'postgres' to 'mysql'
            client: 'mysql2',  // Use the 'mysql2' client
            connection: {
                host: env.get('DB_HOST'),
                port: env.get('DB_PORT'),
                user: env.get('DB_USER'),
                password: env.get('DB_PASSWORD'),
                database: env.get('DB_DATABASE'),
            },
            migrations: {
                naturalSort: true,
                paths: ['database/migrations'],
            },
        },
    },
})

export default dbConfig