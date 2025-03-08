import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('index', 6).unique()
      table.string('first_name', 50)
      table.string('last_name', 50)
      table.enum('status', ['wdrożeniowy', 'aktywny', 'honorowy', 'nieaktywny'])
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
