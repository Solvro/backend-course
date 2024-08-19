import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Czlonkowie extends BaseSchema {
  protected tableName = 'czlonkowie'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_czlonka').unique()
      table.string('imie', 255)
      table.string('nazwisko', 255)
      table.string('status', 255)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
