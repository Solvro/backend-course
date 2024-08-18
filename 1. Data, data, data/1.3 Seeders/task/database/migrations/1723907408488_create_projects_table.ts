import {BaseSchema} from '@adonisjs/lucid/schema'

export default class Projects extends BaseSchema {
    protected tableName = 'projects'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('project_id')
            table.string('name', 64).notNullable().unique()
            table.string('repository_url', 2048)
            table.text('description')
            table.enum('status', ['ONGOING', 'COMPLETED', 'ON_HOLD']).notNullable()

            table.timestamp('created_at', {useTz: true}).notNullable()
            table.timestamp('updated_at', {useTz: true}).notNullable()

            table.integer('leader_id')
                .unsigned()
                .references('leader_id')
                .inTable('leaders')
                .onDelete('SET NULL')

        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
