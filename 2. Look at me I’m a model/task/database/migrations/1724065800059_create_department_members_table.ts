import {BaseSchema} from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'department_members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('department_id').references('departments.id').onDelete('RESTRICT')
      table.integer('member_index').references('members.index').onDelete('CASCADE')
      table.index(['department_id', 'member_index'])

      table.timestamp('created_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}