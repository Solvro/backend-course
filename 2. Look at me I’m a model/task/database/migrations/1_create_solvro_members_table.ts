import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'solvro_members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      
      table.string('name', 50).notNullable()
      table.string('surname', 50).notNullable()
      table.string('index', 6).notNullable().unique()
      table.text('biography', 'longtext').nullable()
      table.enum('status', ['active', 'inactive', 'new', 'honorary']).notNullable().defaultTo('new')
      
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
