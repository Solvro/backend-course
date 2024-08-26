import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'members_departments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('member_index', 6).references('index').inTable('members').onDelete('CASCADE')
      table.bigInteger('department_id').references('id').inTable('departments').onDelete('CASCADE')
      table.timestamp('created_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
