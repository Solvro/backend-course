import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Uczestnictwa extends BaseSchema {
  protected tableName = 'uczestnictwa'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_wpisu').unique()
      table.string('nazwa_kursu', 255)
      table.integer('id_czlonka').unsigned()
      table.date('data_rozpoczecia')
      table.date('data_zakonczenia').nullable()
      table.integer('ocena')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
