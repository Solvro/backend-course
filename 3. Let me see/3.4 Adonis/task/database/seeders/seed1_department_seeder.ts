import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'


export default class extends BaseSeeder {
    async run() {
        await db.rawQuery("insert into `departments`(`id`, `name`) values (null, 'Backend'), (null, 'Devops'), (null, 'Frontend'), (null, 'UI'), (null, 'ML'), (null, 'Mobile');")
    }
}