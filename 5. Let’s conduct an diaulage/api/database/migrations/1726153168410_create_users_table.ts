import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'solvro_members'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('password').notNullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('password')
    })
  }
}
