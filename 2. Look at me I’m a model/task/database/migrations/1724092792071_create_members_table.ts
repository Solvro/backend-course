import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('member_id')
      table.string('first_name')
      table.string('last_name')
      table.enum('status', ['BREAK_IN', 'ACTIVE', 'NON_ACTIVE', 'HONORARY'])
      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
