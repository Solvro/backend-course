import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Kursy extends BaseSchema {
  protected tableName = 'kursy'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('nazwa_kursu', 255).notNullable().unique()
      table.integer('id_dzialu').unsigned() // Ensure it's unsigned
      table.text('zasoby', 'longtext')
      table.text('opis', 'longtext')
      table.primary(['nazwa_kursu'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
