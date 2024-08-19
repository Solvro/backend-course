import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Zainteresowania extends BaseSchema {
  protected tableName = 'zainteresowania'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique()
      table.integer('id_dzialu').unsigned()
      table.integer('id_czlonka').unsigned()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
