import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'member_departments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('member_id').references('members.member_id')
      table.integer('department_id').references('departments.department_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
