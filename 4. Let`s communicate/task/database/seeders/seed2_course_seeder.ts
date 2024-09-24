import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'


export default class extends BaseSeeder {
    async run() {
        await db.rawQuery("insert into `courses`(`id`, `name`, `department_id`, `description`, `link`) values (null, 'Kurs backendowy', 1, 'kurs backend desciritipn', 'link to course');")
    }
}