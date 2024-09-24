import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'member_departments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('member_index').references('members.index').onDelete('CASCADE')
      table.integer('department_id').references('departments.id').onDelete('CASCADE')

      table.timestamp('created_at').defaultTo('NOW()')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
