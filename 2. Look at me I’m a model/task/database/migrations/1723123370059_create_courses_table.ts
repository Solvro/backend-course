import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').unique()
      table.integer('department_id').references('departments.id').onDelete("RESTRICT")
      table.string('description', 65535).nullable()
      table.string('url').nullable()

      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}