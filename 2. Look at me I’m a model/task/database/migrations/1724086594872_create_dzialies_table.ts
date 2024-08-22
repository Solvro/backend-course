import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Dzialy extends BaseSchema {
  protected tableName = 'dzialy'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_dzialu').unsigned().notNullable().unique() // Ensure it's unsigned
      table.string('nazwa', 255)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

