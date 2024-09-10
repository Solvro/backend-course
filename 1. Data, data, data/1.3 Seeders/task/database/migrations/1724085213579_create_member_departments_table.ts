import { BaseSchema } from '@adonisjs/lucid/schema'

export default class MemberDepartments extends BaseSchema {
    protected tableName = 'member_departments'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').unique().primary()
            table.integer('member_id').notNullable().unsigned().references('id').inTable('members')
            table.integer('department_id').notNullable().unsigned().references('id').inTable('departments')
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}