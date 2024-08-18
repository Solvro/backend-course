import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Members extends BaseSchema {
  protected tableName = 'members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('member_id') 
      table.string('first_name', 64).notNullable()
      table.string('surname', 64).notNullable()
      table.date('date_of_birth').notNullable()
      table.string('phone_number', 32).notNullable()
      table.enum('status', ['ACTIVE','INACTIVE','HONORARY']).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('photo_url', 255)
      table.string('index',6).notNullable()
      table.string('supervisor',64).notNullable()

      table.timestamp('created_at', { useTz: true }).notNullable() 
      table.timestamp('updated_at', { useTz: true }).notNullable() 
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
