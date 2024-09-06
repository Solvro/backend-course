import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name', 255).notNullable()
      table.string('last_name', 255).notNullable()
      table.string('status').notNullable()
      table.timestamps()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}