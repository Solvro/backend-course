import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('index', 6).unique().primary()
      table.string('first_name', 50)
      table.string('last_name', 50)
      table.enum('status', ['implementing', 'active', 'inactive', 'honorary']).defaultTo('implementing')
      table.string('password').notNullable()
      table.string('photo_url').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}