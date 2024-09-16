import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('resource_link', 100).nullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }
}