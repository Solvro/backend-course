import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Departments extends BaseSchema {
    protected tableName = 'departments'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').unique()
            table.string('name', 255).notNullable()
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}