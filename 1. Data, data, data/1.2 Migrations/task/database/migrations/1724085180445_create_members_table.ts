import { BaseSchema } from '@adonisjs/lucid/schema';

export default class Members extends BaseSchema {
    protected tableName = 'members'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').unique().primary()
            table.string('index', 255).notNullable()
            table.string('first_name', 255).notNullable()
            table.string('last_name', 255).notNullable()
            table.string('status', 255).notNullable()
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}