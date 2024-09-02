import { BaseSchema } from '@adonisjs/lucid/schema'

export default class SolvroMembers extends BaseSchema {
  protected tableName = 'solvro_members'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')  // Kolumna indeksu
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('status').notNullable()

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}