import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Courses extends BaseSchema {
    protected tableName = 'courses'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').unsigned().unique().primary() // Ensure 'id' is unsigned
            table.string('name', 255).notNullable()
            table.integer('department_id').unsigned().notNullable().references('id').inTable('departments')
            table.text('description', 'longtext')
            table.string('link', 255)
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}