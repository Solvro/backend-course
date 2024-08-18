import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'chairmen'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('chairman_id') 
      table.string('first_name', 64).notNullable()
      table.string('surname', 64).notNullable()
      table.date('date_of_birth').notNullable() 
      table.string('phone_number', 32).notNullable()
      table.timestamp('term_start_date',{ useTz: true }).notNullable()
      table.timestamp('term_end_date',{ useTz: true }).notNullable()
      table.string('email', 64).notNullable().unique()
      table.string('photo_url', 2048)

      table.timestamp('created_at', { useTz: true }).notNullable() 
      table.timestamp('updated_at', { useTz: true }).notNullable() 
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
